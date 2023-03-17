import Barra from "./components/Navbar";
import Home from "./views/Home";
import Precios from "./views/Precios"
import NotFound from "./views/NotFound";
import ContactoView from "./views/Contacto";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Barra />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<ContactoView />} />
          <Route path="/precios" element={<Precios />} />
          <Route path="*" element={<NotFound/>} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
