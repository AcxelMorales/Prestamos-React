import React, { useState, Fragment } from "react";

import * as helpers from '../helpers/helpers';

const Formulario = ({ cantidad, setCantidad, plazo, setPlazo, total, setTotal, setLoading }) => {
  // State
  const [error, setError] = useState(false);

  const leerCantidad = evt => setCantidad(parseInt(evt.target.value));

  const leerPlazo = evt => setPlazo(parseInt(evt.target.value));

  const submit = evt => {
    evt.preventDefault();

    if (cantidad === 0 || plazo === "") {
      setError(true);
      return;
    }

    setError(false);
    setLoading(true);

    setTimeout(() => {
      const total = helpers.cacularTotal(cantidad, plazo);
      setTotal(total);
      setLoading(false);
    }, 3000);
  };

  return (
    <Fragment>
      <form onSubmit={submit}>
        <div className="row">
          <div>
            <label>Cantidad Prestamo</label>
            <input
              className="u-full-width"
              type="number"
              placeholder="Ejemplo: 3000"
              onChange={leerCantidad}
            />
          </div>
          <div>
            <label>Plazo para Pagar</label>
            <select className="u-full-width" onChange={leerPlazo}>
              <option value="">Seleccionar</option>
              <option value="3">3 meses</option>
              <option value="6">6 meses</option>
              <option value="12">12 meses</option>
              <option value="24">24 meses</option>
            </select>
          </div>
          <div>
            <input
              type="submit"
              value="Calcular"
              className="button-primary u-full-width"
            />
          </div>
        </div>
      </form>

      {error ? <p className="error">Todos los campos son obligatorios</p> : null}
    </Fragment>
  );
};

export default Formulario;
