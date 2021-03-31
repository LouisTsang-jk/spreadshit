import Excel from 'Core/excel.js'

export default class ProxyController {
  constructor (options) {
    const { data } = options
    this.excel = new Excel(data)
    // 监听事件
    this.events = {}
    // 调用渲染
  }
  render (options) {
    // Excel渲染
    this.excel.render()
  }
  resize (e) {
    this.excel.resize()
  }
  on (evtName, cb, useCapture = false) {
    const { events, excel: { el } } = this
    const evt = new CustomEvent(evtName, {
      bubbles: true,
      detail: {
        test: 808
      }
    })
    if (events[evtName]) {
      events[evtName].push(evt)
    } else {
      events[evtName] = [evt]
    }
    el.addEventListener(evtName, cb, useCapture)
  }
  remove (evtName, evt, useCapture = false) {
    const { events, excel: { el } } = this
    const index = events[evtName].indexOf
    if (!evt) {
      delete events[evtName]
      events[evtName].forEach(e => {
        el.removeEventListener(evtName, e, useCapture)
      })
    } else if (index !== -1) {
      events[evtName].splice(index, 1)
      el.removeEventListener(evtName, evt, useCapture)
    }
  }
  emit (evtName) {
    const { excel: { el } } = this
    const events = this.events[evtName]
    events && events.forEach(evt => {
      el.dispatchEvent(evt)
    })
  }
}