import { productApi } from "../api/products.api";

export const deleteProduct = async (id: string) => {
    try {
        await productApi.delete(`/api/products/${id}`);
        return true;
    } catch (error) {
        console.error("Error al eliminar producto:", error);
        throw error;
    }
}
