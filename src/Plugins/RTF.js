export default class RTF {
  constructor () {
    return async (context, next) => {
      const { ctx, val, x, y, width, height } = context
      ctx.fillStyle = '#000'
      ctx.fillText(val, x + 0, y + 10)
      next();
    }
  }
}