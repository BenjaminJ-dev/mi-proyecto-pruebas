import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Formulario({ onSubmit = () => {} }) {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');

  const manejarEnvio = (evento) => {
    evento.preventDefault(); // evita que la página se recargue
    onSubmit({ nombre, email });
  };

  return (
    <Form onSubmit={manejarEnvio}>
      <Form.Group className="mb-3" controlId="nombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingresa tu nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Correo electrónico</Form.Label>
        <Form.Control
          type="email"
          placeholder="nombre@correo.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
      <Button variant="success" type="submit">
        Enviar
      </Button>
    </Form>
  );
}

export default Formulario;