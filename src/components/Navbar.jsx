import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const Barra = () => {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand><i class="fa-regular fa-clock"></i> Watch Dealer</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" className="text-white ms-3 text-decoration-none">Inicio</Link>
            <Link to="/contacto" className="text-white ms-3 text-decoration-none">Contacto</Link>
            <Link to="/precios" className="text-white ms-3 text-decoration-none">Precios</Link>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default Barra;