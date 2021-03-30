import Sheet from 'Core/sheet.js'
import Cell from 'Core/cell.js'

export default class Excel {
  constructor (data) {
    this.el = document.createElement('canvas')
    this.ctx = this.el.getContext('2d')
    document.body.appendChild(this.el)
    this.currentSheet = 0
    this.sheets = data.map(option => new Sheet(option))
    // this.header = new Header();
  }
  render () {
    const sheet = this.sheets[this.currentSheet]
    const data = sheet.options.data
    // 渲染Grid
    data && Object.keys(data).forEach(rowKey => {
      const row = data[rowKey];
      Object.keys(row).forEach(columnKey => {
        const column = row[columnKey];
        console.log('column>>>', column)
        const cell = new Cell(this.ctx, column, {
          x: 0,
          y: 0,
          xi: rowKey,
          yi: columnKey,
          width: 80,
          height: 20
        })
        cell.render()
        console.log('cell', cell)
        // TODO load plugins
        // TODO create hook
        // const draw = new Draw(this.ctx, {x, y, width, height})
        // draw.cell(column);
        // TODO this.draw.text(value)
        // TODO create hook
      })
    })
    console.log('sheet>>>', sheet)
  }
  sheetChange () {
  }
}