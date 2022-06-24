import { createStore } from 'vuex'

export default createStore({
    state: {
        firstName: "Mohammad",
        lastName: "Tasleem",
        notes: []
    },
    getters: {
        totalNotes(state) {
            return state.notes.length
        }
    },
    mutations: {
        SAVE_NOTES(state, payload) {
            state.notes.push(payload)
        }
    },
    actions: {
        saveNotes(context, payload) {
            context.commit('SAVE_NOTES', payload)
        }
    },

})