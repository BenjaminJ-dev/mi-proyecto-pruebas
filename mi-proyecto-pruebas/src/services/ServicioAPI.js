import { fetchDatos } from './api';

// Servicio que agrupa las llamadas a la API
const ServicioAPI = {
  getData: () => fetchDatos(),
};

export default ServicioAPI;