type Tooltip = {
  trigger: string
}

type Grid = {
  top: number
  left: number
  right: number
  bottom: string | number
  containLabel: boolean
}

interface ObjectOf<V> {
  [key: string]: V
}

interface XAxis {
  type: string
  data: string[]
  axisTick: {
    alignWithLabel: boolean
  }
  nameTextStyle: {
    color: string
  }
  axisLabel: {
    rotate: number
    margin: number
    color: string
  }
  axisLine: {
    lineStyle: {
      color: string
    }
  }
}

interface YAxis {
  name: string
  type: string
  nameTextStyle: {
    align: string
    color: string
  }
  minInterval: number
  splitLine: {
    lineStyle: {
      color: string
    }
  }
}

interface Serie {
  name: string
  type: string
  barMaxWidth: number
  barMinWidth: number
  data: ObjectOf<any>[]
  label: {
    show: boolean
    color: string
    position: string
  }
}

export interface BarDefaultOption {
  tooltip: Tooltip
  color: string
  grid: Grid
  xAxis: XAxis
  yAxis: YAxis
  series: Serie[]
}
