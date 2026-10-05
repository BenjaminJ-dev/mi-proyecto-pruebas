import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

function Login() {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [autenticado, setAutenticado] = useState(false);
  const [error, setError] = useState('');

  const iniciarSesion = (evento) => {
    evento.preventDefault();
    if (usuario.trim() && contrasena.trim()) {
      setError('');
      setAutenticado(true);
    } else {
      setError('Debes ingresar usuario y contraseña');
    }
  };

  if (autenticado) {
    return (
      <Alert variant="success">
        <strong>Bienvenido</strong>, {usuario}
      </Alert>
    );
  }

  return (
    <Form onSubmit={iniciarSesion}>
      <Form.Group className="mb-3" controlId="usuario">
        <Form.Label>Usuario</Form.Label>
        <Form.Control
          type="text"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="contrasena">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          type="password"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
        />
      </Form.Group>
      {error && <Alert variant="danger">{error}</Alert>}
      <Button variant="primary" type="submit">
        Iniciar sesión
      </Button>
    </Form>
  );
}

export default Login;