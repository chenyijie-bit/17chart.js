import set from './safe-set'

// 统一处理
export const handler = (option, { isPercent, percentFixed, name }) => {
  // 1. axis.name会影响grid.left和grid.right
  if (option.xAxis && option.xAxis.name) {
    const extraWidth = getExtraWidth(option.xAxis.name)
    option.grid.right = option.grid.right + extraWidth
  }
  if (option.yAxis && option.yAxis.name) {
    const extraWidth = getExtraWidth(option.yAxis.name)
    option.grid.left = option.grid.left + extraWidth
  }

  // 2. 如果是百分比的情况，则需要做格式化处理
  if (isPercent) {
    const formatterFn = function (value: number) {
      return (value * 100).toFixed(percentFixed) + '%'
    }
    const dataFormatterFn = function (item: object) {
      return (item.value * 100).toFixed(0) + '%'
    }
    // y轴的label值需要做格式化处理
    set(option, 'yAxis.axisLabel.formatter', formatterFn)
    // tooltip的值需要做格式化处理
    set(option, 'tooltip.valueFormatter', formatterFn)
    // 柱状图label的值需要做格式化处理
    set(option, 'series.0.label.formatter', dataFormatterFn)
  }

  // 3. 如果name存在，将其放置到series.0.name上
  if (name) {
    set(option, 'series.0.name', name)
  }
}

// 获取额外的宽度
const getExtraWidth = (name: string) => {
  return (name.length - 2) * 16
}
