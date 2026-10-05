import { test, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import useContador from './useContador';

test('debería incrementar el contador', () => {
  const { result } = renderHook(() => useContador());
  act(() => {
    result.current.incrementar();
  });
  expect(result.current.contador).toBe(1);
});
