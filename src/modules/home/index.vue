<template>
    <div class='app__container'>
        <div class='left__container'>
            <left-nav></left-nav>
        </div>
        <div class='right__container'>
             <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import leftNav from './left-nav/index.vue';
    export default {
	    components: {leftNav}
    }
</script>

<style lang='scss' scoped >
    .app__container {
        width:100vw;
        min-height:100vh;
        display: flex;
        overflow:hidden;
    }
    .left__container {
        width:100px;
        height:100vh;
        color:#FAFFFF;
    }
    .right__container {
        flex:1;
        height:100vh;
        overflow:hidden;
        overflow-y: auto;
    }
</style>