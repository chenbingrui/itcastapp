<template>
    <div class="app-container">
        <!-- <h1> 这是 vue 文件格</h1> -->

        <!-- 顶部 -->
        <mt-header fixed title="玲瑞自学网"></mt-header>
        <!-- 中间 -->
		<transition>
			<router-view></router-view>
		</transition>
        <!-- 底部 -->
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-chen" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-chen" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item-chen" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
                    <span class="mui-badge">1</span>
                </span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-chen" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
        
    </div>
</template>
<script>
export default {
   
}
</script>
<style lang="scss" scoped>

	.mit-header {
		z-index: 99;
	}

    .app-container {
        padding-top: 40px;
		padding-bottom: 50px;
		overflow-x: hidden;
		
    }
	.v-enter{
		opacity: 0;
		transform: translateX(100%);
		
	}



	.v-leave-to {
		opacity: 0;
		transform: translateX(-100%);
		position: absolute;
	}
	.v-enter-active,
	.v-leave-active {
		opacity: 1;
		transition: all 0.5s ease;
	}

	//该类名为了解决滑动滚件滑动之后,又引起,tab 栏无法切换

	.mui-bar-tab .mui-tab-item-chen.mui-active {
    color: #007aff;
}

	.mui-bar-tab .mui-tab-item-chen {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-chen .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-chen .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}


</style>