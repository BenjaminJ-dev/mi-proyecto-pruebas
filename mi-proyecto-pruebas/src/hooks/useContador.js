import { useState } from 'react';

// Hook personalizado: encapsula la lógica de un contador
function useContador(valorInicial = 0) {
  const [contador, setContador] = useState(valorInicial);

  const incrementar = () => setContador((valor) => valor + 1);
  const decrementar = () => setContador((valor) => valor - 1);
  const reiniciar = () => setContador(valorInicial);

  return { contador, incrementar, decrementar, reiniciar };
}

export default useContador;