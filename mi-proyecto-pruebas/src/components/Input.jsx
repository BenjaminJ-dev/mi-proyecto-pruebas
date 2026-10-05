import { useState } from 'react';
import Form from 'react-bootstrap/Form';

// Campo de texto que muestra lo escrito como texto plano.
// React escapa el contenido, por lo que un <script> nunca se ejecuta (protección XSS).
function Input() {
  const [valor, setValor] = useState('');

  return (
    <Form.Group controlId="comentario">
      <Form.Label>Comentario</Form.Label>
      <Form.Control
        type="text"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />
      <Form.Text>Vista previa: {valor}</Form.Text>
    </Form.Group>
  );
}

export default Input;