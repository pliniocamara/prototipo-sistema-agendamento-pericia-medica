import * as React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from './Sidebar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

export default function NewExamination() {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const location = useLocation();
    const navigate = useNavigate();



    const handleSubmit = (event) => {
        event.preventDefault();



        const userId = localStorage.getItem('userId');

        fetch('http://localhost:3001/pericias', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ date, time, userId }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Erro ao agendar perícia');
                }
                return response.json();
            })
            .then((data) => {
                console.log('Perícia agendada com sucesso:', data);
                navigate('/listar-pericias');
            })
            .catch((error) => {
                console.error('Erro ao agendar perícia:', error);
            });
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <Sidebar currentPath={location.pathname} />
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Agendar Nova Perícia
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="date"
                                    //label="Data"
                                    type="date"
                                    name="date"
                                    autoComplete="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="time"
                                    label="Horário"
                                    type="time"
                                    id="time"
                                    autoComplete="time"
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    inputProps={{
                                        step: 300, // 5 min
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Agendar
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
