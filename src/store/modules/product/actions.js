import API from "../../../API/Product";

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