<template>
    <div>
        <h3>这是Accountlist组件</h3>
        <router-link to="/account/son1">登录</router-link>
        <router-link to="/account/son2">注册</router-link>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    body {
        div{
            font-style: italic;
        }
    }
</style>