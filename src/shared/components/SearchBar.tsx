import { AddProductDialog } from "@/products/components/AddProductDialog"
import { useEffect, useState } from "react";

interface SearchBarProps {
  placeholder?: string;
  onQuery: (term? : string) => void;
}

export const SearchBar = ({ placeholder, onQuery }: SearchBarProps) => {
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const timer = setTimeout(() => {
          onQuery(searchTerm);
        }, 500);
    
        return () => clearTimeout(timer);
    }, [searchTerm]);
    
    return (
        <>
            <div className="flex gap-4 items-center mb-4">
                <div className="flex-1 relative">
                    <input
                        type="text"
                        placeholder={placeholder}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    />
                </div>
                <AddProductDialog onProductAdded={onQuery} />
            </div>
        </>
    )
}