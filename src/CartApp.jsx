import { useState } from "react";
import { CartView } from "./Components/CartView";
import { CatalogView } from "./Components/CatalogView";

const initialCartItems = JSON.parse(sessionStorage.getItem('cart')) || [];


export const CartApp = () => {

  console.log(initialCartItems);

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

  const handlerDeleteProductCart = (id) => {
    setCartItem([
      ...cartItems.filter((i) => i.product.id !== id)
    ]);
  }

  return (
    <>
      <div className="container my-4">
        <h1>Cart App</h1>
        <CatalogView handler={product => handlerAddProductCart(product)}/>
        
        {cartItems?.length <= 0 || (
          <div className="my-4 w-50">
          <CartView items={cartItems} handlerDelete={handlerDeleteProductCart}/>
        </div>      
        )}     
      </div>
    </>
  );
};
