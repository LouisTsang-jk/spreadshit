import Sheet from 'Core/sheet.js'
import Cell from 'Core/cell.js'
import config from 'Core/config.json'

export default class Excel {
  constructor (data) {
    this.el = document.createElement('canvas')
    this.ctx = this.el.getContext('2d')
    // 计算高宽
    // need 总单元格个数
    // 高 = 默认单元格高度 * 默认单元格个数 + 特殊单元格高度 * 特殊单元格高度
    this.el.height = 2000
    this.el.width = 2000
    document.body.appendChild(this.el)
    this.currentSheet = 0
    this.sheets = data.map(option => new Sheet(option))
    this.line = {
      vertical: {},
      horizontal: {}
    }
    // this.header = new Header();
  }
  resize (w, h) {
    if (w && h) {
      this.el.height = h
      this.el.width = w
    }
    this.render()
  }
  render () {
    const sheet = this.sheets[this.currentSheet]
    const data = sheet.options.data
    // 渲染Grid网格
    this.renderGrid()
    // 渲染单元格
    data && Object.keys(data).forEach(rowKey => {
      const row = data[rowKey];
      Object.keys(row).forEach(columnKey => {
        const column = row[columnKey];
        const cell = new Cell(this.ctx, column.value, {
          x: columnKey * 80,
          y: rowKey * 20,
          xi: rowKey,
          yi: columnKey,
          width: 80, // TODO need 2 del
          height: 20 // TODO need 2 del
        })
        cell.render()
      })
    })
    console.log('sheet>>>', sheet)
  }
  renderGrid () {
    const { width, height } = this.el
    // const horizontalNum = 
    // const verticalNum = 
    // const horizontalLine = 
    // const verticalLine = 
    // vertical
    const { grid: { color } } = config
    for (let i = 0; i < 200; i++) {
      this.ctx.fillStyle
      this.ctx.moveTo(i * 80, 0)
      this.ctx.lineTo(i * 80, height)
      this.ctx.strokeStyle = color
      this.ctx.stroke()
    }
    // horizontal
    for (let j = 0; j < 200;j++) {
      this.ctx.fillStyle
      this.ctx.moveTo(0, 20 * j)
      this.ctx.lineTo(width, 20 * j)
      this.ctx.strokeStyle = color
      this.ctx.stroke()
    }
  }
  sheetChange () {
  }
}