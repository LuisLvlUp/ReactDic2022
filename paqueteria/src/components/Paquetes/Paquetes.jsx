import React from 'react'
import { Formulario } from './Formulario'
import { Tabla } from './Tabla'

export const Paquetes = ({ paquetes, setPaquetes }) => {
  return (
    <div className="container">
      <div className="card mb-5">
        <h5 className="card-header">
          Nuevo Paquete
        </h5>
        <div className="card-body p-3">
          <Formulario setPaquetes={setPaquetes} paquetes={paquetes} />
        </div>
      </div>
      <Tabla paquetes={paquetes} />
    </div>
  )
}
