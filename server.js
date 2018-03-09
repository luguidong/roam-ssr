const Vue = require('vue')
const server = require('express')();
const fs = require('fs');
const renderer = require('vue-server-renderer').createRenderer();
const createApp = require('./src/app');

server.get('*', (req, res) => {
  const context = {url:req.url}
  const {app,router} = createApp(context)

  renderer.renderToString(app,(err,html)=>{
    res.end(html);
  })
})
server.listen(8080)
