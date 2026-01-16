import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Pencil } from "lucide-react"
import type { ProductMap } from "../interfaces/product.interface";
import { AddProductDialog } from "./AddProductDialog";
import { DeleteProductAlert } from "./DeleteProductAlert";
import { PaginationData } from "./Pagination";

interface Props{
  products: ProductMap[];
  onProductUpdated: () => void;
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
}

export function ProductList({ products, onProductUpdated, page, totalPages, setPage }: Props) {
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>NAME</TableHead>
            <TableHead>PRICE</TableHead>
            <TableHead>DESCRIPTION</TableHead>
            <TableHead>CATEGORY</TableHead>
            <TableHead>IMAGE</TableHead>
            <TableHead>ACTIONS</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map(({ id, name, price, description, category, imageUrl}) => (
            <TableRow key={id}>
              <TableCell className="font-medium">{id.toString().padStart(13, '0')}</TableCell>
              <TableCell>{name}</TableCell>
              <TableCell>{price}</TableCell>
              <TableCell>{description}</TableCell>
              <TableCell>
                <span className="inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-400 inset-ring inset-ring-gray-400/20">{category}</span>
              </TableCell>
              <TableCell className="ml-4">
                <div className="flex items-center justify-center">
                  <img 
                    src={imageUrl} 
                    alt={name} 
                    className="w-16 h-16 object-cover rounded-md"
                  />
                </div>
              </TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <AddProductDialog 
                    product={{ id, name, price, description, category, imageUrl, dateOfCreation: new Date(), updateDate: new Date() }}
                    onProductAdded={onProductUpdated}
                  >
                    <Button variant="outline" size="sm">
                      <Pencil className="h-4 w-4 text-blue-500" />
                    </Button>
                  </AddProductDialog>
                  <DeleteProductAlert 
                    productId={id}
                    productName={name}
                    onProductDeleted={onProductUpdated}
                  />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <PaginationData page={page} totalPages={totalPages} setPage={setPage} />
    </>
  )
}
