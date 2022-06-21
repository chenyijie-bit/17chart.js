import { useEffect } from 'react'
import $17chart from '../../../17chart/index'
import { data1, data2, data3, data4, data5, data6, data7 } from './mock/data'
import { deepAssign } from '../../../17chart/utils/tools'

export default function IndexPage() {
  useEffect(() => {
    // 1. 普通柱状图
    new $17chart.Bar('chart1', {
      renderer: 'svg',
      data: data1,
      xField: 'name',
      yField: 'value',
    })

    // 2. 有x轴名称和y轴名称
    new $17chart.Bar('chart2', {
      renderer: 'svg',
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
      renderer: 'svg',
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

    // 6 并排柱状图
    const chart6 = new $17chart.Bar('chart6', {
      renderer: 'svg',
      xField: 'name',
      yField: 'value',
      name: ['语文', '数学', '英语'],
      data: data4,
      isPercent: true,
      legend: {},
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
      renderer: 'svg',
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
      renderer: 'svg',
      data: data5,
      xField: 'name',
      yField: 'value',
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
        // 用户可设置数据
        brushSelect: false,
        start: 15,
        end: 85,
      },
    })

    // 10. 有旋转X轴名称的情况
    const chart10 = new $17chart.Bar('chart10', {
      renderer: 'svg',
      data: data5,
      xField: 'name',
      yField: 'value',
      yAxis: {
        name: '参测人数',
      },
      xAxis: {
        name: '学校名称',
        axisLabel: {
          rotate: 45,
        },
      },
    })

    // 11. 有旋转X轴名称的情况（名字超级长的情况）
    const chart11 = new $17chart.Bar('chart11', {
      data: data6,
      xField: 'name',
      yField: 'value',
      renderer: 'svg',
      yAxis: {
        name: '参测人数',
      },
      xAxis: {
        name: '学校名称',
        axisLabel: {
          rotate: 45,
        },
      },
    })

    // 12. 取消label名称
    new $17chart.Bar('chart12', {
      renderer: 'svg',
      data: data1,
      xField: 'name',
      yField: 'value',
      isShowLabel: false,
      name: '今日数码产品售卖情况',
      xAxis: {
        name: '商品类别',
      },
      yAxis: {
        name: '售卖数量',
      },
    })

    // 13. 堆叠柱状图
    new $17chart.Bar('chart13', {
      renderer: 'svg',
      data: data7,
      xField: 'name',
      yField: 'value',
      isStack: true,
      isPercent: true,
      name: ['数学', '语文', '英语', '物理'],
      labelColor: ['#fff', '#666', '#fff', '#666'],
      xAxis: {
        name: '得分率',
      },
      yAxis: {
        name: '人数占比',
        minInterval: 0.01,
      },
    })

    // 14. 堆叠柱状图（程度递进：优秀、良好、一般、不及格）
    const chart14 = new $17chart.Bar('chart14', {
      id: 'chart14',
      renderer: 'svg',
      data: data7,
      xField: 'name',
      yField: 'value',
      isStack: true,
      isPercent: true,
      color: ['#30BF78', '#F3F247', '#FFC827', '#F4664A'],
      labelColor: ['#fff', '#666', '#666', '#fff'],
      name: ['优秀', '良好', '一般', '不及格'],
      xAxis: {
        name: '得分率',
      },
      yAxis: {
        name: '人数占比',
        minInterval: 0.01,
      },
      dataZoom: {
        brushSelect: false,
        start: 15,
        end: 85,
      },
    })
  }, [])

  return (
    <div>
      <section>
        <h1>1. 普通柱状图</h1>
        <div id="chart1"></div>
      </section>
      <section>
        <h1>2. 有x轴名称和y轴名称</h1>
        <div id="chart2"></div>
      </section>
      <section>
        <h1>3. 有百分比的情况</h1>
        <div id="chart3"></div>
      </section>
      <section>
        <h1>4. 有name的情况（tooltip会有名称）</h1>
        <div id="chart4"></div>
      </section>
      <section>
        <h1>5. 有柱状图和折线图的情况（之后开发）</h1>
        <div id="chart5"></div>
      </section>
      <section>
        <h1>6. 并排柱状图</h1>
        <div id="chart6"></div>
      </section>
      <section>
        <h1>7. 有标注的情况</h1>
        <div id="chart7"></div>
      </section>
      <section>
        <h1>8. 有标准的情况（百分比）</h1>
        <div id="chart8"></div>
      </section>
      <section>
        <h1>9. 有DataZoom区间的情况</h1>
        <div id="chart9"></div>
      </section>
      <section>
        <h1>10. 有旋转X轴名称</h1>
        <div id="chart10"></div>
      </section>
      <section>
        <h1>11. 有旋转X轴名称（名字超级长的情况）</h1>
        <div id="chart11"></div>
      </section>
      <section>
        <h1>12. 取消label名称</h1>
        <div id="chart12"></div>
      </section>
      <section>
        <h1>13. 堆叠柱状图</h1>
        <div id="chart13"></div>
      </section>
      <section>
        <h1>14. 堆叠柱状图（程度递进的关系）</h1>
        <div id="chart14"></div>
      </section>
    </div>
  )
}
