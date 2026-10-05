import { test, expect, vi } from 'vitest';
import axios from 'axios';
import { fetchDatos } from './api';

vi.mock('axios');   // siempre en el nivel superior del archivo

test('obtiene datos exitosamente', async () => {
  const datos = { id: 1, nombre: 'Test' };
  axios.get.mockResolvedValue({ data: datos });
  const result = await fetchDatos();
  expect(result).toEqual(datos);
});
