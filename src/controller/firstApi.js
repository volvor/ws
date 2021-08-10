const Base = require('./base');
const { getAppInfo } = require('../utils/thirdApi');

module.exports = class extends Base {
  async indexAction() {
    // console.log(userInfo);
    const data = await getAppInfo();
    // const info = await this.model('rule').select();
    const res = {
      data: data,
      msg: '请求成功',
      state: 1
    };
    this.body = res;
  }
}