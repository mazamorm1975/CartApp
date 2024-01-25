export const CartApp = () => {
  return (
    <>
      <div className="container">
        <h1>Cart App</h1>
        <div className="row">
          <div className="col-4 my-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Teclado Mecanico RGB</h5>
                <p className="card-text">
                  Teclado Mecanico con luces RGB switches cherry red
                </p>
                <p className="card-text">$ 5,000.45</p>
                <button className="btn btn-primary">Agregar</button>
              </div>
            </div>
          </div>

          <div className="col-4 my-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Samsung Smart TV</h5>
                <p className="card-text">Forma Hergonomica para LapTop</p>
                <p className="card-text">$ 16,000.85</p>
                <button className="btn btn-primary">Agregar</button>
              </div>
            </div>
          </div>
          <div className="col-4 my-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Audifono Bluetooth Sony</h5>
                <p className="card-text">Sincronización via Wi-Fi</p>
                <p className="card-text">$ 800.42</p>
                <button className="btn btn-primary">Agregar</button>
              </div>
            </div>
          </div>
          <div className="col-4 my-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Memoria Corsair 8GB DDR5</h5>
                <p className="card-text">Expansion a 32GB</p>
                <p className="card-text">$ 169.78</p>
                <button className="btn btn-primary">Agregar</button>
              </div>
            </div>
          </div>
          <div className="col-4 my-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Asus Nvidia RTX</h5>
                <p className="card-text">Activado por voz inteligente</p>
                <p className="card-text">$ 1,200.00</p>
                <button className="btn btn-primary">Agregar</button>
              </div>
            </div>
          </div>
          <div className="col-4 my-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">CPU Intel Core i5</h5>
                <p className="card-text">7ma. Generación</p>
                <p className="card-text">$ 40,000.95</p>
                <button className="btn btn-primary">Agregar</button>
              </div>
            </div>
          </div>
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
              <td colSpan="3"className="text text-end fw-bold">Total</td>
              <td colSpan="2" className="text text-start fw-bold">12345</td>
              </tr>
            </tfoot>
          </table>
        </div>

      </div>
    </>
  );
};
