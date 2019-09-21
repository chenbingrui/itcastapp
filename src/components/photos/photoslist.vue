<template>
    <div>
        <!-- 顶部滑动条 -->
        <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
							推荐
						</a>

                        <!-- <a :class="['mui-control-item',item.id==0?'mui-active':'']" href="#item1mobile" data-wid="tab-top-subpage-1.html">
							推荐
						</a> -->

						<a class="mui-control-item" v-for="item in cates" :key="item.title" @tap="getPhotoListByCateId(item.id)" data-wid="tab-top-subpage-2.html">
							{{item.title}}
						</a>
						<a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
							北京
						</a>
						<a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
							社会
						</a>
						<a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
							娱乐
						</a>
						<a class="mui-control-item" href="#item6mobile" data-wid="tab-top-subpage-6.html">
							科技
						</a>
                        <a class="mui-control-item" href="#item6mobile" data-wid="tab-top-subpage-6.html">
							物理
						</a>
                        <a class="mui-control-item" href="#item6mobile" data-wid="tab-top-subpage-6.html">
							化学
						</a>
					</div>
				</div>

			</div>

        <!-- 图片列表区域 -->
        <ul class="photo-list">
            <router-link v-for="item in list" :key="item.id" :to="'/home/photoinfo'+item.id" tag="li">
                <img v-lazy="item.img_url">
                <div class="info">
                    <h1 class="info-title">{{item.title}}</h1>
                    <div class="info-body">{{item.zhaiyao}}</div>
                </div>
            </router-link>
        </ul>

    </div>
</template>

<script>
//现在photo 组件下 导入 mui
import mui from '../../lib/mui/js/mui.min.js'


export default {
    data(){
        return {
            cates:[],   //所有分类列表
            list:[]  //图片列表
        }
    },
    mounted(){  //初始化组件,当组件的 dom结构被渲染好,放到页面中,会被执行这个 沟子函数
       //初始化 滑动控件
mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
}); 
    },
    created(){
        this.getAllCategory();
            //默认请求所有图片列表
        getPhotoListByCateId(0)
    },
    methods: {
        getAllCategory(){
            this.$http.get('api/getimgcategory').then(result=>{
                if(result.body.status===0){  //手动拼接一个  全部  对象
                    result.body.message.unshift({
                        title:"全部",
                        id: 0
                    });
                    this.cates = result.body.message

                }
            })
        },
        getPhotoListByCateId(cateid){
            //根据分类id   获取图片列表
            this.$http.get('api/getimages/'+cateid).then(result=>{
                if(result.body.status === 0){
                    this.list = result.body.message
                }
            })
        }
    },
}
</script>

<style lang="scss" scoped>
 * {
     touch-action: pan-y;
 }

  

    .photo-list {
        list-style: none;
        padding: 10px;
        margin: 0;
        padding-bottom: 0;
        li {
            background-color: #ccc;
            text-align: center;
            margin-bottom: 10px;
            box-shadow: 0 0 9px #999;
            position: relative;
             img[lazy="loading"]{
                 width: 40px;
                height: 300px;
                margin: auto;
                }
              img {
                  width: 100%;
                  vertical-align: middle;
              }

              .info{
                  color: white;
                  text-align: left;
                  position: absolute;
                  bottom: 0;
                  background-color: rgba(0,0,0,0.4);
                  max-height: 84px;
                  .info-title {
                      font-size: 14px;
                  }
                  .info-body{
                       font-size: 12px;
                  }
              }  
        }
    }

</style>