import API from "./api";

export default {
    all(endPoint) {
        // return API.post(endPoint);
        return API.get(endPoint);
    },
    getByProductId(endPoint, productId = null) {
        if (productId) {
            return API.get(endPoint + "/" + productId);
        }
        return API.get(endPoint)
    },
    postProductFile(endPoint, payload) {
        return API.post(endPoint, payload)
    },
    addProduct(endPoint, payload) {
        return API.post(endPoint, payload)
    },
    addProductFile(endPoint, payload) {
        return API.post(endPoint, payload);
    }
}