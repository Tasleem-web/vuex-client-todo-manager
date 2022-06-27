export const addToCart = ({ commit }, product) => {
    commit('ADD_TO_CART', product)
}

export const removeItem = ({ commit }, productId) => {
    commit('REMOVE_FROM_CART', productId)
}

export const emptyCart = ({ commit }) => {
    commit('EMPTY_CART')
}


