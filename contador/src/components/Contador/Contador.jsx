import React, { useEffect, useState } from 'react'
import './Contador.css'

export const Contador = ({ contador, setContador }) => {
    
    const [estado, setEstado] = useState(true)

    useEffect(() => {
        console.log(estado)
        document.title = `Estado: ${estado}`
    }, [estado])


    const decrementar = () => {
        setContador(contador - 1)
    }

    const incrementar = () => {
        setContador(contador + 1)
    }

    const toggle = () => {
        setEstado(!estado)
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', gap: '30px' }}>
            <div className='contador-container'>
                <button className='contador-btn' onClick={decrementar}>
                    -
                </button>
                <span className='contador-span'>
                    {contador}
                </span>
                <button className='contador-btn' onClick={incrementar}>
                    +
                </button>
            </div>
            <button onClick={toggle} 
            style={ estado ? { backgroundColor: 'lightblue' } : { backgroundColor: 'lightcoral' } }>
                Estado: {String(estado)}
            </button>
        </div>
    )
}
