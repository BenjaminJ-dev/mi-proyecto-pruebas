import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import useContador from '../hooks/useContador';

function Contador() {
  const { contador, incrementar, reiniciar } = useContador(0);

  return (
    <Card className="text-center shadow-sm">
      <Card.Body>
        <h2 className="h4">Contador: {contador}</h2>
        <Button variant="primary" className="me-2" onClick={incrementar}>
          Incrementar
        </Button>
        <Button variant="outline-secondary" onClick={reiniciar}>
          Reiniciar
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Contador;
