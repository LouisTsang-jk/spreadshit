// 计算滑动开始位置和结束位置
// 判断是否有双击
function down (cb) {
  let timer = null
  return function () {
    const DOUBLE_GAP = 300
    if (timer) {
      console.log('300ms间隔内点击了两次以上')
      cb()
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