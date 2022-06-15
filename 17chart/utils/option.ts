import set from './safe-set'
import { isArray, isString } from './tools'

// 统一处理
export const handler = (option, { isPercent, percentFixed, name }) => {
  // 1. axis.name会影响grid.left和grid.right
  if (option.xAxis && option.xAxis.name) {
    const extraWidth = getExtraWidth(option.xAxis.name, isPercent)
    option.grid.right = option.grid.right + extraWidth
  }
  if (option.yAxis && option.yAxis.name) {
    const extraWidth = getExtraWidth(option.yAxis.name, isPercent)
    option.grid.left = option.grid.left + extraWidth
  }

  // 2. 如果是百分比的情况，则需要做格式化处理
  if (isPercent) {
    const formatterFn = function (value: number) {
      return (value * 100).toFixed(percentFixed) + '%'
    }
    const dataFormatterFn = function (item: object) {
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
}

// 获取额外的宽度
const getExtraWidth = (name: string, isPercent: boolean) => {
  if (name.length > 2) {
    return (name.length - 2) * (isPercent ? 8 : 16)
  } else {
    return 0
  }
}
