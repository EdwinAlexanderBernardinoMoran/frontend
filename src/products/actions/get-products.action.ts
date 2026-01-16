import { productApi } from "../api/products.api";
import type { Product, ProductMap } from "../interfaces/product.interface";
import { ProductMapper } from "../mappers/product.mapper";


export const getProducts = async (search?: string): Promise<ProductMap[]> => {
    const url = search ? `/api/products?search=${encodeURIComponent(search)}` : '/api/products'
    const response = await productApi<Product[]>(url)

    return ProductMapper.mapRestProductItemsToProductArray(response.data);
}