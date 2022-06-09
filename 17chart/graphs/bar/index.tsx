import * as echarts from 'echarts'
import { getDefaultOption } from './constants'
import { merge } from './merge'

export default class Bar {
  chart: any
  constructor(id: string, userOption: object) {
    const dom = document.getElementById(id)
    if (!dom) {
      throw new Error(`无法获取到id为${id}的DOM`)
    }
    const defaultOption = getDefaultOption()
    const option = merge(defaultOption, userOption)
    const chart = echarts.init(dom, option)
    chart.setOption(option)
    this.chart = chart
  }
}
