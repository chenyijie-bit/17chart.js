import set from './safe-set'
import get from './safe-get'
import {
  isArray,
  isString,
  is2Array,
  isBoolean,
  getStrLength,
  insertNewlineEveryTen,
} from './tools'
import { ObjectOf } from '17chart/types/general'
import { FONT_SIZE } from './constants'

/**
 * 统一处理Option
 * @param option （此处的option是 userOption和defaultOption合并过后的全量option）
 * @param userOption (此处的userOption是用户的option)
 */
export const handler = (
  option: ObjectOf<any>,
  userOption: ObjectOf<any>,
): void => {
  const { isPercent, percentFixed, name, isShowLabel } = userOption
  // 1. axis.name会影响grid.left和grid.right
  if (option.xAxis && option.xAxis.name) {
    const extraWidth = _getExtraWidth(option.xAxis.name, isPercent)
    option.grid.right = option.grid.right + extraWidth
  }
  if (option.yAxis && option.yAxis.name) {
    const extraWidth = _getExtraWidth(option.yAxis.name, isPercent)
    option.grid.left = option.grid.left + extraWidth
  }

  // 2. 如果是百分比的情况，则需要做格式化处理
  if (isPercent) {
    const formatterFn = function (value: number) {
      return (value * 100).toFixed(percentFixed) + '%'
    }
    const dataFormatterFn = function (item: ObjectOf<any>) {
      return (item.value * 100).toFixed(0) + '%'
    }
    // y轴的label值需要做格式化处理
    set(option, 'yAxis.axisLabel.formatter', formatterFn)
    // tooltip的值需要做格式化处理
    set(option, 'tooltip.valueFormatter', formatterFn)
    // 柱状图label的值需要做格式化处理
    set(option, 'series.0.label.formatter', dataFormatterFn)
  }

  // 3. 如果name存在，将其放置到series.0.name上
  if (name) {
    if (isString(name)) {
      set(option, 'series.0.name', name)
    } else if (isArray(name)) {
      name.forEach((_name: string, index: number) => {
        set(option, `series.${index}.name`, _name)
      })
    }
  }

  // 4. 如果X轴的名称是需要旋转的，此时需要处理名称过长的情况
  if (getIsNeedRotate(userOption)) {
    const isUserSetFormatter = get(userOption, 'xAxis.axisLabel.formatter')

    if (!isUserSetFormatter) {
      // 隐藏重叠的标签
      set(option, 'xAxis.axisLabel.hideOverlap', true)
      // 格式化处理
      set(option, 'xAxis.axisLabel.formatter', (value: string) => {
        return value.length >= 11 ? insertNewlineEveryTen(value) : value
      })
    }
  }

  // 5. 是否显示数据label
  if (isBoolean(isShowLabel)) {
    option.series.map((serieItem: ObjectOf<any>) => {
      set(serieItem, 'label.show', isShowLabel)
    })
  }
}

/**
 * 判断是否需要旋转
 */
export const getIsNeedRotate = (userOption: any): boolean => {
  let isRotate = false

  if (get(userOption, 'xAxis.axisLabel.rotate')) {
    isRotate = true
  }

  return isRotate
}

/**
 * 获取x轴的名称列表
 */
export const getXAxisList = (userOption: ObjectOf<any>): string[] => {
  const { xField, data } = userOption
  if (is2Array(data)) {
    return data[0].map((i) => i[xField])
  } else {
    return data.map((i) => i[xField])
  }
}

/**
 * 获取轴中最长的字符
 */
export const getMaxAxisLabel = (axisList: string[]): string => {
  let maxStr = ''
  axisList.forEach((axis: string) => {
    if (axis.length > maxStr.length) {
      maxStr = axis
    }
  })

  return maxStr
}

/**
 * 获取旋转x坐标后，名称的最大高度
 */
export const getLabelMaxHeightByRotateXAxisLabel = (
  userOption: ObjectOf<any>,
): number => {
  const ONE_ROW_MAX_LENGTH = 100
  const angle = get(userOption, 'xAxis.axisLabel.rotate')
  const xAxisList = getXAxisList(userOption)
  const maxLabel = getMaxAxisLabel(xAxisList)
  const length = getStrLength(maxLabel, FONT_SIZE.AXIS_LABEL)
  const height =
    Math.sin(angle) *
    (length >= ONE_ROW_MAX_LENGTH ? ONE_ROW_MAX_LENGTH : length)

  return height
}

/**
 * 获取额外的宽度
 * @param { string } name
 * @param { boolean } isPercent
 * @returns {number}
 */
const _getExtraWidth = (name: string, isPercent: boolean): number => {
  if (name.length > 2) {
    return (name.length - 2) * (isPercent ? 8 : 16)
  } else {
    return 0
  }
}
