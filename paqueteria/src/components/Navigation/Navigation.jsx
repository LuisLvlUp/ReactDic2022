import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto mb-2 mb-lg-0 gap-3">
                        <NavLink to="/" className='nav-link'>
                            Home
                        </NavLink>
                        <NavLink to="/pedidos" className='nav-link'>
                            Pedidos
                        </NavLink>
                        <NavLink to="/paquetes" className='nav-link'>
                            Paquetes
                        </NavLink>
                        <NavLink to="/usememo" className='nav-link'>
                            UseMemo
                        </NavLink>
                        <NavLink to="/usecallback" className='nav-link'>
                            UseCallback
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;