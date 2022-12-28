import React, { useEffect, useState } from 'react'
import { Banner } from '../Banner/Banner'
import { Contador } from '../Contador/Contador'
import './Main.css'

export const Main = () => {

  const [contador, setContador] = useState(0)

  useEffect(() => {
    console.log(contador)
    if (contador % 2 === 0) {
        document.body.style = 'background-color: skyblue'
    } else {
        document.body.style = 'background-color: lightgreen'
    }
}, [contador])

  return (
    <div className='main-container'>
        <Banner contador={contador}  />
        <Contador contador={contador} setContador={setContador} />
    </div>
  )
}
