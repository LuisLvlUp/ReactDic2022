import React, { useState } from 'react'
import './Contador.css'

export const Contador = () => {

    // let contador = 10
    const [contador, setContador] = useState(0)

    const decrementar = () => {
        setContador( contador - 1 )
        console.log(contador)
    }

    const incrementar = () => {
        setContador( contador + 1 )
        console.log(contador)
    }

    return (
        <div className='contador-container'>
            <button className='contador-btn' onClick={decrementar}>
                -
            </button>
            <span className='contador-span'>
                { contador }
            </span>
            <button className='contador-btn' onClick={incrementar}>
                +
            </button>
        </div>
    )
}
