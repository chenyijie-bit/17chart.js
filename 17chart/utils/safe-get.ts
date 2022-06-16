const isNullOrUndef = function (val) {
  return val === undefined || val === null
}
const sget = function (instance, path) {
  return path.split('.').reduce(function (p, c) {
    return !isNullOrUndef(p) ? getValue(p, c) : undefined
  }, instance)
}
const findArrayOperator = /([^\[]*)\[([0-9]*)\]/
function getValue(parent, childProperty) {
  const matches = findArrayOperator.exec(childProperty)
  if (matches) {
    const name = matches[1]
    const arrayIndex = matches[2]
    if (!isNullOrUndef(parent[name])) {
      return parent[name][arrayIndex]
    } else {
      return undefined
    }
  } else {
    return parent[childProperty]
  }
}
export default sget
