import { useEffect } from 'react'
import $17chart from '../../../17chart/index'
import { data1 } from './mock/data'

export default function LinePage() {
  useEffect(() => {
    // 1. 普通折线图
    new $17chart.Line('chart1', {
      renderer: 'svg',
      data: data1,
      xField: 'name',
      yField: 'value',
    })
  })

  return (
    <div>
      <section>
        <h1>1. 普通折线图</h1>
        <div id="chart1"></div>
      </section>
    </div>
  )
}
