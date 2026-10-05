import Card from 'react-bootstrap/Card';

function MiComponente() {
  return (
    <Card className="text-center shadow-sm">
      <Card.Body>
        <h2 className="h4">Hola Mundo</h2>
        <Card.Text>Texto esperado</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MiComponente;