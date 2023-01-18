import React, { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from '../Home/Home'
import Navigation from '../Navigation/Navigation';
import { Paquetes } from '../Paquetes/Paquetes'
import { Pedidos } from '../Pedidos/Pedidos'
import { UseCallback } from '../UseCallback/UseCallback';
import { UseMemo } from '../UseMemo/UseMemo';

export const Main = () => {

    const [paquetes, setPaquetes] = useState([])
    

    return (
        <>
            <Navigation />
            <div className='container mt-5'>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/paquetes" element={<Paquetes paquetes={paquetes} setPaquetes={setPaquetes} />} />
                    <Route path="/pedidos" element={<Pedidos paquetes={paquetes}/>} />
                    <Route path="/usememo" element={<UseMemo/>} />
                    <Route path="/usecallback" element={<UseCallback/>} />
                    <Route
                        path="*"
                        element={<Navigate to="/" replace />}
                    />
                </Routes>
            </div>
        </>
    )
}
