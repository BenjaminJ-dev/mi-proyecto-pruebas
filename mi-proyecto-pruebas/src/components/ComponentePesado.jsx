import ListGroup from 'react-bootstrap/ListGroup';

// Renderiza muchos elementos para medir tiempos de renderizado
function ComponentePesado({ cantidad = 200 }) {
  const elementos = Array.from({ length: cantidad }, (_, i) => `Elemento ${i + 1}`);

  return (
    <ListGroup style={{ maxHeight: '250px', overflowY: 'auto' }}>
      {elementos.map((texto) => (
        <ListGroup.Item key={texto}>{texto}</ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default ComponentePesado;