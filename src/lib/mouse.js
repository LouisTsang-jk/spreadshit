// 计算滑动开始位置和结束位置
// 判断是否有双击
function down () {
  console.log('mouse down')
  let timer = null
  let num = 0
  return function () {
    const DOUBLE_GAP = 300
    console.log('num++', num++)
    if (timer) {
      console.log('300ms间隔内点击了两次以上')
    } else {
      timer = window.setTimeout(() => {
        timer = null
      }, DOUBLE_GAP)
    }
  }
}
function move () {
  console.log('mouse move')

}
function up () {
  console.log('mouse up')
}
export {
  move,
  down,
  up
}