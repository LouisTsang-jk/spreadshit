import Sheet from 'Core/sheet.js'

export default class Excel {
  constructor (data) {
    this.currentSheet = 0
    console.log('data>>>', data)
    this.sheets = data.map(option => new Sheet(option))
    // this.header = new Header();
  }
}