import { Navbar } from "./Components/Navbar";
import {useItemCart} from "./hooks/useItemCart"
import { CartRoutes } from "./routes/CartRoutes";

//De la linea 7 - 16 se usa como test la opcion Fetch de jsonplaceholder para testeo de una API's devolviendo un json
const httpClient = fetch('https://jsonplaceholder.typicode.com/users');

httpClient.then(response => {

  response.json().then(data => {

    console.log(data);
  });

});



export const CartApp = () => {

    const { cartItems, handlerAddProductCart, handlerDeleteProductCart} = useItemCart();
    
    return (
        <>
            <Navbar />
            <div className="container my-4">

                <h3>Cart App</h3>
                <CartRoutes
                    cartItems={cartItems}
                    handlerAddProductCart={handlerAddProductCart}
                    handlerDeleteProductCart={handlerDeleteProductCart}
                />
            </div>
        </>
    )
}

