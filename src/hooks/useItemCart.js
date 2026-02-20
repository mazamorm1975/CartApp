import { useEffect, useReducer } from "react";
import { toast } from "react-toastify";
import { itemsReducer } from "../reducer/itemsReducer";
import { AddProductCart, DeleteProductCart, UpdateQuantityProductCart } from "../reducer/itemsActions";
import { saveProductToDatabase } from "../service/serviceProducts";

const initialCartItems = JSON.parse(sessionStorage.getItem('cart')) || [];

export const useItemCart = () => {

    //Aqui se utilizo el useState
  //const [cartItems, setCartItem] = useState(initialCartItems);

  //Se implementa el hook useReducer en lugar del useState por ser mas conveniente 
  //para cuando la logica es mas compleja y se llevan a cabo mas funciones de tipo CRUD
  const [cartItems, dispatch] = useReducer(itemsReducer, initialCartItems);

  useEffect(() => {
    sessionStorage.setItem('cart', JSON.stringify(cartItems));
}, [cartItems])

  const handlerAddProductCart = (product) => {

    const hasItem = cartItems.find((i) => i.product.id === product.id);

    if (hasItem) {

      dispatch({
        type: UpdateQuantityProductCart,
        payload: product,
      });

    } else {

      dispatch({
        type: AddProductCart,
        payload: product
      });

      // Guardar producto en la base de datos
      saveProductToDatabase(product)
        .then(response => {
          toast.success('Producto guardado en la base de datos exitosamente');
        })
        .catch(error => {
          console.log('Error capturado en hook:', error.message);
          toast.error(`Error: ${error.message}`);
        });

    }

  }

  const handlerDeleteProductCart = (id) => {
    dispatch({
      type: DeleteProductCart,
      payload: id,
    })
  }


    return {
        cartItems,
        handlerAddProductCart,
        handlerDeleteProductCart,

    }
}