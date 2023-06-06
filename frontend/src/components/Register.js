import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    fetch('http://localhost:3001/usuarios', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log('Usuário registrado com sucesso:', data);
        })
        .catch((error) => {
            console.error('Erro ao registrar usuário:', error);
        });
    // console.log(`Registrando usuário com nome: ${name} e email: ${email}`);
  };

  return (
    <Container>
        <Row>
            <Col>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formName">
                        <Form.Label>Nome: </Form.Label>
                        <Form.Control type="text" placeholder="Digite seu nome" value={name} onChange={e => setName(e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="formEmail">
                        <Form.Label>Email: </Form.Label>
                        <Form.Control type="email" placeholder="Digite seu email" value={email} onChange={e => setEmail(e.target.value)} />
                    </Form.Group>

                    <Button variant="primary" type="submit" style={{ marginTop: '20px' }}>
                        Registrar
                    </Button>
                </Form>
            </Col>
        </Row>
    </Container>
  );
}

export default Register;