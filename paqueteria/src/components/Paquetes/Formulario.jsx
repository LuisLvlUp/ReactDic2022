import React from 'react'

export const Formulario = ({ paquetes, setPaquetes }) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.nombre.value);
        console.log(event.target.peso.value);

        let paquete = {
            id: paquetes.length == 0 ? 1 : paquetes[paquetes.length - 1 ].id + 1,
            nombre: event.target.nombre.value,
            peso: event.target.peso.value
        }
    
        setPaquetes( [ ...paquetes, paquete ] )
    }

    return (
        <form onSubmit={handleSubmit}>
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
