import Excel from './core/index.js'
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