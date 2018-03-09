import {createApp} from './app';

export default context=>{
    return new Promise((resolve,reject)=>{
        const {app,router}=createApp();
        //设置服务端router的位置
        router.push(context.url);
        //等到router将可能的异步组件和钩子函数解析完
        router.onReady(()=>{
            const matchedComponents = router.getMatchedComponents();
            //匹配不到路由，执行reject函数，返回404
            if(!matchedComponents.length){
                return reject({code:404})
            }
            //promise应该resolve应用程序实例，以便它可以渲染
            resolve(app);
        },reject)
    })
}