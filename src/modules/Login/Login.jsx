import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import Banner from '../../assets/images/banner.jpg'
import Logo from '../../assets/images/logo.png'

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#555',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#ddd',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#ddd',
            borderRadius: 0,
            textTransform: 'uppercase'
        },
        '&:hover fieldset': {
            borderColor: '#ddd',
        },
        '&.Mui-focused fieldset': {
            border: '1px solid #ddd',
        },
    },
});


const theme = createTheme();

export default function Login() {

    const [login, setLogin] = useState(false)
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Box sx={{
                    position: 'absolute',
                    width: '185px',
                    height: 'auto',
                    top: '45px',
                    left: '45px',
                }}>
                    <img src={Logo} className="App-logo" alt="logo" style={{ width: "100%" }} />
                </Box>

                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    sx={{
                        backgroundImage: `url(${Banner})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                {
                    login ?
                        <Card sx={{ width: 327, minWidth: 327, position: 'absolute', right: '50px', top: '150px', borderRadius: 0 }}>
                            <CardContent sx={{ p: 0 }}>
                                <Typography component="h1" variant="h5" sx={{
                                    pl: 3, pr: 3, pt: 2, lineHeight: "28px", color: (t) =>
                                        t.palette.info.dark
                                }}>
                                    Welcome to UOB Personal Internet Banking
                                </Typography>
                                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                                    <CssTextField hiddenLabel variant="outlined" required placeholder='USERNAME'
                                        fullWidth autoFocus autoComplete='off' sx={{ m: 0 }} />
                                    {/* <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            /> */}
                                </Box>
                            </CardContent>
                            <CardActions >
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    disableElevation
                                    sx={{ m: 2, mb: 0, pt: 1, pb: 1, fontWeight: 'normal', textTransform: 'none', borderRadius: 0 }}
                                >
                                    Submit
                                </Button>

                            </CardActions>

                            <CardActions sx={{ pl: 3, pr: 3, pb: 3, pt: 0 }}>
                                <Grid container>
                                    <Grid item xs>
                                        <Link href="#" variant="body2">
                                            Forgot Username/password?
                                        </Link>
                                    </Grid>

                                </Grid>
                            </CardActions>
                        </Card>

                        :

                        <Card sx={{ width: 327, minWidth: 327, position: 'absolute', right: '50px', top: '150px', borderRadius: 0 }}>
                            <CardContent sx={{ p: 0 }}>
                                <Typography component="h1" variant="h5" sx={{
                                    pl: 3, pr: 3, pt: 2, lineHeight: "28px", color: (t) =>
                                        t.palette.info.dark
                                }}>
                                    Welcome to UOB Personal Internet Banking
                                </Typography>
                                <Typography sx={{ p: 3, pb: 1 }}>
                                    Secret Word
                                </Typography>

                                <Typography sx={{ p: 3, pb: 1 }}>

                                </Typography>
                                <FormControl sx={{ pl: 3, }}>
                                    <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                    >
                                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                                        <FormControlLabel value="male" control={<Radio />} label="Male" />

                                    </RadioGroup>
                                </FormControl>

                                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                                    <CssTextField hiddenLabel variant="outlined" required placeholder='USERNAME'
                                        fullWidth autoFocus autoComplete='off' sx={{ m: 0 }} />
                                    <CssTextField hiddenLabel variant="outlined" required placeholder='USERNAME'
                                        fullWidth autoFocus autoComplete='off' sx={{ m: 0 }} />
                                    {/* <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            /> */}
                                </Box>
                            </CardContent>
                            <CardActions >
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    disableElevation
                                    sx={{ m: 2, mb: 0, pt: 1, pb: 1, fontWeight: 'normal', textTransform: 'none', borderRadius: 0 }}
                                >
                                    Submit
                                </Button>

                            </CardActions>

                            <CardActions sx={{ pl: 3, pr: 3, pb: 3, pt: 0 }}>
                                <Grid container>
                                    <Grid item xs>
                                        <Link href="#" variant="body2">
                                            Forgot Username/password?
                                        </Link>
                                    </Grid>

                                </Grid>
                            </CardActions>
                        </Card>
                }
            </Grid>
        </ThemeProvider >
    );
}