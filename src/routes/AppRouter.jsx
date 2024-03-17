import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Contacto } from "../pages/Contacto";
import { Obras }  from "../pages/Obras";
import Canaletas from "../pages/servicios/Canaletas";
import Chapas from "../pages/servicios/Chapas";
import Claraboyas from "../pages/servicios/Claraboyas";
import Pedido from "../pages/servicios/Pedido";
import Error from "../components/Error"
import Extraccion from "../pages/servicios/Extraccion";
import Bandas from "../pages/servicios/Bandas";


export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/obras-realizadas" element={<Obras />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/servicios/canaletas" element={<Canaletas />} />
        <Route path="/servicios/chapas" element={<Chapas />} />
        <Route path="/servicios/claraboyas" element={<Claraboyas />} />
        <Route path="/servicios/extraccion" element={<Extraccion />} />
        <Route path="/servicios/pedido" element={<Pedido />} />
        <Route path="/servicios/bandas" element={<Bandas />} />
        <Route path="/*" element={<Error/>} />
      </Routes>
    </>
  );
};
