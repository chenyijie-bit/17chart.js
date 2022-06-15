import _merge from 'lodash.merge'
import { handler } from '../../utils/option'
import { BarDefaultOption } from './types'
import { is2Array, isArray } from '../../utils/tools'
import { getBarSerieItem, getMarkLine, getDataZoom } from './default'

export const merge = (defaultOption: BarDefaultOption, userOption) => {
  let {
    name,
    data,
    xField,
    yField,
    isPercent,
    percentFixed = 0,
    markLine,
    dataZoom,
  } = userOption

  if (is2Array(data)) {
    // 挂载xAxis的数据
    const xAxisData = data[0].map((i) => i[xField])
    defaultOption.xAxis.data = xAxisData

    // 挂载图表数据
    const seriesData = data.map((array) => {
      const seriesItem = getBarSerieItem()
      seriesItem.data = array.map((i) => i[yField])

      return seriesItem
    })

    defaultOption.series = seriesData
  } else {
    // 挂载xAxis的数据
    const xAxisData = data.map((i) => i[xField])
    defaultOption.xAxis.data = xAxisData

    // 挂载图表数据
    const seriesItem = getBarSerieItem()
    const seriesData = data.map((i) => i[yField])
    seriesItem.data = seriesData
    defaultOption.series.push(seriesItem)
  }

  // 查看是否有辅助线存在
  if (markLine) {
    const _markLine = getMarkLine(isPercent)
    _merge(_markLine, markLine)
    defaultOption.series[0].markLine = _markLine
  }

  // 查看是否有dataZoom的存在(如果有，则需要调整底部的预留高度)
  if (dataZoom) {
    const _dataZoom = getDataZoom()
    _merge(_dataZoom, dataZoom)
    defaultOption.dataZoom = _dataZoom
    defaultOption.grid.bottom = 80
  }

  // Merge数据(需要删除data、xField、yField三个字段)
  const copyUserOption = _merge({}, userOption)
  Reflect.deleteProperty(copyUserOption, 'data')
  Reflect.deleteProperty(copyUserOption, 'xField')
  Reflect.deleteProperty(copyUserOption, 'yField')
  _merge(defaultOption, userOption)

  // 统一处理
  handler(defaultOption, { isPercent, percentFixed, name })

  return defaultOption
}
