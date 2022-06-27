import API from "../API/Product";

export const getProducts = ({ commit }) => {
    API.all('products')
        .then((res) => {
            commit('SET_PRODUCTS', res.data)
        })
}

export const getProduct = ({ commit }, productId) => {
    API.getByProductId(`products/${productId}`)
        .then((res) => {
            commit('SET_PRODUCT', res.data)
        })
}

export const addToCart = ({ commit }, product) => {
    commit('ADD_TO_CART', product)
}

export const removeItem = ({ commit }, productId) => {
    commit('REMOVE_FROM_CART', productId)
}

export const emptyCart = ({ commit }) => {
    commit('EMPTY_CART')
}


