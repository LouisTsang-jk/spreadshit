// target: border/RTF/contextMenu/Image/header
// 作用域: excel/sheet/row/column/cell/hook
// duplicate
export default class Plugin {
  constructor () {
    this.plugins = []
  }
  use (Plugin) {
    // TODO duplicate
    const pluginInstance = new Plugin()
    this.plugins.push(pluginInstance);
    pluginInstance.install();
  }
}