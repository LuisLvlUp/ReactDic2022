import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'

export const Tabla = ({ paquetes }) => {

    const [show, setShow] = useState(false);
    const [paqueteActual, setPaqueteActual] = useState('')

    const handleClose = () => setShow(false);
    const handleShow = (paquete) => {
        setShow(true);
        setPaqueteActual(paquete)
    }

    return (
        <>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Peso</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        paquetes.map((paquete) => {
                            return (
                                <tr key={paquete.id}>
                                    <th scope="row">{paquete.id}</th>
                                    <td>{paquete.nombre}</td>
                                    <td>{paquete.peso}</td>
                                    <td>
                                        <Button variant="primary" onClick={() => handleShow(paquete)}>
                                            <FontAwesomeIcon icon={faImage} />
                                        </Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <Image src={paqueteActual != '' && paqueteActual.imagen} fluid={true}>
                    </Image>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    )
}
