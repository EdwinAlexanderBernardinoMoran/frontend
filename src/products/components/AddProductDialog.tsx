import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Plus } from "lucide-react"
import type {ProductMap } from "../interfaces/product.interface"
import { useCreateUpdateProduct } from "../hooks/useCreateUpdateProduct"

interface AddProductDialogProps {
  onProductAdded: () => void
  product?: ProductMap
  children?: React.ReactNode
}

export function AddProductDialog({ onProductAdded, product, children }: AddProductDialogProps) {

  const { open, errors, isEditing, register, handleSubmit, setOpen, addProduct } = useCreateUpdateProduct({product, onProductAdded})

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children || (
          <Button className="bg-green-600 hover:bg-green-500">
            <Plus className="h-4 w-4" />
            Create product
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{isEditing ? "Editar Producto" : "Agregar Producto"}</DialogTitle>
          <DialogDescription>
            {isEditing 
              ? "Modifica los campos para actualizar el producto."
              : "Completa los campos para agregar un nuevo producto."}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(addProduct)}>
          <div className="grid gap-4 py-4">

            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                type="text"
                {...register("name", {
                  required: true,
                })}
                className={cn(
                  "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm",
                  {
                    'border-red-600 focus:border-red-600 focus:ring-red-600': errors.name,
                  }
                )}
              />
              {
                errors.name && <span className="text-sm text-red-600">Name is required</span>
              }
            </div>

            <div className="grid gap-2">
              <label htmlFor="price" className="text-sm font-medium">
                Price
              </label>
              <input
                id="price"
                type="number"
                step="0.01"
                {...register("price", {
                  required: true,
                  min: 1
                })}
                className={cn(
                  "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm",
                  {
                    'border-red-600 focus:border-red-600 focus:ring-red-600': errors.price,
                  }
                )}
              />
              {
                errors.price && <span className="text-sm text-red-600">The price must be greater than 0.</span>
              }
            </div>
            <div className="grid gap-2">
              <label htmlFor="description" className="text-sm font-medium">
                Description
              </label>
              <textarea
                id="description"
                className={cn(
                  "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm",
                  {
                    'border-red-600 focus:border-red-600 focus:ring-red-600': errors.description,
                  }
                )}
                {...register("description", {
                  required: true,
                  minLength: 10,
                  maxLength: 70
                })}
              />
              {
                errors.description && <span className="text-sm text-red-600">The description must be between 10 and 70 characters long.</span>
              }
            </div>
            <div className="grid gap-2">
              <label htmlFor="category" className="text-sm font-medium">
                Category
              </label>
              <input
                id="category"
                type="text"
                className={cn(
                  "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm",
                  {
                    'border-red-600 focus:border-red-600 focus:ring-red-600': errors.category,
                  }
                )}
                {...register("category")}
                required
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="imageUrl" className="text-sm font-medium">
                image URL
              </label>
              <input
                id="imageUrl"
                type="url"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                {...register("imageUrl")}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button className="bg-green-600 hover:bg-green-500" type="submit">Save</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}