import Excel from './core/index.js';
import './index.css';
// Excel -> Frame -> Sheet -> Worker/Grid/Cell/
const excel = new Excel({ 
  id: 'sheet',
  data: [
    { // 默认sheet
      name: 'Sheet1',
      data: {
        0: {
          0: {
            value: '这是第一个渲染出来的文字单元格'
          }
        }
      },
      
    }
  ],
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