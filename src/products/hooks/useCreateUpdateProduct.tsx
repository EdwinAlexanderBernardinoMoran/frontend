import { useEffect, useState } from "react"
import type { ProductForm, ProductMap } from "../interfaces/product.interface"
import { createUpdateProduct } from "../actions/create-update-product"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

interface AddProductDialogProps {
  onProductAdded: () => void
  product?: ProductMap
}

export const useCreateUpdateProduct = ({product, onProductAdded}: AddProductDialogProps) => {

    const [open, setOpen] = useState(false)
    const isEditing = product

    const { register, handleSubmit, reset, formState: {
        errors
        }} = useForm<ProductForm>({
        defaultValues: {
        name: "",
        price: "",
        description: "",
        category: "",
        imageUrl: "",
        },
    })

    useEffect(() => {
        if (product && open) {
        reset({
            id: product.id,
            name: product.name,
            price: product.price.toString(),
            description: product.description,
            category: product.category,
            imageUrl: product.imageUrl,
        })
        } else if (!open) {
        reset({
            name: "",
            price: "",
            description: "",
            category: "",
            imageUrl: "",
        })
        }
    }, [product, open, reset])

    const addProduct = async (data: ProductForm) => {
        const payload: ProductForm = {
        ...data,
        id: product?.id !== undefined ? product.id : "new",
        }

        try {
            await createUpdateProduct(payload)
            onProductAdded()
            setOpen(false)
            
            // Mostrar toast de éxito según si es creación o edición
            if (product?.id) {
                toast.success('Updated product', {
                    description: `${data.name} has been updated successfully`,
                    duration: 3000,
                    position: 'top-right',
                })
            } else {
                toast.success('Product created', {
                    description: `${data.name} has been added successfully`,
                    duration: 3000,
                    position: 'top-right',
                })
            }
        } catch (error) {
            console.error("Error creating/updating product:", error)
            // Error toast
            toast.error('Error processing request', {
                description: 'Please try again',
                duration: 5000,
                position: 'top-right',
                action: {
                    label: 'Close',
                    onClick: () => toast.dismiss()
                }
            })
        }
    }

    return {
        open,
        errors,
        isEditing,

        register,
        handleSubmit,
        setOpen,
        addProduct,
    }
}