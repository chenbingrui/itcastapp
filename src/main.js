//导入 vue
import Vue from 'vue'

//导入mui样式
import './lib/mui/css/mui.min.css'




//按需导入 mint-ui 组件 

import { Header } from 'mint-ui'
Vue.component(Header.name, Header)

//导入app
import App from './app.vue'

var vm = new Vue({
    el: '#app',
    render: c => c(App)
})