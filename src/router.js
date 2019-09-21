//导入路由
import VueRouter from 'vue-router'

//导入对应的路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'

import SearchContainer from './components/tabbar/SearchContaoner.vue'

import MemberContainer from './components/tabbar/MemeberContainer.vue'

import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'

import newsList from './components/news/newsList.vue'

import newsinfo from './components/news/newsinfo.vue'

import photoslist from './components/photos/photoslist.vue'

import photoInfo from './components/photos/photoinfo.vue'

import GoodsList from './components/goods/GoodsList.vue'

var router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: HomeContainer },
        { path: '/search', component: SearchContainer },
        { path: '/member', component: MemberContainer },
        { path: '/shopcar', component: ShopcarContainer },
        { path: '/home/newsList', component: newsList },
        { path: '/home/newsinfo/:id', component: newsinfo },
        { path: '/home/photolist', component: photoslist },
        { path: '/home/photoinfo/:id', component: photoInfo },
        { path: '/home/goodslist', component: GoodsList }
    ],
    linkActiveClass: 'mui-active' //覆盖默认的路由高亮的类 router-link-active
})


export default router