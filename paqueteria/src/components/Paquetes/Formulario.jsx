import { faL } from '@fortawesome/free-solid-svg-icons';
import React, { useRef } from 'react'
import { API_URL } from '../../services/API_URL';

export const Formulario = ({ paquetes, setPaquetes, setLoading }) => {

    const formRef = useRef(null)

    const handleSubmit = (event) => {
        event.preventDefault();

        let paquete = {
            nombre: event.target.nombre.value,
            peso: event.target.peso.value,
            img: event.target.image.value,
        }
        formRef.current.reset()
        // setPaquetes( [ ...paquetes, paquete ] )

        setLoading(true)
        fetch(`${API_URL}/paquetes`, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(paquete), // data can be `string` or {object}!
            headers:{
              'Content-Type': 'application/json'
            }
          }).then(res => res.json())
          .catch(error => console.error('Error:', error))
          .then(response => {
            console.log('Success:', response)
            setLoading(false)
        });

    }

    return (
        <form onSubmit={handleSubmit} ref={formRef}>
            <div className="row mt-3 mx-3">
                <div className="col-6">
                    <div className="form-group">
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" className="form-control mt-2" id="nombre" name='nombre' placeholder="Nombre..." />
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-group">
                        <label htmlFor="peso">Peso</label>
                        <input type="number" className="form-control mt-2" id="peso" name='peso'  placeholder="Peso.." />
                    </div>
                </div>
                <div className="col-12 mt-3">
                    <div className="form-group">
                        <label htmlFor="image">Imagen</label>
                        <input type="text" className="form-control mt-2" id="image" name='image'  placeholder="https://..." />
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className="row justify-content-center">
                <div className="col-3">
                    <button type="submit" className="btn btn-primary w-100 my-3">Submit</button>
                </div>
            </div>
        </form>
    )
}
