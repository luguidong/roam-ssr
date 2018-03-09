// app.js
const Vue = require('vue');
const {createRouter} = require('./router/index.js');
module.exports = function createApp (context) {
  const router = createRouter();

  const app = new Vue({
    data: {
      url: context.url
    },
    template: `<div>访问的 URL 是： {{ url }}</div>`
  })
  return {app,router}
}