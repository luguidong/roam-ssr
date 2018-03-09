const Vue = require('vue');
const Router = require('vue-router');
Vue.use(Router);
module.exports = {
    createRouter: function () {
        return new Router({
            mode: 'history',
            routes: []
        })
    }
}