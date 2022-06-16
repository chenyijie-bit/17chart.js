export type Tooltip = {
  trigger: string
}

export type Grid = {
  top: number
  left: number
  right: number
  bottom: string | number
  containLabel: boolean
}

export interface ObjectOf<V> {
  [key: string]: V
}

export interface XAxis {
  type: string
  data: string[]
  axisTick: {
    show: boolean
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

export interface MarkLineDataItem {
  name: string
  yAxis?: number
  xAxis?: number
}

export interface MarkLine {
  silent: boolean
  symbol: string
  lineStyle: {
    color: string
  }
  label: {
    position: string
    color: string
    formatter: (params: any) => {}
  }
  data: MarkLineDataItem[]
}

interface YAxis {
  name: string
  type: string
  nameTextStyle: {
    align: string
    color: string
  }
  axisLabel: {
    color: string
  }
  minInterval: number
  splitLine: {
    lineStyle: {
      color: string
    }
  }
}

export interface SerieItem {
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
  markLine?: MarkLine
}

export interface DataZoom {
  backgroundColor: string
  type: string
  show: boolean
  height: number
  dataBackground: {
    lineStyle: {
      color: string
    }
    areaStyle: {
      color: string
    }
  }
  selectedDataBackground: {
    lineStyle: {
      color: string
    }
    areaStyle: {
      color: string
    }
  }
  borderColor: string
  fillerColor: string
  textStyle: {
    color: string
    fontSize: number
  }
  left: string | number
  right: string | number
  brushSelect: boolean
  start: number
  end: number
}

export interface BarDefaultOption {
  tooltip: Tooltip
  color: string | string[]
  grid: Grid
  xAxis: XAxis
  yAxis: YAxis
  dataZoom?: DataZoom
  series: SerieItem[]
}
