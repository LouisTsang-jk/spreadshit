import Excel from 'Core/excel.js'

export default class ProxyController {
  constructor (options) {
    const { data } = options
    this.el = null
    this.ctx = null
    this.excel = new Excel(data)
    // 调用渲染
    // 监听事件
  }
  render (options) {
    this.el = document.createElement('canvas')
    this.ctx = this.el.getContext('2d');
    this.el.height = 1000;
    this.el.width = 1000;
    document.body.appendChild(this.el);
  }
}