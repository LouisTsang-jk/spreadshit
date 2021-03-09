
export default class Frame {
  constructor (options) {
    options = options || {};
    this.monitor = null;
    this.history = [];
    this.plugins = []; // RTF,Border,Merge Cell,Image,Chart,Fn...
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