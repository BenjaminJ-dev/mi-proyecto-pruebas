import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import MiComponente from './components/MiComponente';
import Contador from './components/Contador';
import Formulario from './components/Formulario';
import ComponentePesado from './components/ComponentePesado';
import Login from './components/Login';
import Input from './components/Input';
import OptimizedApp from './components/OptimizedApp';
import ServicioAPI from './services/ServicioAPI';

function App() {
  const [enviado, setEnviado] = useState(null);
  const [usuario, setUsuario] = useState(null);
  const [error, setError] = useState('');

  const cargarDatos = async () => {
    try {
      setError('');
      setUsuario(await ServicioAPI.getData());
    } catch {
      setError('No fue posible obtener los datos');
    }
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" className="mb-4">
        <Container>
          <Navbar.Brand>Pruebas unitarias con Vitest</Navbar.Brand>
        </Container>
      </Navbar>

      <Container>
        <h1 className="h3 mb-4">Componentes del proyecto</h1>
        <Row className="g-4">
          <Col md={6}><MiComponente /></Col>
          <Col md={6}><Contador /></Col>
          <Col md={6}>
            <Card className="shadow-sm">
              <Card.Body>
                <h2 className="h5">Formulario</h2>
                <Formulario onSubmit={setEnviado} />
                {enviado && (
                  <Alert variant="success" className="mt-3">
                    Enviado: {enviado.nombre} ({enviado.email})
                  </Alert>
                )}
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="shadow-sm">
              <Card.Body>
                <h2 className="h5">ServicioAPI</h2>
                <Button onClick={cargarDatos}>Cargar datos</Button>
                {usuario && <p className="mt-3 mb-0">Usuario: {usuario.name}</p>}
                {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="shadow-sm">
              <Card.Body>
                <h2 className="h5">Inicio de sesión</h2>
                <Login />
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="shadow-sm">
              <Card.Body>
                <h2 className="h5">Input seguro</h2>
                <Input />
                <div className="mt-3"><OptimizedApp /></div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={12}>
            <Card className="shadow-sm mb-4">
              <Card.Body>
                <h2 className="h5">Componente pesado</h2>
                <ComponentePesado />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;