import compose from 'Lib/compose.js'
import Border from 'Plugins/border.js'
import RTF from 'Plugins/RTF.js'

export default class Cell {
  constructor (ctx, val, {x, y, xi, yi, width, height}) {
    this.plugins = [
      new Border(),
      new RTF()
    ]
    this.ctx = ctx
    this.val = val
    this.x = x
    this.y = y
    this.xi = xi
    this.yi = yi
    this.width = width
    this.height = height
  }
  render () {
    const fn = compose(this.plugins)
    // TODO 找到渲染命令的位置
    fn(this)
  }
}