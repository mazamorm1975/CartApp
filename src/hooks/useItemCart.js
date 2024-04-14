import { useEffect, useReducer } from "react";
import { itemsReducer } from "../reducer/itemsReducer";
import { AddProductCart, DeleteProductCart, UpdateQuantityProductCart } from "../reducer/itemsActions";

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

      /* Actualizacion de los productos de manera rudimentaria
          setCartItem([
            ...cartItems.filter((i) => i.product.id !== product.id),
            {
              product,
              quantity: hasItem.quantity + 1,
            }
          ])
    
      /*Actualización de los productos utilizando una sentencia map
      
          setCartItem(
            cartItems.map(
              (i) => {
                if (i.product.id === product.id) {
                  i.quantity = i.quantity + 1;
                }
                return i;
              }
              
            )
          );  
       */
      //Se utiliza el hook useReducer para la actualización de productos

      dispatch({
        type: UpdateQuantityProductCart,
        payload: product,
      }
      );


    } else {

  /*    
     setCartItem([...cartItems,
      {
        product,
        quantity: 1,
      }
      ]);
  */
      dispatch(
        {
          type: AddProductCart,
          payload: product
        }
      )

    }

  }

  const handlerDeleteProductCart = (id) => {
   /* 
    setCartItem([
      ...cartItems.filter((i) => i.product.id !== id)
    ]);
    */

    //Se utiliza el hook useReducer para la eliminación de articulos
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