import Excel from './core/proxy.js';
import './index.css';
// Excel -> Sheet -> Worker/Grid/Cell/
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
        },
        2: {
          7: {
            value: '20'
          }
        },
        4: {
          4: {
            value: 'Sample Cell'
          }
        },
        99: {
          10: {
            value: '最后一个单元格'
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
excel.on('build', (e) => {
  console.log('build on src', e)
})
const btn = document.createElement('button')
btn.innerHTML = 'CLICK'
document.body.appendChild(btn)
btn.addEventListener('click', () => {
  excel.emit('build')
})
window.onresize = excel.resize.bind(excel)
// excel.refresh(); // cal style
