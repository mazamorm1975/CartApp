import { useState } from "react";
import { CartView } from "./Components/CartView";
import { CatalogView } from "./Components/CatalogView";

const initialCartItems = [
/*
  {
    product: {
      id:1,
        name:"Teclado Mecanico RGB",
        description:"Teclado Mecanico con luces RGB switches cherry red",
        price: 5000.45
    },
    quantity: 0,
    total: 0
  }
*/
]



export const CartApp = () => {

  const [cartItems, setCartItem] = useState(initialCartItems);

  const handlerAddProductCart = (product) => {

    const hasItem = cartItems.find((i) => i.product.id === product.id);

    if(hasItem){

  //    setCartItem([
  //      ...cartItems.filter((i) => i.product.id !== product.id),
  //      {
  //        product,
  //        quantity: hasItem.quantity + 1,
  //      }
  //    ])

  //Otra forma de implementar al actualización de los productos utilizando una sentencia map
  
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


    }else {

      setCartItem([...cartItems,
        { 
          product,
          quantity:1,
        }
      ]);
    }    
  }

  return (
    <>
      <div className="container">
        <h1>Cart App</h1>
        <CatalogView handler={product => handlerAddProductCart(product)}/>
        <div className="my-4 w-50">
          <CartView items={cartItems}/>
        </div>
      </div>
    </>
  );
};
