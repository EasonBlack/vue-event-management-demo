<template>
    <div class='event__container' @click='clickHandle'>
        {{event.name}}
    </div>
</template>
<script>
    export default {
        props: ['event'],
        methods: {
            clickHandle() {
                console.log(this.event);
                this.$store.commit('getEventById', this.event.id);
            }
        }
    }
</script>
<style lang='scss' scope>
    .event__container {
        width: 100%;
        min-width: 0;
        height:15px;
        line-height:15px;
        padding: 0 10px;
        font-size:0.7em;
        background-color:steelblue;
        color:white;
        margin-bottom:5px;
        overflow:hidden;
        text-overflow:ellipsis;
    }
</style>