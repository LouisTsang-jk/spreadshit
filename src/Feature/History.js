
/**
 * record action
 * provide undo & redo
 */
export default class History {
  constructor (maxSize = 0) {
    this.maxSize = maxSize;
    this.undoStack = []; // 撤销
    this.redoStack = []; // 重做
  }
  // 所有行为都视为单元格操作
  createCommand () {
    const action = new Action();
    this.command.push(action)
  }
  revertCommand () {

  }
}

class Action {
  constructor (target, from, to) {
    this.target = target;
    this.from = from;
    this.to = to;
  }
}