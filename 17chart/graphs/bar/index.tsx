import Graph from '../../core/graphs'
import { getDefaultOption } from './default'
import { merge } from './merge'
import { GRAPH_TYPES } from '../../utils/types'

interface ObjectOf<V> {
  [key: string]: V
}

export default class Bar extends Graph {
  /**图表选项 */
  public option: ObjectOf<any>
  /**图表类型 */
  type: string

  constructor(container: string, userOption: object) {
    super(container, userOption)
    this.type = GRAPH_TYPES.BAR
    this.option = merge(getDefaultOption(), userOption)
  }
}
