import Vue from 'vue'

export default {
    fetchEvents() {
        let EventResource = Vue.resource('/data/events.json');
        return EventResource.get()
    }
}
