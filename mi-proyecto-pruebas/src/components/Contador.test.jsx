import { test, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Contador from './Contador';

test('incrementa el contador cuando se hace clic', () => {
  render(<Contador />);
  const boton = screen.getByText('Incrementar');
  fireEvent.click(boton);
  expect(screen.getByText('Contador: 1')).toBeInTheDocument();
});
