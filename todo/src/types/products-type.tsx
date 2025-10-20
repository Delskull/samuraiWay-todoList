export interface Product {
    id: number
    name: string
    price: number
    category: string
}
export interface ProductType{
    items: Product[]
}