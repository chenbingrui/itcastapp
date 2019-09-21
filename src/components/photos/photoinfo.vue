<template>
    <div class="phpotoinfo-container">
        <h3>{{photoinfo.title}}</h3>
        <p class="subtitle">
            <span>发表时间:{{photoinfo.add_time|dateFormat}}</span>
            <span>点击: {{photoinfo.click}}次</span>
        </p>

        <hr>



        <!-- 图片缩略图区域 -->
          <div class="thumbs">
                <img :src="item.src" height="100" :key="item.src" @click="$preview.open(index,list)" v-for="(item,index) in list" class="preview-img">

          </div>
        <!-- 图片加文本区域 -->
        <div class="content" v-html="photoinfo.content">

        </div>


        <!-- 评论子组件 -->
        <cmt-box :id="id"></cmt-box>
    </div>
</template>
<script>

//导入评论子组件

import comment from '../subcomponents/components.vue'

export default {
    data(){
        return {
        id:this.$route.params.id,
        photoinfo:{},  //图片详情
        list:[]   //缩略图
        }
    },
    created(){
        this.getPhotoInfo();
         getThumbs();
    },
    methods:{
        getPhotoInfo(){  //获取图片的详情
            this.$http.get('api/getimageInfo'+this.id).then(result=>{
                if(result.body.status===0){
                    this.photoinfo = result.body.message[0]
                }
            })

        },
        getThumbs(){
            this.$$http.get('api/getthumimages/'+this.id).then(result=>{
                if(result.body.status ===0 ){
                    result.body.message.forEach(item=>{
                        item.w = 600;
                        item.h= 400;
                    });
                    this.list = result.body.message;
                }
            })
        }
    },
    components:{  //注册评论组件
        'cmt-box':comment
    }
}
</script>
<style lang="scss" scoped>
    .phpotoinfo-container {
        padding: 3px;
        h3 {
            font-size: 15px;
            color: blue;
            text-align: center;
            margin: 15px 0;
        }
        .subtitle {
            display: flex;
            justify-content: space-between;
              font-size: 15px;
        }
        .content {
              font-size: 15px;
              line-height: 30px;
        }

        .thumbs {
            img {
                margin: 10px;
                box-shadow: 0 0 5px #999
            }
        }
    }
</style>