import * as echarts from 'echarts'

interface ObjectOf<V> {
  [key: string]: V
}

const CHART_SOURCE = '17-chart'

export default abstract class Graph {
  /** 17Chart绘制的画布 */
  public readonly container: HTMLElement
  /** 17Chart的实例 */
  public chart: any
  /** 配置项 */
  public abstract option: ObjectOf<any>

  constructor(container: string | HTMLElement, options) {
    this.container =
      typeof container === 'string'
        ? (document.getElementById(container) as HTMLElement)
        : (container as HTMLElement)

    // 【参数错误检测】：传递的id，但是没有获取到元素
    if (typeof container === 'string' && !this.container) {
      throw new Error(`Invalid id: Can't get the dom that id id${container}`)
    }
    // 【参数错误检测】：传递的不是id，但是不是一个DOM节点
    if (typeof container !== 'string' && this.container.nodeType !== 1) {
      throw new TypeError('Invalid Type: container is not a dom element')
    }

    // 设置标识
    this.container.setAttribute('chart-source', CHART_SOURCE)

    // 判断图表的高度(如果<=100px，那么将其给默认的高度360px)
    if (this.container.offsetHeight <= 100) {
      this.container.style.height = '360px'
    }

    // 设置renderer
    const chartInitOption = {
      renderer: options.renderer ? options.renderer : 'canvas',
    }

    this.chart = echarts.init(this.container, undefined, chartInitOption)

    this._registerEvent()

    new Promise<void>((resolve) => {
      resolve()
    }).then(() => {
      this.render()
    })
  }

  public render() {
    this.chart.clear()
    this.chart.setOption(this.option)
  }

  private _resize() {
    this.chart.resize()
  }

  private _registerEvent() {
    this._observeReisze()
  }

  private _observeReisze() {
    const resizeObserver = new ResizeObserver((entries) => {
      this._resize()
    })
    if (this.container.parentElement) {
      resizeObserver.observe(this.container.parentElement)
    }
  }
}
