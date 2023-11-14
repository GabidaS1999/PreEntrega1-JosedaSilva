import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CarWidget from '../CarWidget/CarWidget'

function NavBar() {
  return (
    <>
      <Navbar className='NavBar' bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"><img src="./Multimedia/Logo.png" alt="Logo" width={48}  /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" className='text-nav'>Menú</Nav.Link>
            <Nav.Link href="#features" className='text-nav'>Cupones</Nav.Link>
            <Nav.Link href="#pricing">  <CarWidget/>  </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
      );
}

export default NavBar;