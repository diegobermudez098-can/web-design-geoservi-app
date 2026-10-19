// Datos de ejemplo para que el esqueleto funcione sin backend.
// Cuando VITE_API_URL esté definida, se usan los datos reales de la API.

export const usuarios = [
  { id: 1, nombre: "Laura Gómez", correo: "laura@ejemplo.com", rol: "CLIENTE" },
  { id: 2, nombre: "Carlos Ruiz", correo: "carlos@ejemplo.com", rol: "PRESTADOR" },
  { id: 3, nombre: "Ana Torres", correo: "ana@ejemplo.com", rol: "PRESTADOR" },
];

export const prestadores = [
  { id: 1, usuarioId: 2, oficio: "Plomería", estado: "Disponible" },
  { id: 2, usuarioId: 3, oficio: "Electricidad", estado: "En servicio" },
];

export const solicitudes = [
  {
    id: 1,
    clienteId: 1,
    titulo: "Fuga de agua en el baño",
    categoria: "Plomería",
    descripcion: "Se está filtrando agua por debajo del lavamanos.",
    direccion: "Belén, Medellín",
    distanciaKm: 1.2,
    estado: "Abierta",
  },
  {
    id: 2,
    clienteId: 1,
    titulo: "Cambio de tomacorrientes",
    categoria: "Electricidad",
    descripcion: "Necesito cambiar tres tomacorrientes en la sala.",
    direccion: "Laureles, Medellín",
    distanciaKm: 3.4,
    estado: "Abierta",
  },
];

export const ofertas = [
  { id: 1, solicitudId: 1, prestadorId: 1, precio: 80000, estado: "Pendiente" },
  { id: 2, solicitudId: 2, prestadorId: 2, precio: 120000, estado: "Pendiente" },
];
