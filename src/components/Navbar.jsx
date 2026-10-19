import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      <strong>GeoServi-App</strong>
      <nav>
        <NavLink to="/" end>Solicitudes</NavLink>
        <NavLink to="/configuracion">Configuración</NavLink>
      </nav>
    </header>
  );
}
