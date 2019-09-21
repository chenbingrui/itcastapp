<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入评论的内容(可以吐槽120字)" maxlength="120" v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item" v-for="(item,i) in comments" :key="item.add_time">
                <div class="cmt-title">
                    第{{i+1}}楼&nbsp;&nbsp;用户:{{item.user_name}}&nbsp;&nbsp;发表时间:{{item.add_time|dataFormat}}
                </div>
                <div class="cmt-body">
                   {{item.content==='undefined'? '此用户很懒,什么都没有说':item.content}}
                </div>
            </div>

              <div class="cmt-item" v-for="item in comments" :key="item.add_time">
                <div class="cmt-title">
                    第楼&nbsp;&nbsp;用户:匿名用户&nbsp;&nbsp;发表时间:2019-9-19
                </div>
                <div class="cmt-body">
                    锄禾日当午 复方
                </div>
            </div>
           
        </div>
        <mt-button type="danger" size="large" plain @click="getMore"> 加载更多</mt-button>
    </div>
</template>
<script>
import {Toast} from 'mint-ui'

export default {
    data(){
        return {
            pageIndex:1,  //默认展示第一个页面
            comments:[],   //所有评论数组
            msg:'',
        }
    },
    created(){
        this.getComments();
    },
    methods:{
        getComments(){
            this.$http.get("api/getcomments/"+this.id+"?pageindex="+this.pageIndex).then(result=>{
                if(result.body.status===0){
                    //每当获取新的额评论的时候,不要把老数据清空覆盖,而是要把老数组,拼接上新的数组
                    this.comments = this.comments.concat(result.body.message)
                }else{
                    Toast("获取评论失败")
                }
            })
        },
        getMore(){
            this.pageIndex++;
            this.getComments()
        },
        postComment(){  //发表评论

            if(this.msg.trim().length===0){
              return  Toast('输入的内容不能为空')
            }

            this.$http.psot('api/postcomment/'+this.$route.id,{content:this.msg.trim()}).then(function(){
                if(result.body.status === 0 ){
                    var cmt = {
                        user_name: '匿名用户',
                        add_time : Date.now(),
                        content : this.msg.trim()
                    };
                    this.comments.unshift(cmt)
                    this.msg= ''
                }else{
                    Toast('连接服务器失败')
                }
            })
        }
    },
    props:['id']
}
</script>
<style lang="scss" scoped>
    .cmt-container{
        h3 {font-size: 18px}
        texrarea {
            font-size: 13px;
            height: 85px;
            margin: 0;
        }
        .cmt-list {
            margin: 10px 0;
            .cmt-item{
                font-size: 13px;

                .cmt-title{
                    background-color: #ccc;
                    line-height: 30px;
                }
                .cmt-body {
                    line-height: 35px;
                    text-indent: 2em;
                }
            }
        }
    }
</style>