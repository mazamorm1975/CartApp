
import { CartView } from "./Components/CartView";
import { CatalogView } from "./Components/CatalogView";
import { Navbar } from "./Components/Navbar";
import { useItemCart } from "./hooks/useItemCart";
import { CartRoutes } from "./routes/CartRoutes";

//De la linea 7 - 16 se usa como test la opcion Fetch de jsonplaceholder para testeo de una API's devolviendo un json
const httpClient = fetch('https://jsonplaceholder.typicode.com/users');

httpClient.then(response => {

  response.json().then(data => {

    console.log(data);
  });

});

export const CartApp = () => {

  const { cartItems, handlerAddProductCart, handlerDeleteProductCart } = useItemCart();

  return (
    <>
      <Navbar/>
      <div className="container my-4">
        <h1>Cart App</h1>

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
