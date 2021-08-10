const request = require('request');

module.exports = {
  getAppInfo() {
    return new Promise((resolve, reject) => {
      request('http://analyze.msgcopy.com/apps/10000', function(err, response, body) {
        resolve({err, response, body});
      });
    });
  }
};
