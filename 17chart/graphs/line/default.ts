import { LineDefaultOption, SerieItem } from './types'
import { COLOR } from '../../utils/constants'

export const getDefaultOption = (): LineDefaultOption => {
  const defaultOption = {
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      show: true,
      bottom: 24,
      itemWidth: 8,
      itemHeight: 8,
      itemGap: 16,
      icon: 'circle',
    },
    color: COLOR.THEME_PRIMARY_COLORS,
    grid: {
      top: 30,
      left: 0,
      right: 40,
      bottom: 24,
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
        verticalAlign: 'top',
        lineHeight: 22,
      },
      axisLabel: {
        rotate: 0,
        margin: 14,
        color: '#999',
      },
      axisLine: {
        lineStyle: {
          color: '#666',
          opacity: 0.9,
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

export const getLineSerieItem = (smooth?: boolean): SerieItem => {
  const item: SerieItem = {
    name: '',
    type: 'line',
    data: [],
    label: {
      show: true,
      color: '#666',
      position: 'top',
    },
  }

  if (smooth) {
    item.smooth = true
  }

  return item
}
