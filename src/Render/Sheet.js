export default class Sheet {
  constructor (el, optoins) {
    this.scroll = {
      vertical: null,
      horizontally: null
    };
    this.grid = [];

  }
  init () {
    const { id } = this.options;
    this.$el = document.querySelector(`#${id}`);
    if (!this.$el) {
      this.$el = document.createElement('canvas');
      document.body.appendChild(this.$el);
    }
    this.$ctx = this.$el.getContext('2d');
    console.log('init');
  }
}