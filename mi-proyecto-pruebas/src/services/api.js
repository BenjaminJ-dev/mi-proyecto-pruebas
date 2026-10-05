import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

// Obtiene un usuario desde una API externa usando axios (guía 2.3.2)
export async function fetchDatos() {
  const respuesta = await axios.get(`${API_URL}/1`);
  return respuesta.data;
}

// Obtiene la lista de usuarios (guía 2.3.3)
export async function fetchData() {
  const respuesta = await axios.get(API_URL);
  return respuesta.data;
}
