import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getSolicitud, getOfertas } from "../services/api.js";

export default function Detalle() {
  const { id } = useParams();
  const [solicitud, setSolicitud] = useState(null);
  const [ofertas, setOfertas] = useState([]);

  useEffect(() => {
    getSolicitud(id).then(setSolicitud);
    getOfertas(id).then(setOfertas);
  }, [id]);

  if (!solicitud) return <p>Cargando...</p>;

  return (
    <section>
      <Link to="/">← Volver</Link>
      <h1>{solicitud.titulo}</h1>
      <p>{solicitud.descripcion}</p>
      <p><strong>Dirección:</strong> {solicitud.direccion}</p>

      <h2>Ofertas recibidas</h2>
      {ofertas.length === 0 && <p>Todavía no hay ofertas.</p>}
      {ofertas.map((o) => (
        <div key={o.id} className="tarjeta">
          <p>Prestador #{o.prestadorId}</p>
          <p>${o.precio.toLocaleString("es-CO")} · {o.estado}</p>
        </div>
      ))}
    </section>
  );
}
