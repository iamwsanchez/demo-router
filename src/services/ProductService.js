import httpCommon from "./http-common";
class ProductService {
    getAll() {
        return httpCommon.get("/products");
    }
    get(id) {
        return httpCommon.get(`/products/${id}`);
    }
    create(data) {
        return httpCommon.post("/products", data);
    }
    update(id, data) {
        return httpCommon.put(`/products/${id}`, data);
    }
    delete(id) {
        return httpCommon.delete(`/products/${id}`);
    }
}
 export default new ProductService();