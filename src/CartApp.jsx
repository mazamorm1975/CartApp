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

  return (
    <>
      <div className="container">
        <h1>Cart App</h1>
        <CatalogView />
        <div className="my-4 w-50">
          <CartView items={cartItems}/>
        </div>
      </div>
    </>
  );
};
