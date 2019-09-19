//导入路由
import VueRouter from 'vue-router'

//导入对应的路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'

import SearchContainer from './components/tabbar/SearchContaoner.vue'

import MemberContainer from './components/tabbar/MemeberContainer.vue'

import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'

var router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home' }, { path: '/home', component: HomeContainer },
        { path: '/search', component: SearchContainer },
        { path: '/member', component: MemberContainer },
        { path: '/shopcar', component: ShopcarContainer }
    ],
    linkActiveClass: 'mui-active' //覆盖默认的路由高亮的类 router-link-active
})


export default router