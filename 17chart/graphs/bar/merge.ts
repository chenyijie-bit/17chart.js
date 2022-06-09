import _merge from 'lodash.merge'
import { handler } from '../../utils/option'

export const merge = (defaultOption, userOption) => {
  let {
    name,
    data,
    xField,
    yField,
    xAxis,
    yAxis,
    isPercent,
    percentFixed = 0,
  } = userOption

  // 如果xAxis不存在， 初始化
  if (!xAxis) {
    xAxis = {}
  }
  if (!yAxis) {
    yAxis = {}
  }

  // 初始化xAxis的数据
  const xAxisData = data.map((i) => i[xField])
  xAxis.data = xAxisData

  // 挂载xAxis的配置和yAxis的配置
  _merge(defaultOption, { xAxis, yAxis })

  // 挂载数据
  const seriesData = data.map((i) => i[yField])
  defaultOption.series[0].data = seriesData

  // 统一处理
  handler(defaultOption, { isPercent, percentFixed, name })

  return defaultOption
}
