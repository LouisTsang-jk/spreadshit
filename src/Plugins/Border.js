// next();
// TODO draw border
// style -> color/weight(left,top,right,bottom)/
// 
export default class Border {
  constructor () {
    return async (context, next) => {
      const { ctx, x, y, width, height } = context
      ctx.strokeStyle = 'red'
      ctx.strokeRect(x, y, width, height)
      next();
    }
  }
}