import Graph from '../../core/graphs'
import { merge } from './merge'
import { getDefaultOption } from './default'
import { GRAPH_TYPES } from '../../utils/types'

interface ObjectOf<V> {
  [key: string]: V
}

export default class Mixin extends Graph {
  /**图表选项 */
  public option: ObjectOf<any>

  /**图表类型 */
  type: string

  constructor(container: string, userOption: object) {
    super(container, userOption)
    this.type = GRAPH_TYPES.LINE
    this.option = merge(getDefaultOption(), userOption)
  }
}
