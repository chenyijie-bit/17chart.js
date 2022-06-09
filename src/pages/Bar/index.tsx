import { useEffect } from 'react'
import { clearCanvas } from '../../utils/dom'
import $17chart from '../../../17chart/index'
import { data1, data2 } from './mock/data'

export default function IndexPage() {
  useEffect(() => {
    clearCanvas(['chart1'])
    // 1. 普通柱状图
    new $17chart.Bar('chart1', {
      data: data1,
      xField: 'name',
      yField: 'value',
    })

    // 2. 有x轴名称和y轴名称
    new $17chart.Bar('chart2', {
      data: data1,
      xField: 'name',
      yField: 'value',
      xAxis: {
        name: '商品类别',
      },
      yAxis: {
        name: '售卖数量',
      },
    })

    // 3. 有百分比的情况
    new $17chart.Bar('chart3', {
      data: data2,
      xField: 'key',
      yField: 'rate',
      isPercent: true, // 传递该字段
      xAxis: {
        name: '作答时长（秒）',
      },
      yAxis: {
        name: '人数占比',
        minInterval: 0.1,
      },
    })

    // 4. 有名称类别的情况
    new $17chart.Bar('chart4', {
      data: data1,
      xField: 'name',
      yField: 'value',
      name: '今日数码产品售卖情况',
      xAxis: {
        name: '商品类别',
      },
      yAxis: {
        name: '售卖数量',
      },
    })
  }, [])

  return (
    <div>
      <section>
        <h1>1. 普通柱状图</h1>
        <div id="chart1" className="chart"></div>
      </section>
      <section>
        <h1>2. 有x轴名称和y轴名称</h1>
        <div id="chart2" className="chart"></div>
      </section>
      <section>
        <h1>3. 有百分比的情况</h1>
        <div id="chart3" className="chart"></div>
      </section>
      <section>
        <h1>4. 有name的情况（tooltip会有名称）</h1>
        <div id="chart4" className="chart"></div>
      </section>
    </div>
  )
}
