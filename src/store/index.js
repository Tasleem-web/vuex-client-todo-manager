import { createStore } from 'vuex'

export default createStore({
    state: {
        firstName: "Mohammad",
        lastName: "Tasleem",
        favorites: []
    },
    getters: {
        fullName: function (state) {
            return `${state.firstName} ${state.lastName}`
        }
    },
    actions: {
        addToFavorites(context, payload) {
            context.commit('UPDATE_FAVORITES', payload)
        }
    },
    mutations: {}

})