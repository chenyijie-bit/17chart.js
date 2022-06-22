import { MarkLine, DataZoom } from '../../utils/coordinate/rectCoor/type'

export type Tooltip = {
  trigger: string
  className: string
  axisPointer: {
    type: string
    shadowStyle: {
      color: string
      shadowBlur?: number
      opacity: number
    }
  }
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
  name?: string
  type?: string
  data?: string[]
  axisTick: {
    show: boolean
  }
  nameTextStyle: {
    color: string
    verticalAlign: string
    lineHeight: number
  }
  axisLabel: {
    rotate: number
    margin: number
    color: string
  }
  axisLine: {
    lineStyle: {
      color: string
      opacity: number
    }
  }
}

interface YAxis {
  name?: string
  type?: string
  data?: string[]
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
  barGap: string
  barCategoryGap: string
  data: ObjectOf<any>[]
  stack?: string
  label: {
    show: boolean
    color: string
    position: string
  }
  markLine?: MarkLine
}

export interface Legend {
  show: boolean
  bottom: number
  itemWidth: number
  itemHeight: number
  itemGap: number
  icon: string
}

export interface BarDefaultOption {
  tooltip: Tooltip
  legend: Legend
  color: string | string[]
  grid: Grid
  xAxis: XAxis
  yAxis: YAxis
  dataZoom?: DataZoom
  series: SerieItem[]
}
