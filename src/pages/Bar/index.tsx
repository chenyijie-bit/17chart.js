import { useEffect } from 'react'
import { clearCanvas } from '../../utils/dom'
import $17chart from '../../../17chart/index'
import { data1, data2, data3, data4, data5 } from './mock/data'

export default function IndexPage() {
  useEffect(() => {
    clearCanvas(['chart1', 'chart2', 'chart3', 'chart4'])
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
      grid: {
        right: 60,
      },
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
      renderer: 'svg',
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

    // 5. 有柱状图和折线图的情况
    // new $17chart.Bar('chart5', {
    //   render: 'svg',
    //   type: 'multi', // 多个类型的图
    //   data: [
    //     { xField: 'name', yFild: 'value', data: data1, name: '数量' },
    //     { xField: 'name', yFild: 'value', data: data3, name: '占比情况' },
    //   ],
    //   name: '今日数码产品售卖情况',
    //   xAxis: {
    //     name: '商品类别',
    //   },
    //   yAxis: {
    //     name: '售卖数量',
    //   },
    // })

    // 6 多柱状图的情况
    new $17chart.Bar('chart6', {
      renderer: 'svg',
      xField: 'name',
      yField: 'value',
      name: ['第一季度', '第二季度', '第三季度', '第四季度'],
      data: data4,
    })

    // 7. 有标注的情况
    new $17chart.Bar('chart7', {
      renderer: 'svg',
      xField: 'name',
      yField: 'value',
      data: data1,
      markLine: {
        data: [
          {
            name: '最小值',
            yAxis: 2,
          },
          {
            name: '平均值',
            yAxis: 3,
          },
          {
            name: '最大值',
            yAxis: 4,
          },
        ],
      },
    })

    // 8. 有标注的情况（百分比）
    new $17chart.Bar('chart8', {
      data: data2,
      xField: 'key',
      yField: 'rate',
      grid: {
        right: 60,
      },
      isPercent: true,
      xAxis: {
        name: '作答时长（秒）',
      },
      yAxis: {
        name: '人数占比',
        minInterval: 0.1,
      },
      markLine: {
        data: [
          {
            name: '最大值',
            yAxis: 0.33,
          },
        ],
      },
    })

    // 9. 有DataZoom的情况
    new $17chart.Bar('chart9', {
      data: data5,
      xField: 'name',
      yField: 'value',
      renderer: 'svg',
      grid: {
        bottom: 60,
      },
      yAxis: {
        name: '参测人数',
      },
      xAxis: {
        name: '学校名称',
      },
      dataZoom: {
        backgroundColor: '#E9EBF2',
        type: 'slider',
        show: true,
        height: 12,
        dataBackground: {
          lineStyle: {
            color: '#DCDEE2',
          },
          areaStyle: {
            color: 'rgba(56, 107, 255, 0.1)',
          },
        },
        selectedDataBackground: {
          lineStyle: {
            color: '#C5C5C5',
          },
          areaStyle: {
            color: 'transparent',
          },
        },
        borderColor: '#fff',
        fillerColor: 'rgba(56, 107, 255, 0.1)',
        textStyle: {
          color: '#A1A3B4',
          fontSize: 10,
        },
        left: '29.16%',
        right: '29.16%',
        // 用户可设置数据
        brushSelect: false,
        start: 25,
        end: 75,
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
      <section>
        <h1>5. 有柱状图和折线图的情况（之后开发）</h1>
        <div id="chart5" className="chart"></div>
      </section>
      <section>
        <h1>6. 多柱状图</h1>
        <div id="chart6" className="chart"></div>
      </section>
      <section>
        <h1>7. 有标注的情况</h1>
        <div id="chart7" className="chart"></div>
      </section>
      <section>
        <h1>8. 有标准的情况（百分比）</h1>
        <div id="chart8" className="chart"></div>
      </section>
      <section>
        <h1>9. 有DataZoom区间的情况</h1>
        <div id="chart9" className="chart"></div>
      </section>
    </div>
  )
}
