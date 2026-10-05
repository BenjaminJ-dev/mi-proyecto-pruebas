import { describe, it, expect, vi, beforeEach } from 'vitest';

describe('ServicioAPI', () => {
  let servicioAPI;

  beforeEach(() => {
    servicioAPI = {
      getData: vi.fn().mockResolvedValue({ data: 'test' }),
    };
  });

  it('debería llamar a getData', async () => {
    await servicioAPI.getData();
    expect(servicioAPI.getData).toHaveBeenCalled();
  });
});
