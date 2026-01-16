export interface Product {
    id:          string;
    name:        string;
    price:       number;
    description: string;
    category:    string;
    image:       string;
    createdAt:   Date;
    updatedAt:   Date;
}

export interface ProductForm {
    id:          string;
    name:        string;
    price:       string;
    description: string;
    category:    string;
    imageUrl?:       string;
}

export interface ProductMap{
    id:          string;
    name:        string;
    price:       number;
    description: string;
    category:    string;
    imageUrl:       string;
    dateOfCreation:   Date;
    updateDate:   Date;
}
