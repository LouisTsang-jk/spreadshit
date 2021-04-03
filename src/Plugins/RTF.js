import config from 'Core/config.json'

export default class RTF {
  constructor () {
    return async (context, next) => {
      const { ctx, val, x, y, width, height } = context
      const { fontSize, fontFamily } = config.cell
      const textObj = ctx.measureText(val)
      ctx.fillStyle = '#000'
      ctx.textAlign = 'left'
      ctx.font = `${fontSize}px ${fontFamily}`
      ctx.fillText(val, x + 0, y + (height + fontSize) / 2)
      next();
    }
  }
}