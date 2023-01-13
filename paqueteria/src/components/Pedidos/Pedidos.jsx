import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

export const Pedidos = ({ paquetes }) => {

  const [detalle, setDetalle] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault();

    let paquete = {
      paqueteID: event.target.paquete.value,
      cantidad: event.target.cantidad.value
    }

    setDetalle([...detalle, paquete])
  }

  useEffect(() => {
    console.log(detalle)
  }, [detalle])
  

  return (
    <div className="card">
      <h5 className="card-header">
        Nuevo Pedido
      </h5>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="row mt-3 mx-3">
            <div className="col-6">
              <div className="form-group">
                <label htmlFor="paquete">Paquete</label>
                <select id="paquete" name="paquete" className="form-select mt-2">
                  {
                    paquetes.map((paquete) => (
                      <option key={paquete.id} value={paquete.id}>
                        {paquete.nombre} ( {paquete.peso} lb )
                      </option>
                    ))
                  }

                </select>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label htmlFor="cantidad">Cantidad</label>
                <input type="number" className="form-control mt-2" id="cantidad" name='cantidad' placeholder="Cantidad..." />
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="row justify-content-center">
            <div className="col-3">
              <button type="submit" className="btn btn-primary w-100 my-3">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
