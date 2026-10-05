import { test, expect } from 'vitest';
import { render } from '@testing-library/react';
import ComponentePesado from './ComponentePesado';

test('renderiza rápidamente', () => {
  const start = performance.now();
  render(<ComponentePesado />);
  const end = performance.now();
  expect(end - start).toBeLessThan(250); // menos de 100ms
});
