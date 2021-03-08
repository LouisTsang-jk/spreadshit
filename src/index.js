import printMe from './print'

// TODO import()
class Spreadsheet {
  constructor (options) {
    this.options = options;
    this.init();
    this.$el = null;
    this.$ctx = null;
  }
  init () {
    const { id } = this.options;
    this.$el = document.querySelector(id);
    if (this.$el) {
      this.$el = document.createElement('canvas');
      document.body.appendChild(this.$el);
    }
    this.$el.addEventListener('resize', (e) => {
      console.log('resize', e);
    });
    console.log('$el', this.$el);
    if (this.$el) {
      console.log('get ctx');
      this.$ctx = this.$el.getContext('2d');
    }
    console.log('init');
  }
}
const s1 = new Spreadsheet({ id: 'spreadsheet' });
console.log('s1>', s1);
console.log('s2>')