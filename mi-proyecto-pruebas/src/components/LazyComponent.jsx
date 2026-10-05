import Alert from 'react-bootstrap/Alert';

// Componente que se cargará de forma diferida (lazy) en OptimizedApp
function LazyComponent() {
  return <Alert variant="info">Componente cargado de forma diferida (lazy)</Alert>;
}

export default LazyComponent;