import { productApi } from "../api/products.api";
import type { Product, ProductForm } from "../interfaces/product.interface";
import { ProductMapper } from "../mappers/product.mapper";

export const createUpdateProduct = async ({ id, name, price, description, category, imageUrl }: ProductForm) => {
    const isCreating = id === 'new';
    
    const response = await productApi<Product>({
        url: isCreating ? '/api/products' : `/api/products/${id}`,
        method: isCreating ? 'POST' : 'PUT',
        data: {
            name,
            price: Number(price),
            description,
            category,
            image: imageUrl || 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
        },
    });
   
    return ProductMapper.mapRestProductResponseToProduct(response.data);
}