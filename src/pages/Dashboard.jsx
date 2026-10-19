import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getSolicitudes } from "../services/api.js";

export default function Dashboard() {
  const [solicitudes, setSolicitudes] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getSolicitudes().then(setSolicitudes).catch((e) => setError(e.message));
  }, []);

  return (
    <section>
      <h1>Solicitudes cercanas</h1>
      {error && <p className="error">{error}</p>}
      <div className="lista">
        {solicitudes.map((s) => (
          <Link key={s.id} to={`/solicitud/${s.id}`} className="tarjeta">
            <h3>{s.titulo}</h3>
            <p>{s.categoria} · {s.distanciaKm} km</p>
            <small>{s.estado}</small>
          </Link>
        ))}
      </div>
    </section>
  );
}
