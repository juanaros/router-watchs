import { Container } from "react-bootstrap";
import BasicExample from "../components/Precios";

const Precios = () => {
    return(
        <Container className="mt-5">
            <h1 className="mb-5">Precios de referencia año 2023</h1>
            <BasicExample />
        </Container>
    )
}

export default Precios;