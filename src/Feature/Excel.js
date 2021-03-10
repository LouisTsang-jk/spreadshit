/**
 * Excel 实例
 */
export default class Excel {
  constructor (options) {
    this.options = options;
    const { id } = options;
    this.$el = document.querySelector(`#${id}`);
    if (!this.$el) {
      this.$el = document.createElement('canvas');
      document.body.appendChild(this.$el);
    }
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
  render () {
    const { $ctx } = this;
    console.log('渲染>data>>', this.options.data, this.$ctx);
    $ctx.rect(10, 10, 100, 100);
    $ctx.fill();
  }
}