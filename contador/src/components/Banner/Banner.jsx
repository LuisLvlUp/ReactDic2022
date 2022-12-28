import React from 'react'
import './Banner.css'

export const Banner = (props) => {
  return (
    <div className='banner-container'>
        Contador: {props.contador}
    </div>
  )
}
