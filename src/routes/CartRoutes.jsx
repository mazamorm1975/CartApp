import { Navigate, Route, Routes } from "react-router-dom"
import { CatalogView } from "../Components/CatalogView"
import { CartView } from "../Components/CartView"

export const CartRoutes = ({  cartItems, handlerAddProductCart, handlerDeleteProductCart}) => {
    return (
        
        <Routes>

          <Route path="catalog"
            element={<CatalogView handler={product => handlerAddProductCart(product)} />} />

          <Route path="cart" element={(
            cartItems?.length <= 0 ?
              <div className="alert alert-warning">No hay elementos para mostrar</div> :
              (
                <div className="my-4 w-50">
                  <CartView items={cartItems} handlerDelete={handlerDeleteProductCart} />
                </div>
              )
          )} />

          <Route path="/" element={<Navigate to={'/catalog'} />} />

        </Routes>

    )
}