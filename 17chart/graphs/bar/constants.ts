import { BarDefaultOption } from './types'

export const getDefaultOption = (): BarDefaultOption => {
  const defaultOption: BarDefaultOption = {
    tooltip: {
      trigger: 'item',
    },
    color: '#5B8FF9',
    grid: {
      top: 30,
      left: 20,
      right: 40,
      bottom: '3%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: [],
      axisTick: {
        alignWithLabel: true,
      },
      nameTextStyle: {
        color: '#666',
      },
      axisLabel: {
        rotate: 0,
        margin: 14,
        color: '#666',
      },
      axisLine: {
        lineStyle: {
          color: '#eee',
        },
      },
    },
    yAxis: {
      name: '',
      type: 'value',
      nameTextStyle: {
        align: 'right',
        color: '#666',
      },
      minInterval: 1,
      splitLine: {
        lineStyle: {
          color: '#eee',
        },
      },
    },
    series: [
      {
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
      },
    ],
  }
  return defaultOption
}
