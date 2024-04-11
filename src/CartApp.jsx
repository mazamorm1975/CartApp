
import { CartView } from "./Components/CartView";
import { CatalogView } from "./Components/CatalogView";
import { useItemCart } from "./hooks/useItemCart";
import { Navigate, Route, Routes } from "react-router-dom";

export const CartApp = () => {

  const { cartItems, handlerAddProductCart, handlerDeleteProductCart } = useItemCart();

  return (
    <>
      <div className="container my-4">
        <h1>Cart App</h1>
        <Routes>
          <Route path="catalog" element={<CatalogView handler={product => handlerAddProductCart(product)} />} />
          <Route path="cart" element={(

            cartItems?.length <= 0 ?

            <div className="alert alert-warning">No hay producto en el carrito de compras</div>:
            
            (
              <div className="my-4 w-50">
                <CartView items={cartItems} handlerDelete={handlerDeleteProductCart} />
              </div>
            )

          )} />

          <Route path="/" element={<Navigate to={'/catalog'} />} />

        </Routes>



      </div>
    </>
  );

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
