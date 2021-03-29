import compose from 'Lib/compose.js'

export default class Cell {
  constructor (x, y, width, height) {
    this.plugins = []
    this.x = x
    this.y = y
    this.width = width
    this.height = height
  }
  render () {
    const fn = compose(this.plugins)
    console.log('fn>>>', fn)
    fn(this)
  }
}