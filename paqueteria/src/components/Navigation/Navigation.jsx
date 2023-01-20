import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import { ThemeContext } from '../../App';

const Navigation = () => {

    const [darkTheme, setDarkTheme] = useContext(ThemeContext);

    return (
        <Navbar collapseOnSelect expand="lg" bg={ darkTheme ? 'dark' : 'primary'} variant="dark">
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
                        <NavLink to="/todo-list" className='nav-link'>
                            Todo List
                        </NavLink>
                        <div className='nav-link' style={{width: '15px', height: '15px'}} 
                            onClick={() => setDarkTheme(!darkTheme)}
                        >
                            {
                                darkTheme ?
                                    <FontAwesomeIcon icon={faSun} />
                                    :
                                    <FontAwesomeIcon icon={faMoon} />
                            }
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;