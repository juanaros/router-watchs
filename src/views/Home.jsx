import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const Home = () => {
    return (
        <Container className='text-center mt-5'>
            <h1>Hola socio</h1>
            <h2>Encuentra aquí tu próximo reloj</h2>
            <img src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-diver-300m-co-axial-master-chronometer-43-5-mm-21092442001003-1-product-zoom.png" alt="Omega Seamaster" className='w-25'/>
        </Container>
    )
}

export default Home;