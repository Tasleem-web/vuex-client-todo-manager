import API from "../../../API/Product";

export const getProducts = ({ commit }) => {
    API.all('product/getProducts')
        .then((res) => {
            commit('SET_PRODUCTS', res.data)
        })
}

export const getProduct = ({ commit }, productId) => {
    console.log({ productId });
    API.getByProductId(`product/getProductById`, productId)
        .then((res) => {
            commit('SET_PRODUCT', res.data)
        })
}

export const uploadProductFile = ({ commit, dispatch }, formData) => {
    API.postProductFile(`/product/upload/{productId}`, formData)
        .then(res => {
            commit("UPLOAD_PRODUCT_FILE", res.data);
            dispatch('addNotification', {
                type: 'success',
                message: res.data.message
            }, { root: true });
        })
        .catch(err => {
            console.log(err);
        })
}

export const deleteFile = ({ commit, dispatch }, file) => {
    commit("REMOVE_PRODUCT_FILE", file);
    dispatch('addNotification', {
        type: 'danger',
        message: 'Image has been deleted'
    }, { root: true });

}
////////////////////////
//     Add product    //
////////////////////////

export const addProduct = ({ commit = {} }, payload) => {
    const { title, description, price } = payload;
    commit('ADD_PRODUCT', { title, description, price });
    API.addProduct(`/product/addProduct`, { title, description, price })
        .then(res => {
            console.log(res);
            // commit("REMOVE_PRODUCT_FILE", res.data);
            // dispatch('addNotification', {
            //     type: 'success',
            //     message: res.data.message
            // }, { root: true });
            uploadFile(res.data.id, payload.imageUrl);
        })
        .catch(err => {
            console.log(err);
        })
}

export const uploadFile = (productId, imageUrl) => {
    console.log('uploadFile');
    API.addProductFile(`product/upload/${productId}`, imageUrl)
        .then(data => {
            console.log(data);
        })
        .catch(err => {
            console.log(err);
        })
}
