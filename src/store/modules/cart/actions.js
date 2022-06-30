export const addToCart = ({ commit, dispatch }, product) => {
    commit('ADD_TO_CART', product)
    dispatch('addNotification', {
        type: 'success',
        message: "Product added into cart."
    }, { root: true })
}

export const removeItem = ({ commit }, productId) => {
    commit('REMOVE_FROM_CART', productId)
}

export const emptyCart = ({ commit }) => {
    commit('EMPTY_CART')
}


