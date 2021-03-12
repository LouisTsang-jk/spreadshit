/**
 * Excel 实例
 */
export default class Excel {
  constructor(options) {
    this.options = options;
    const {
      id
    } = options;
    const container = document.querySelector(`#${id}`);
    console.log('container', container)
    if (!container) {
      throw new Error(`can't find the element: ${id}`)
    }
    this.$el = document.createElement('canvas');
    container.appendChild(this.$el);
    this.$ctx = this.$el.getContext('2d');
    options = options || {};
    this.monitor = null;
    this.history = [];
    this.plugins = []; // RTF,Border,Merge Cell,Image,Chart,Fn...
    // shadow dom
    this.element = {
      header: null,
      tools: null,
      contextmenu: null,
      scroll: null,
      selection: null,
      editor: null
    }
  }
  render() {
    const {
      $ctx
    } = this;
    const {
      width: w,
      height: h
    } = this.options;
    if (h && w) {
      this.$el.height = h;
      this.$el.width = w;
    }
    console.log('渲染>data>>', this.options.data, this.$ctx);
    const cellWidth = 80;
    const cellHeight = 24;
    $ctx.lineWidth = 1;
    $ctx.strokeStyle = '#eee';
    for (let i = 0; i < 100; i++) {
      for (let j = 0; j < 50; j++) {
        $ctx.strokeRect(i * cellWidth, j * cellHeight, cellWidth, cellHeight);
      }
    }
    // 渲染Header
  }
  // 重新绘制
  resize (width, height, noRender) {
    this.$el.width = `${width}px`;
    this.$el.height = `${height}px`;
    !noRender && this.render();
  }
  clear () {

  }
}