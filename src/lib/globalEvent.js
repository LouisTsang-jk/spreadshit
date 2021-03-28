import EventEmitter from 'wolfy87-eventemitter'

export default class GlobalEvent extends EventEmitter {
  constructor () {
    super();
  }
  /**
   *  singleton - 获取实例
   * @return {GlobalEvent} GlobalEvent instance
   */
  static getInstance() {
    if (!GlobalEvent.instance) {
      GlobalEvent.instance = new GlobalEvent();
    }
    return GlobalEvent.instance;
  }
}