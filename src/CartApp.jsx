import { CartView } from "./Components/CartView";
import { CatalogView } from "./Components/CatalogView";

export const CartApp = () => {
    return (
    <>
      <div className="container">
        <h1>Cart App</h1>
          <CatalogView/>
        <div className="my-4 w-50">
          <CartView/>
        </div>
      </div>
    </>
  );
};
