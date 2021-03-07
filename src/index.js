export default class Spreadsheet {
  constructor (options) {
    this.options = options;
    this.init();
    this.$el = null;
    this.$ctx = null;
  }
  init () {
    const { id } = this.options;
    document.addEventListener('resize', (e) => {
      console.log('resize', e);
    });
    if (id) {
      this.$el = document.querySelector(id);
      this.$ctx = this.$el.getContext('2d');
    } else {
      const canvas = document.createElement('canvas');
      // TODO 添加没有id时自动创建canvas
    }
    console.log('init');
  }
}