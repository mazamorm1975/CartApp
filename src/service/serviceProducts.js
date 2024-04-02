import { products } from "../data/products"

export const getProducts = () => {

    return products;

}

export const calculateTotal = (items) => {
    
    return items.reduce((acumulator, items) => acumulator + items.product.price * items.quantity,0); 
}