import Excel from './core/index.js'
import Temp from './web-components.html'
// Excel -> Frame -> Sheet -> Worker/Grid/Cell/
const excel = new Excel({ 
  id: 'sheet',
  data: [],
  width: 1000,
  height: 1000
});
// 渲染 10 x 10单元格
excel.render();
// excel.refresh(); // cal style
console.log('excel:', excel);

const link = document.createElement('link');
// link.rel = 'import';
// link.href = './Element/Header.html';
console.log('Temp', Temp);
document.head.appendChild(link);