import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Contacto } from "../pages/Contacto";
import { Obras } from "../pages/Obras";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/obras-realizadas" element={<Obras />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/*" element={<h1>Error</h1>} />
      </Routes>
    </>
  );
};
