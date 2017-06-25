<template>
    <div class='month__container'>
        <ul>
            <li v-for='m in monthsArray'>
                {{m}}
            </li>
        </ul>
    </div>
</template>

<script>
    import moment from 'moment';
    export default{
        props: ['dates'],
        data(){
            return{
                months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                monthsArray: []
            }
        },
        created : function() {
            let _months = [];
            for(let i =0;i<this.dates.length;i++) {
                  let d = this.dates[i][0]
                  let _m = moment(d).month();
                  if(_months.indexOf(this.months[_m])==-1) {
                    _months.push(this.months[_m]);
                  } else {
                    _months.push('');
                  }
            }
            this.monthsArray = _months;
        }
    }

</script>

<style lang='scss' scoped>
    @import '~$style/_settings.variable.scss';
    .month__container {
        position: absolute;
        height: #{$daily_width}px;
        top: 0px;
        margin-top:-15px;
        ul {
            display: flex;
            flex-direction: row;
            list-style: none;
            li {
                width: #{$daily_width}px;
                height: #{$daily_width}px;
                line-height: #{$daily_width}px;
                text-align: left;
                font-size: 0.2em;
                color: white;
            }
        }
    }
</style>
