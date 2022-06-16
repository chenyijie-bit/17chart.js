import { BarDefaultOption, DataZoom, MarkLine, SerieItem } from './types'
import { COLOR } from '../../utils/constants'

export const getDefaultOption = (): BarDefaultOption => {
  const defaultOption: BarDefaultOption = {
    tooltip: {
      trigger: 'item',
    },
    color: COLOR.THEME_PRIMARY_COLORS,
    grid: {
      top: 30,
      left: 0,
      right: 40,
      bottom: '3%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: [],
      axisTick: {
        show: false,
      },
      nameTextStyle: {
        color: '#999',
      },
      axisLabel: {
        rotate: 0,
        margin: 14,
        color: '#999',
      },
      axisLine: {
        lineStyle: {
          color: '#333',
        },
      },
    },
    yAxis: {
      name: '',
      type: 'value',
      nameTextStyle: {
        align: 'right',
        color: '#999',
      },
      axisLabel: {
        color: '#999',
      },
      minInterval: 1,
      splitLine: {
        lineStyle: {
          color: '#D9D9D9',
        },
      },
    },
    series: [],
  }
  return defaultOption
}

export const getBarSerieItem = (): SerieItem => {
  return {
    name: '',
    type: 'bar',
    barMaxWidth: 72,
    barMinWidth: 16,
    data: [],
    label: {
      show: true,
      color: '#666',
      position: 'top',
    },
  }
}

export const getMarkLine = (isPercent: boolean): MarkLine => {
  return {
    silent: true,
    symbol: 'none',
    lineStyle: {
      color: '#FF5858',
    },
    label: {
      position: 'insideEndBottom',
      color: '#FF5858',
      formatter: (params: any) => {
        const { name, value } = params
        if (name) {
          return `${name}: ${
            isPercent ? (value * 100).toFixed(0) + '%' : value
          }`
        } else {
          return value
        }
      },
    },
    data: [],
  }
}

export const getDataZoom = (): DataZoom => {
  return {
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
    brushSelect: false,
    start: 25,
    end: 75,
  }
}
