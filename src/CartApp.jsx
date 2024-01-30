import { useEffect, useState } from "react";
import { getProducts } from "./service/serviceProducts";

export const CartApp = () => {
  // eslint-disable-next-line no-unused-vars
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getProducts());
  }, []);

  return (
    <>
      <div className="container">
        <h1>Cart App</h1>
        <div className="row">
          {products.map((prod) => (
            <div className="col-4 my-2" key={prod.id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{prod.name}</h5>
                  <p className="card-text">{prod.description}</p>
                  <p className="card-text">{prod.price}</p>
                  <button className="btn btn-primary">Agregar</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="my-4 w-50">
          <h3>Carro De Compras</h3>
          <table className="table table-hover table-striped">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Total</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>nombre</td>
                <td>precio</td>
                <td>cantidad</td>
                <td>total</td>
                <td>eliminar</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="3" className="text text-end fw-bold">
                  Total
                </td>
                <td colSpan="2" className="text text-start fw-bold">
                  12345
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </>
  );
};
