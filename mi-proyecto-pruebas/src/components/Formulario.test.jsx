import { test, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Formulario from './Formulario';

test('llama a onSubmit cuando se envía el formulario', () => {
  const onSubmit = vi.fn();
  render(<Formulario onSubmit={onSubmit} />);
  fireEvent.click(screen.getByText('Enviar'));
  expect(onSubmit).toHaveBeenCalled();
});
