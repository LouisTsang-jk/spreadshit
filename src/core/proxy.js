import Excel from 'Core/excel.js'

export default class ProxyController {
  constructor (options) {
    const { data } = options
    this.excel = new Excel(data)
    // 调用渲染
    // 监听事件
  }
  render (options) {
    // Excel渲染
    this.excel.render()
  }
}