import { useEffect, useState } from "react";
import type { ProductMap } from "../interfaces/product.interface";
import { getProducts } from "../actions/get-products.action";
import { toast } from "sonner";

export const useProducts = () => {

  const [products, setProducts] = useState<ProductMap[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  const limit = 10;

  const start = (page - 1) * limit;
  const end = start + limit;

  const paginatedProducts = products.slice(start, end);
  const totalPages = Math.ceil(products.length / limit);
  
  const loadProducts = async (search?: string) => {
    setIsLoading(true);
    setPage(1)
    try {
      const products = await getProducts(search);

      // Ordenar por ID de forma descendente (más reciente primero)
      const sortedProducts = products.sort((a, b) => {
        return Number(b.id) - Number(a.id);
      });
      
      setProducts(sortedProducts);
    } catch (error) {
      toast.error('Error processing request', {
        description: 'Please try again',
        duration: 5000,
        position: 'top-right',
        action: {
          label: 'Close',
          onClick: () => toast.dismiss()
        }
      });
    } finally {
      setIsLoading(false);
    }
  }
    
    useEffect(() => {
      loadProducts();
    }, []);
  return {
    isLoading,
    paginatedProducts,
    totalPages,
    page,
    getProductsAll: loadProducts,
    setPage
  }
}