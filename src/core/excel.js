import Sheet from 'Core/sheet.js'
import Cell from 'Core/cell.js'
import config from 'Core/config.json'
import { down, move, up } from 'Lib/mouse.js'

export default class Excel {
  constructor (data) {
    console.time()
    this.el = document.createElement('canvas')
    this.ctx = this.el.getContext('2d')
    // 计算高宽
    // need 总单元格个数
    // 高 = 默认单元格高度 * 默认单元格个数 + 特殊单元格高度 * 特殊单元格高度
    this.el.height = 1500
    this.el.width = 1500
    this.el.style = 'height: 1000px;width: 1000px'
    this.ctx.scale(2, 2)
    document.body.appendChild(this.el)
    this.initTouchEvent()
    this.currentSheet = 0
    this.sheets = data.map(option => new Sheet(option))
    this.grid = {
      vertical: [],
      horizontal: []
    }
    // this.header = new Header();
  }
  initTouchEvent () {
    const { el } = this
    el.addEventListener('mousedown', down(() => {
      console.log('cb')
    }))
    el.addEventListener('mousemove', () => {
      console.log('touch move')
    })
    el.addEventListener('mouseup', () => {
      console.log('touch end')
    })
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
    console.timeEnd()
  }
  renderGrid () {
    // TODO
    const { width, height } = this.el
    // const horizontalNum = 
    // const verticalNum = 
    // const horizontalLine = 
    // const verticalLine = 
    // vertical
    const { grid: { color } } = config
    for (let i = 0; i < 200; i++) {
      const axis = i * 80
      this.grid.vertical.push(axis)
      this.ctx.moveTo(axis, 0)
      this.ctx.lineTo(axis, height)
      this.ctx.strokeStyle = color
      this.ctx.stroke()
    }
    // horizontal
    for (let j = 0; j < 200;j++) {
      const axis = j * 20
      this.grid.horizontal.push(axis)
      this.ctx.moveTo(0, axis)
      this.ctx.lineTo(width, axis)
      this.ctx.strokeStyle = color
      this.ctx.stroke()
    }
    console.log('this.grid', this.grid)
  }
  sheetChange () {
  }
}