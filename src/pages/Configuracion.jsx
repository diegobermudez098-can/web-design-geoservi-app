import { useState } from "react";
import { sugerirCategoria } from "../services/geminiService.js";

export default function Configuracion() {
  const [texto, setTexto] = useState("");
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState("");

  async function probar() {
    setError("");
    try {
      setResultado(await sugerirCategoria(texto));
    } catch (e) {
      setError(e.message);
    }
  }

  return (
    <section>
      <h1>Configuración y herramientas TIC</h1>

      <div className="tarjeta">
        <h3>Gemini API</h3>
        <p>Prueba la sugerencia de categoría para una solicitud.</p>
        <textarea
          rows="3"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Describe el problema, por ejemplo: se me dañó el tomacorriente"
        />
        <button onClick={probar}>Sugerir categoría</button>
        {resultado && <p>Categoría sugerida: <strong>{resultado.categoria}</strong></p>}
        {error && <p className="error">{error}</p>}
      </div>

      <div className="tarjeta">
        <h3>Google Stitch</h3>
        <p>Se usa para diseñar las 3 vistas. El enlace está en el README.</p>
      </div>

      <div className="tarjeta">
        <h3>GitHub Actions</h3>
        <p>Compila el proyecto en cada Pull Request y despliega al hacer merge a main.</p>
      </div>
    </section>
  );
}
