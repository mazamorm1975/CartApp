import { useReducer, useState, useEffect } from "react";
import { CartView } from "./Components/CartView";
import { CatalogView } from "./Components/CatalogView";
import { useItemCart } from "./hooks/useItemCart";


export const CartApp = () => {

  const { cartItems, handlerAddProductCart, handlerDeleteProductCart} = useItemCart();

return (
  <>
    <div className="container my-4">
      <h1>Cart App</h1>
      <CatalogView handler={product => handlerAddProductCart(product)} />

      {cartItems?.length <= 0 || (
        <div className="my-4 w-50">
          <CartView items={cartItems} handlerDelete={handlerDeleteProductCart} />
        </div>
      )}
    </div>
  </>
);
};
