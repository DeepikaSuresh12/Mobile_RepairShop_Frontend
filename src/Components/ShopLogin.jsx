import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
 
function ShopLogin() {
    const [emailError, setEmailError] = React.useState("");
    const [passwordError, setPasswordError] = React.useState("");
    const navigate = useNavigate();
 
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const email = formData.get('email');
        const password = formData.get('password');
        let formValid = true;
 
        // Validate email
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setEmailError("Please enter a valid email address.");
            formValid = false;
        } else {
            setEmailError("");
        }
 
        // Validate password
        if (!password || password.length < 8) {
            setPasswordError("Please enter a password with at least 8 characters.");
            formValid = false;
        } else {
            setPasswordError("");
        }
 
        if (formValid) {
            const userData = { email, password };
axios.post('http://localhost:1222/loginRepairShop', userData)
                .then(response => {
                    console.log('Login successful:', response.data);
                    // alert(response.data.shopId);
                    sessionStorage.setItem('userId', response.data.shopId);
                    alert("successfully logged in");
                    // navigate(`/shoplogin`);
                    navigate(`/shoplogin/${response.data.shopId}`);
                })
                .catch(error => {
                    alert("Invalid Shop Email or Password");
                });
        }
    };
 
    const defaultTheme = createTheme();
 
    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ height: '50vh' }}>
                <CssBaseline />
                <Grid item xs={false} sm={4} md={3.5} sx={{
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: (t) =>
                        t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }} />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box sx={{ my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                error={!!emailError}
                                helperText={emailError}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                error={!!passwordError}
                                helperText={passwordError}
                            />
                            {/* <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            /> */}
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}
 
export default ShopLogin;