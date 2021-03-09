import Excel from './core/index.js'
// Excel -> Frame -> Sheet -> Worker/Grid/Cell/
const excel = new Excel({ 
  id: 'sheet',
  data: []
});
excel.render();
// excel.refresh(); // cal style
console.log('excel:', excel);