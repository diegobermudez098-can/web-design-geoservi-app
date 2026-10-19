import { usuarios, prestadores, solicitudes, ofertas } from "./mockData.js";

const API_URL = import.meta.env.VITE_API_URL;

async function pedir(ruta) {
  const respuesta = await fetch(`${API_URL}${ruta}`);
  if (!respuesta.ok) throw new Error(`Error ${respuesta.status} en ${ruta}`);
  return respuesta.json();
}

// Los 4 recursos de la API: usuarios, prestadores, solicitudes y ofertas.

export async function getUsuarios() {
  return API_URL ? pedir("/usuarios") : usuarios;
}

export async function getPrestadores() {
  return API_URL ? pedir("/prestadores") : prestadores;
}

export async function getSolicitudes() {
  return API_URL ? pedir("/solicitudes") : solicitudes;
}

export async function getSolicitud(id) {
  if (API_URL) return pedir(`/solicitudes/${id}`);
  return solicitudes.find((s) => s.id === Number(id));
}

export async function getOfertas(solicitudId) {
  if (API_URL) return pedir(`/solicitudes/${solicitudId}/ofertas`);
  return ofertas.filter((o) => o.solicitudId === Number(solicitudId));
}
