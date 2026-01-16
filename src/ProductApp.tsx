import { CustomHeader } from "./products/components/CustomHeader"
import { ProductList } from "./products/components/ProductList"
import { useProducts } from "./products/hooks/useProducts"
import { SearchBar } from "./shared/components/SearchBar"
import { Loading } from "./shared/components/Loading"
import { NotFound } from "./shared/components/NotFound"

export const ProductApp = () => {
  const {isLoading, getProductsAll, paginatedProducts, totalPages, page, setPage} = useProducts()
  
  return (
    <div className="flex flex-col gap-4 w-full mx-auto p-6 md:p-24 min-h-screen">
      {/* Custom Header */}
      <CustomHeader title="Products" />

      {/* Search */}
      <SearchBar onQuery={getProductsAll} placeholder="Search products"/>
      
      {/* Loading State */}
      {isLoading && <Loading text="Loading products..." />}
      
      {/* Empty State */}
      {!isLoading && paginatedProducts.length === 0 && (
        <NotFound title="No products found." description="Try another search term" />
      )}
      
      {/* Table */}
      {!isLoading && paginatedProducts.length > 0 && (
        <ProductList 
          products={paginatedProducts} 
          onProductUpdated={getProductsAll} 
          page={page} 
          totalPages={totalPages} 
          setPage={setPage} 
        />
      )}
    </div>
  )
}