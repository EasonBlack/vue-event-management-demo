<template>
    <div class='weekend__container'>
        <ul>
            <li v-for='w in week'>
                {{w}}
            </li>
        </ul>
    </div>
</template>

<script>
    import moment from 'moment';
    export default{
        props: ['startDate'],
        computed: {
            'week' : function() {
                let w = [];
                for(let i=0;i<7;i++) {
                    w.push(moment(this.startDate).add(i,'day').format('ddd'))
                }
                return w;
            }
        }
    }
</script>

<style lang='scss' scoped>
    @import '~$style/_settings.variable.scss';
    .weekend__container {
        position:absolute;
        top:0;
        margin-left: #{-1 * ($daily_width * 2 + 5)}px;
        width:#{$daily_width * 2}px;
        height:#{$daily_width * 7}px;

        ul {
            list-style:none;
        }
        li {
            font-size:0.1em;
            height: #{$daily_width}px;
            transform: scale(0.7);
            color: white;
        }
    }
</style>
