// app.js
const Vue =require('vue');
const App = require('./app.vue');
const {createRouter} = require('./router/index.js');
module.exports = function createApp (context) {
  const router = createRouter();

  const app = new Vue({
    data: {
      url: context.url
    },
    router,
    render: h=>h(App)
  })
  return {app,router}
}