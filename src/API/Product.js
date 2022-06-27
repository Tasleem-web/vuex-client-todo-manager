import API from "./api";

export default {
    all(endPoint) {
        return API.get(endPoint);
    },
    getByProductId(endPoint) {
        return API.get(endPoint)
    }
}