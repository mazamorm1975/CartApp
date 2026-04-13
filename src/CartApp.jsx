import { Navbar } from "./Components/Navbar";
import { useItemCart } from "./hooks/useItemCart"
import { CartRoutes } from "./routes/CartRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CartApp = () => {

    const { cartItems, handlerAddProductCart, handlerDeleteProductCart } = useItemCart();

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
            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={true}
            />
        </>
    )
}

