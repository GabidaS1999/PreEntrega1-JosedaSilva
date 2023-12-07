import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CarWidget from '../CarWidget/CarWidget'
import { Link } from 'react-router-dom';


function NavBar() {
  return (
    <>
      <Navbar className='NavBar contenedor-nav' bg="primary" data-bs-theme="dark">
        <Container className='contenedor-nav'>
          <Navbar.Brand className='contenedor-nav' > </Navbar.Brand>
          <Nav className="me-auto navegador">
            <Link to="/"><img src="/Multimedia/Logo.png" alt="Logo" width={48}  /> </Link>
            <Link to="/categoria/hamburguesas" className='text-nav'>Hamburguesas</Link>
            <Link to="/categoria/papas" className='text-nav'>Papas</Link>
            <Link to="/cart">  <CarWidget/>  </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
      );
}

export default NavBar;