import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Detalle from "./pages/Detalle.jsx";
import Configuracion from "./pages/Configuracion.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="contenedor">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/solicitud/:id" element={<Detalle />} />
          <Route path="/configuracion" element={<Configuracion />} />
        </Routes>
      </main>
    </>
  );
}
