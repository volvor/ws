const Base = require('./base');
module.exports = class extends Base {
  indexAction() {
    // console.log(userInfo);
    const res = {
      data: 'aaa',
      msg: '请求成功',
      state: 1
    };
    this.body = res;
  }
}
