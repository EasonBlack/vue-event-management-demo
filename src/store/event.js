import {EventsApi} from '../api'

const state = {
   events: [],
   selectEvent: null,
   showEventModel: false

}

const mutations = {
    fetchEvents(state, events) {
        state.events =  events;
    },

    showEventModelBox(state) {
        state.showEventModel = true;
    },

    getEventById(state, id){
        let _event = state.events.find(event=>event.id===id);
        state.selectEvent = _event;
        state.showEventModel = true;
    },

    closeSelectEvent(state) {
        state.selectEvent = null;
        state.showEventModel = false;
    },
    
    addNewEvent(state, event) {
        state.events.push(event);
    },

    updateEvent(state, up) {
        let _event = state.events.find(event=>event.id===up.id);
        _event.date = up.date;
        _event.name = up.name;
    },

    deleteEvent(state, id){
        for(let i in state.events) {
            if(state.events[i].id == id){
                state.events.splice(i,1);
            }
        }
    }
}

const actions = {
    fetchEvents ({commit, state}, current) {
        EventsApi.fetchEvents()
            .then(data=>{
                commit('fetchEvents', data.body);
            })
    }
}


export default {
    state,
    mutations,
    actions
}