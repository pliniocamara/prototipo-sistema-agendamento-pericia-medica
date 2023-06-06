import * as React from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

const defaultTheme = createTheme();

export default function ExaminationList() {
    const [examinations, setExaminations] = useState([]);

    const location = useLocation();

    useEffect(() => {
        const userId = localStorage.getItem('userId');

        fetch(`http://localhost:3001/pericias/${userId}`)
            .then((response) => response.json())
            .then((data) => setExaminations(data));
    }, []);

    const columns = [
        { field: 'date', headerName: 'Data', width: 150 },
        { field: 'time', headerName: 'Horário', width: 150 },
    ];

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="lg">
                <CssBaseline />
                <Grid container>
                    <Grid item xs={3}>
                        <Sidebar currentPath={location.pathname} />
                    </Grid>
                    <Grid item xs={9}>
                        <Box
                            sx={{
                                marginTop: 8,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Typography component="h1" variant="h5" sx={{ mt: 4, mb: 2 }}>
                                Listagem de Perícias Agendadas
                            </Typography>
                            <div style={{ height: 400, width: '100%' }}>
                                <DataGrid
                                    rows={examinations}
                                    columns={columns}
                                    pageSize={5}
                                    rowsPerPageOptions={[5]}
                                    checkboxSelection
                                />
                            </div>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    );
}