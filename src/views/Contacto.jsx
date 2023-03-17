import { Container } from "react-bootstrap";
import TextControlsExample from "../components/Contacto";

const ContactoView = () => {
  return (
    <Container className="pt-5">
      <h1 className="mb-4">Cuéntanos, ¿en qué te podemos ayudar?</h1>
      <TextControlsExample/>
    </Container>
  );
};
export default ContactoView;
