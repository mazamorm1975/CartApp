import { products } from "../data/products"

const API_URL = 'http://localhost:8080/products';

export const getProducts = () => {
    return products;
}

/*
funcion de prueba para mostrar como se pueden extraer los datos de un objeto utilizando destructuring y el operador rest.
export const myFunction = (parametros) => {

    const {id, ...data} = parametros;
    
    console.log(data);
}

myFunction({id:1, name: 'Producto 1', price: 10.99});*/

export const calculateTotal = (items) => {

    return items.reduce((acumulator, items) => acumulator + items.product.price * items.quantity, 0);
}

// Guardar producto en la base de datos
export const saveProductToDatabase = async (product) => {
    try {
        // No incluir el ID ya que el servidor lo auto-genera
        const { id, ...productData } = product;

        console.log('Enviando producto a:', `${API_URL}/addProduct`);
        console.log('Datos del producto:', productData);

        const response = await fetch(`${API_URL}/addProduct`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(productData)
        });

        console.log('Status de respuesta:', response.status);

        if (!response.ok) {
            const errorData = await response.text();
            throw new Error(`HTTP ${response.status}: ${errorData || response.statusText}`);
        }

        const data = await response.json();
        console.log('Producto guardado exitosamente:', data);
        return data;
    } catch (error) {
        console.error('Error completo al guardar el producto:', error);
        throw error;
    }
}