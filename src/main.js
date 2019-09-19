//导入 vue
import Vue from 'vue'

//导入路由router.js模块
import VueRouter from 'vue-router'
//安装路由模块,挂在vue
Vue.use(VueRouter)


//导入 vue-resouce
import VueResource from 'vue-resource'
//注册到vue上面
Vue.use(VueResource)



//导入mui样式
import './lib/mui/css/mui.min.css'

import './lib/mui/css/icons-extra.css'



//按需导入 mint-ui 组件 

import { Header, Swipe, SwipeItem } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)


//导入路由router.js模块
import router from './router.js'


//导入app
import App from './app.vue'

var vm = new Vue({
    el: '#app',
    render: c => c(App),
    router,
})