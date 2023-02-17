import React, { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import { API_URL } from '../../services/API_URL';
import { Butacas } from '../Butacas/Butacas';
import { Home } from '../Home/Home'
import Navigation from '../Navigation/Navigation';
import { Paquetes } from '../Paquetes/Paquetes'
import { Pedidos } from '../Pedidos/Pedidos'
import { TodoList } from '../TodoList/Todos';
import { UseCallback } from '../UseCallback/UseCallback';
import { UseMemo } from '../UseMemo/UseMemo';

export const Main = () => {

    const [paquetes, setPaquetes] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (loading) {
            // fetch(`${API_URL}/paquetes`)
            //     .then(res => res.json())
            //     .then(data => {
            //         setPaquetes(data)
            //         setLoading(false)
            //     })
            //     .catch(error => console.error('Error:', error));
        }
    }, [loading])


    return (
        <>
            <Navigation />
            <div className='container mt-5'>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/paquetes" element={
                        <Paquetes
                            paquetes={paquetes}
                            setPaquetes={setPaquetes}
                            loading={loading}
                            setLoading={setLoading}
                        />}
                    />
                    <Route path="/pedidos" element={<Pedidos paquetes={paquetes} />} />
                    <Route path="/usememo" element={<UseMemo />} />
                    <Route path="/usecallback" element={<UseCallback />} />
                    <Route path="/todo-list" element={<TodoList />} />
                    <Route path="/butacas" element={<Butacas />} />
                    <Route
                        path="*"
                        element={<Navigate to="/" replace />}
                    />
                </Routes>
            </div>
        </>
    )
}
