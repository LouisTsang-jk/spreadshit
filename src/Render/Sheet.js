import Draw from '../Feature/Draw.js';
export default class Sheet {
  constructor (ctx, options) {
    const { data } = options;
    this.scroll = {
      vertical: null,
      horizontally: null
    };
    // TODO rowHeight & columnWidth should be dynamic calculate
    this.rowHeight = {
      0: 24,
      1: 24,
      2: 24
    }
    this.columnWidth = {
      0: 80,
      1: 80
    }
    this.draw = new Draw(ctx);
    this.data = data;
    this.render();
  }
  render () {
    // Render plugins (header)
    // Render Cell
    Object.keys(this.data).forEach(rowKey => {
      const row = this.data[rowKey];
      Object.keys(row).forEach(columnKey => {
        const column = row[columnKey];
        // TODO load plugins
        // TODO create hook
        const draw = new Draw(ctx, {x, y, width, height})
        draw.cell(column);
        // TODO this.draw.text(value)
        // TODO create hook
      })
    })
    // 执行完一次macro task
    // 执行micro task(border)
  }
}