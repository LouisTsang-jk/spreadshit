import Excel from './core/index.js';
import './index.css';
import 'Assets/index.js';
// Excel -> Frame -> Sheet -> Worker/Grid/Cell/
const excel = new Excel({ 
  id: 'sheet',
  data: [],
  width: 300,
  height: 500
});
// 渲染 10 x 10单元格
excel.render();
// excel.refresh(); // cal style
console.log('excel:', excel);

const link = document.createElement('link');
// link.rel = 'import';
// link.href = './Element/Header.html';
document.head.appendChild(link);