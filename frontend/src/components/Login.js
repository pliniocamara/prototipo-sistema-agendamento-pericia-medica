import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function Login() {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    fetch('http://localhost:3001/usuarios/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Invalid credentials');
            }
            return response.json();
        })
        .then((data) => {
            console.log('Usuário logado com sucesso:', data);
            navigate('/');
        })
        .catch((error) => {
            console.error('Erro ao fazer login:', error);
        });

    console.log(`Fazendo login do usuário com email: ${email}`);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formEmail">
        <Form.Label>Email: </Form.Label>
        <Form.Control type="email" placeholder="Digite seu email" value={email} onChange={e => setEmail(e.target.value)} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
}

export default Login;