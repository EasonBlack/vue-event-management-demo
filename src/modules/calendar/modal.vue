<template>
    <div class="modal__mask"  @click ='closeModal'>
        <div class='modal__content' @click.prevent.stop>
            <slot name="content"> </slot>
        </div>
    </div>
</template>
<script>
    export default {
        methods: {
            closeModal() {
                 this.$emit('closeModal');
            }
        }
    }
</script>
<style lang='scss' scoped>
    .modal__mask {
        width:100vw;
        height:100vh;
        background-color: rgba(black, 0.3);
        z-index:300;
        position:fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display:flex;
        justify-content:center;
        align-items: center;

    }
    .modal__content {
        margin-top:-100px;
    }

</style>