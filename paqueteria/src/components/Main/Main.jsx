import React, { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from '../Home/Home'
import Navigation from '../Navigation/Navigation';
import { Paquetes } from '../Paquetes/Paquetes'
import { Pedidos } from '../Pedidos/Pedidos'

export const Main = () => {

    const [paquetes, setPaquetes] = useState([])

    return (
        <>
            <Navigation />
            <div className='container mt-5'>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/paquetes" element={<Paquetes paquetes={paquetes} setPaquetes={setPaquetes} />} />
                    <Route path="/pedidos" element={<Pedidos />} />
                    <Route
                        path="*"
                        element={<Navigate to="/" replace />}
                    />
                </Routes>
            </div>
        </>
    )
}
