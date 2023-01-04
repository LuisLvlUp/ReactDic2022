import React from 'react'

export const Tabla = ({ paquetes }) => {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Peso</th>
                </tr>
            </thead>
            <tbody>
                {
                    paquetes.map((paquete) => {
                        return (
                            <tr key={paquete.id}>
                                <th scope="row">{paquete.id}</th>
                                <td>{paquete.nombre}</td>
                                <td>{paquete.peso}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}
