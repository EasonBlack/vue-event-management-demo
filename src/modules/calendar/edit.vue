<template>
    <div class="edit__container" >
        <h2></h2>
        <div class='form__row'>
            <div class='row__label'>Date</div>
            <date-picker v-model="model.date"></date-picker>
        </div>
        <div class='form__row'>
            <div class='row__label'>Name</div>
            <input type=text v-model='model.name' />
        </div>
        <div class='form__row edit__action'>
            <a class='btn btn__important' @click='save'>Save</a>
            <a class='btn btn__urgent' @click='deleteEvent' v-if='selectEvent'>Delete</a>
            <a class='btn btn__cancel' @click='cancel'>Cancel</a>
        </div>
    </div>
</template>
<script>
    import datePicker from './date_picker/index.vue';
    import uuid from 'node-uuid';
    export default {
        components: {datePicker},
        props: ['selectEvent'],
        data() {
            return {
                model: {
                    id: null,
                    date: null,
                    name: ''
                }
            }
        },
        created() {
            if(this.selectEvent) {
                this.model.id = this.selectEvent.id;
                this.model.date = this.selectEvent.date;
                this.model.name = this.selectEvent.name;
            }
        },
        methods: {
            cancel() {
                this.$emit('cancel');
                this.$store.commit('closeSelectEvent');
            },
            save() {
                if(this.model.id) {
                    this.$store.commit('updateEvent', this.model);
                } else {
                    this.model.id = uuid.v4();
                    this.$store.commit('addNewEvent', this.model);
                }
                this.$store.commit('closeSelectEvent');
            },
            deleteEvent() {
                this.$store.commit('deleteEvent', this.model.id);
                this.$store.commit('closeSelectEvent');
            }
        },

    }
</script>
<style lang='scss' scoped>
    .edit__container {
      background-color:white;
      border: 1px solid #ccc;
      padding: 20px;

      h2 {
        padding:10px;
      }
      input {
        width:100%;
        height:30px;
        line-height:30px;
        padding:5px 25px 5px 15px;
      }
    }
    .edit__action {
        display:flex;
        justify-content: flex-end;
        .btn__important {
            margin-right:5px;
        }
        .btn__urgent {
            margin-right:5px;
        }
    }
</style>