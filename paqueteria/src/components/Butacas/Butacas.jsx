import React, { useEffect, useState } from 'react'
import './Butacas.css'

export const Butacas = ({ seleccionados, setSeleccionados, bloqueados, setBloqueados }) => {

    let filas = [...Array(5)]
    let columnas = [...Array(10)]

    useEffect(() => {
        console.log('BLOQUEDOS')
        console.log(bloqueados)
    }, [bloqueados])


    const seleccionar = (butacaID) => {

        let isBlocked = bloqueados.includes(butacaID)
        if (!isBlocked) {
            let isSelected = seleccionados.includes(butacaID)
            if (isSelected) {
                setSeleccionados(seleccionados.filter((item) => item !== butacaID))
            } else {
                setSeleccionados([...seleccionados, butacaID])
            }
        }
    }

    const getTipoButaca = (butacaID) => {

        let isSelected = seleccionados.includes(butacaID)
        let isBlocked = bloqueados.includes(butacaID)
        if (isSelected) {
            return 'seleccionado'
        } else if (isBlocked) {
            return 'bloqueado'
        } else {
            return ''
        }
    }

    const reservar = () => {

        setBloqueados([...bloqueados, ...seleccionados])
        setSeleccionados([])

        alert('Butacas reservadas correctamente: ' + seleccionados)
    }

    return (
        <div className='row justify-content-center'>
            {
                filas.map((fila, index1) => (
                    <div key={index1} className='row gap-2'>
                        {
                            columnas.map((col, index2) =>
                                <div className={`col mt-2 butaca ${getTipoButaca(`${index1}${index2}`)}`}
                                    key={index2}
                                    onClick={() => seleccionar(`${index1}${index2}`)}
                                >
                                    {`${index1}, ${index2}`}
                                </div>
                            )
                        }
                    </div>
                ))
            }
            <div className='btn btn-primary mt-5 col-4'
                onClick={reservar}>
                Reservar
            </div>
        </div>
    )
}
