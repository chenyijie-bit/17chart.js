/**
 * 是否是一个二维数组(内部每个元素都应该是一个数组)
 * @param array
 * @returns Boolean
 */
export const is2Array = (array: any[]) => {
  return array.every((i) => {
    return Array.isArray(i)
  })
}

/**
 * 是否是一个数组类型
 * @param array {any}
 * @returns
 */
export const isArray = (array: any) => {
  return Array.isArray(array)
}

/**
 * 是否是字符类型
 * @param str any
 * @returns  Boolean
 */
export const isString = (str: any) => {
  return typeof str === 'string'
}
