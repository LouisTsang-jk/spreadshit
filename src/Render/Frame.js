export default class Frame {
  constructor (options) {
    options = options || {};
    this.history = [];
    this.plugins = []; // RTF,Merge Cell,Image,Chart,Fn...
    this.tools = {
      top: null,
      bottom: null
    };
    this.header = {
      row: null,
      column: null
    };
    this.contextMenu = null

  }
}