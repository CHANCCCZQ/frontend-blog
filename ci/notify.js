'use strict';
const request = require('request');

const app = process.argv[2].split('=')[1];
const message = process.argv[3].split('=')[1] || '默认信息';
// master需要@所有人
const isMaster = process.argv[5] ? process.argv[5].split('=')[1] : false;
const user = isMaster ? '@all' : process.argv[4].split('=')[1];

request({
  url: 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=51da4ade-d7d7-4be3-ae5c-775ee09a3f62',
  method: 'POST',
  json: true,
  headers: {
    'Content-Type': 'application/json',
  },
  body: {
    msgtype: 'text',
    text: {
      content: `分支：${app} 提交信息：${message}, 部署成功`,
      mentioned_list: [user],
    },
  },
}, function (error, response, body) {
  // if (response.statusCode === 200 && body.errorcode === 0) {
  //   
  // }

});
