import { test, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ServicioAPI from './services/ServicioAPI';
import App from './App';

vi.mock('./services/ServicioAPI');   // reemplaza el servicio real por uno falso

test('muestra el usuario que entrega ServicioAPI', async () => {
  ServicioAPI.getData.mockResolvedValue({ name: 'Ana' });   // respuesta inventada

  render(<App />);
  fireEvent.click(screen.getByText('Cargar datos'));

  expect(await screen.findByText('Usuario: Ana')).toBeInTheDocument();
  expect(ServicioAPI.getData).toHaveBeenCalledTimes(1);
});