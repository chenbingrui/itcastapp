<template>
    <div>
       
        <!-- 轮播图区域 -->
        <mt-swipe :auto="4000" >
            <mt-swipe-item v-for="item in LunbotuList" :key="item.url">
                1<img :src="item.img" alt="">
            </mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>

<!-- 九宫格到六宫格,中间省略3个  mui中的 grid -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newsList">
		                    <img src="../../images/menu1.png" alt="">
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photolist">
		                    <img src="../../images/menu2.png" alt="">
		                    <div class="mui-media-body">图片分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="home/goodslist">
		                    <img src="../../images/menu3.png" alt="">
		                    <div class="mui-media-body">商品购买</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu4.png" alt="">
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu5.png" alt="">
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                   <img src="../../images/menu6.png" alt="">
		                    <div class="mui-media-body">联系我们</div></a></li>
		           
		        </ul> 




        
    </div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
    data(){
        return {
            LunbotuList:[]  //保存轮播图的数组
        }
    },
    created(){
        this.getLunbotu();
        console.log(123)
    },
    methods:{
        getLunbotu(){//获取轮播图数据
            this.$http.get('api/getlunbo').then(result=>{
                //console.log(result.body)
                if(result.body.status===0){
                    this.LunbotuList = result.body.message;
                }else{
                    Toast('加载轮播图失败...')
                }
                
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.mint-swipe {
    height: 200px;

    .mint-swipe-item{
       &:nth-child(1){  //使用的是交集选择器
            background-color: red;
       };
       &:nth-child(2){
            background-color:blue;
       };
       &:nth-child(3){
            background-color: cyan;
       }
    }
    img {
        width: 100%;
        height: 100%;
    }
}
  .mui-grid-view.mui-grid-9{
      background-color:#fff;
      border: none;

      .mui-table-view-cell {
          border: 0;
      }
      img {
          width: 60px;
          height: 60px;
      }
      .mui-media-body {
          font-size: 13px;
      }
  }  

  
</style>