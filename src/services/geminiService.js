// El frontend NO habla directo con Gemini: llama a nuestro backend,
// y el backend usa la GEMINI_API_KEY. Así la clave nunca queda expuesta.

const API_URL = import.meta.env.VITE_API_URL;

export async function sugerirCategoria(descripcion) {
  if (!API_URL) {
    // Respuesta de ejemplo para el esqueleto
    return { categoria: "Plomería", ejemplo: true };
  }
  const respuesta = await fetch(`${API_URL}/ia/sugerir-categoria`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ descripcion }),
  });
  if (!respuesta.ok) throw new Error("No se pudo consultar la IA");
  return respuesta.json();
}
