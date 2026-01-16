import type { Product, ProductMap } from "../interfaces/product.interface";

export class ProductMapper {
    static mapRestProductResponseToProduct(item: Product): ProductMap {
        return {
            id: item.id,
            name: item.name,
            price: item.price,
            description: item.description,
            category: item.category,
            imageUrl: item.image,
            dateOfCreation: item.createdAt,
            updateDate: item.updatedAt,
        }
    }

    static mapRestProductItemsToProductArray(items: Product[]): ProductMap[]{
    return items.map(ProductMapper.mapRestProductResponseToProduct);
  }
}