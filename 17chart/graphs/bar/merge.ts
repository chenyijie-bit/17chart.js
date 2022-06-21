import get from '../../utils/safe-get'
import set from '../../utils/safe-set'
import { deepAssign, isArray } from '../../utils/tools'
import { handler, getXAxisList } from '../../utils/option'
import { BarDefaultOption, ObjectOf } from './types'
import { is2Array } from '../../utils/tools'
import { getIsLegendShow } from '../../utils/option'
import { getBarSerieItem, getMarkLine, getDataZoom } from './default'

export const merge = (
  defaultOption: BarDefaultOption,
  userOption: ObjectOf<any>,
) => {
  let { data, yField, isPercent, markLine, dataZoom, isStack, labelColor } =
    userOption

  if (is2Array(data)) {
    // 挂载xAxis的数据
    defaultOption.xAxis.data = getXAxisList(userOption)

    // 挂载图表数据
    const seriesData = data.map((array: any[], index: number) => {
      const seriesItem = getBarSerieItem()
      seriesItem.data = array.map((i) => i[yField])

      if (isStack) {
        seriesItem.stack = 'total'
        seriesItem.label.position = 'inside'
        if (labelColor) {
          seriesItem.label.color = isArray(labelColor)
            ? labelColor[index]
            : labelColor
        }
      }
      return seriesItem
    })

    defaultOption.series = seriesData
  } else {
    // 挂载xAxis的数据
    defaultOption.xAxis.data = getXAxisList(userOption)

    // 挂载图表数据
    const seriesItem = getBarSerieItem()
    const seriesData = data.map((i: ObjectOf<any>) => i[yField])
    seriesItem.data = seriesData
    defaultOption.series.push(seriesItem)
  }

  // 查看是否有辅助线存在
  if (markLine) {
    const _markLine = getMarkLine(isPercent)
    deepAssign(_markLine, markLine)
    defaultOption.series[0].markLine = _markLine
  }

  // 查看是否有dataZoom的存在(如果有，则需要调整底部的预留高度)
  if (dataZoom) {
    const _dataZoom = getDataZoom()
    deepAssign(_dataZoom, dataZoom)
    defaultOption.dataZoom = _dataZoom
    if (!get(userOption, 'grid.bottom')) {
      defaultOption.grid.bottom = 80
      if (getIsLegendShow(userOption)) {
        set(userOption, 'legend.bottom', 48)
      }
    }
  }

  // Merge数据(需要删除data、xField、yField三个字段)
  const copyUserOption = deepAssign({}, userOption)
  Reflect.deleteProperty(copyUserOption, 'data')
  Reflect.deleteProperty(copyUserOption, 'xField')
  Reflect.deleteProperty(copyUserOption, 'yField')
  deepAssign(defaultOption, copyUserOption)

  // 统一处理
  handler(defaultOption, userOption)

  return defaultOption
}
