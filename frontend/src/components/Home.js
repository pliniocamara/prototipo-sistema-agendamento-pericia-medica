import * as React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

export default function MainScreen() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="sm">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mt: 8,
          }}
        >
          <Typography component="h1" variant="h5">
            Sistema de Perícia Médica
          </Typography>
          <Typography component="h2" variant="h6" sx={{ mt: 3, mb: 4 }}>
            O que você gostaria de fazer?
          </Typography>
          <Button
            component={Link}
            to="/listar-pericias"
            variant="contained"
            color="primary"
            size="large"
            sx={{ width: '100%', mb: 2 }}
          >
            Listar Perícias Agendadas
          </Button>
          <Button
            component={Link}
            to="/agendar-pericia"
            variant="contained"
            color="secondary"
            size="large"
            sx={{ width: '100%' }}
          >
            Agendar Nova Perícia
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
