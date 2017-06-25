<template>
    <div class='calendar__container'>
        <div class='calendar__header'>
            <div class='left__section'>
                 <div class='flex__1 flex__left'>
                      <a class='calendar__prev icon-left-open'  @click='prev'></a>
                 </div>
                 <div class='flex__1 flex__center'>
                     {{this.current.format('YYYY-MM')}}
                 </div>
                 <div class='flex__1 flex__right'>
                     <a class='calendar__next icon-right-open'  @click='next'></a>
                 </div>
            </div>
            <div class='right__section'>
                <a class='btn btn__important btn__overview' @click='showOverview'>OverView</a>
                <a class='btn btn__primary  btn__add' @click='showEdit'>New Event</a>
            </div>
        </div>
        <calendar  :currentYear='currentYear'
                   :currentMonth='currentMonth'
                   :source='monthGroup'
                  >
        </calendar>
        <modal @closeModal='closeModal' v-if='showDailyModal'>
            <daily-event slot='content' :source='monthGroup' v-if='monthGroup.length'></daily-event>
        </modal>
        <modal @closeModal='closeModal' v-if='showEventModel'>
            <edit-modal  slot='content'
            :selectEvent='selectEvent' ></edit-modal>
        </modal>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import calendar from './calendar/index.vue';
    import dailyEvent from './github_like_daily/index.vue';
    import editModal from './edit.vue';
    import modal from './modal.vue';
    import moment from 'moment';
    export default {
        components:{calendar, dailyEvent, modal, editModal},
        data() {
            return {
                showDailyModal: false,
                current: moment().startOf('month'),
                currentMonth: moment().month(),
                currentYear: moment().year(),
                source: []}
        },
        created() {
            this.$store.dispatch('fetchEvents');
        },
        methods: {
            closeModal() {
                this.showDailyModal = false;
                this.selectEvent = null;
            },
            showOverview() {
                this.showDailyModal = true;
            },
            showEdit() {
                this.$store.commit('showEventModelBox');
            },

            prev () {
                 this.current =this.current.subtract(1, 'months');
                 this.currentMonth = this.current.month();
                 this.currentYear = this.current.year();
             },
             next () {
                 this.current = this.current.add(1, 'months');
                 this.currentMonth = this.current.month();
                 this.currentYear = this.current.year();
             },
        },
        computed: {
            ...mapState({
               monthItems: (state) =>  state.event.events,
               selectEvent: (state)=> state.event.selectEvent,
               showEventModel: (state)=> state.event.showEventModel
            }),
            monthGroup: function() {
                let groups = {};
                if(!this.monthItems) return null;
                for(let m of this.monthItems) {
                    groups[m.date] = groups[m.date] || [];
                    groups[m.date].push(m);
                }
                let monthGroup = Object.keys(groups).map((o)=>{
                    return {
                        date: o,
                        events: groups[o]
                    }
                })
                return monthGroup;
            },
        }
    }
</script>

<style lang='scss' scoped>
    .calendar__container {

    }
    .calendar__header {
        height:60px;
        position:relative;
        display:flex;
        .right__section {
            height:100%;
            width:300px;
            display:flex;
            flex:1 ;
            align-items:center;
            justify-content:flex-end;
            padding-right:10px;

            .btn__overview {
                margin-right:10px;
            }
        }
        .left__section {
            height:100%;

            display:flex;
            flex:0 0 300px;
            align-items:center;
            padding:0 10px;
            .calendar__prev, .calendar__next {
                width:30px;
                height:30px;
                color: white;
                background-color: #00AECD;
                border-radius: 50%;
                display:flex;
                justify-content: center;
                align-items:center;
            }
            .calendar__next:before {
                margin-right:0;
            }
        }
    }
</style>