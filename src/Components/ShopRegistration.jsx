import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";
 
function ShopRegister() {
    const [emailError, setEmailError] = React.useState('');
    const [passwordError, setPasswordError] = React.useState('');
    const [contactNumberError, setContactNumberError] = React.useState('');
    const [formError, setFormError] = React.useState('');
    const navigate = useNavigate();
 
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const name = formData.get('name');
        const address = formData.get('address');
        const contactNumber = formData.get('contactNumber');
        const operatingHours = formData.get('operatingHours');
        const specialities = formData.get('specialities');
        const email = formData.get('email');
        const password = formData.get('password');
        let formValid = true;
 
        // Check if all fields have been filled in
        if (!name || !address || !contactNumber || !operatingHours || !specialities || !email || !password) {
            setFormError("Please fill in all fields.");
            formValid = false;
        } else {
            setFormError('');
        }
 
        // Validate email
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setEmailError('Please enter a valid email address.');
            formValid = false;
        } else {
            setEmailError('');
        }
 
        // Validate password
        if (!password || password.length < 8) {
            setPasswordError('Please enter a password with at least 8 characters.');
            formValid = false;
        } else {
            setPasswordError('');
        }
 
        // Validate contact number
        if (!contactNumber || !/^[6-9]\d{9}$/.test(contactNumber)) {
            setContactNumberError('Please enter a valid contact number starting with 6, 7, 8, or 9 and with 10 digits.');
            formValid = false;
        } else {
            setContactNumberError('');
        }
 
        if (formValid) {
            const userData = {
                name: formData.get('name'),
                address: formData.get('address'),
                contactNumber: formData.get('contactNumber'),
                operatingHours: formData.get('operatingHours'),
                specialities: formData.get('specialities'),
                email: formData.get('email'),
                password: formData.get('password'),
            };
axios.post('http://localhost:1222/CreateRepairShop', userData)
                .then(response => {
                    console.log('Registration successful:', response.data);
                    alert("Success");
                    navigate("/");
                })
                .catch(error => {
                    alert("Registration failed. Please try again.");
                });
        }
    };
 
    const defaultTheme = createTheme();
 
    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ height: "30vh", marginTop: "30px" }}>
                <CssBaseline />
                <Grid item xs={false} sm={4} md={4} sx={{
                    backgroundRepeat: "no-repeat",
                    backgroundColor: (t) =>
                        t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900],
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }} />
                <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square>
                    <Box sx={{ my: 8, mx: 4, display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign up
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="name"
                                label="Name"
                                name="name"
                                autoComplete="name"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="address"
                                label="Address"
                                name="address"
                                autoComplete="address"
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="contactNumber"
                                label="Contact Number"
                                type="text"
                                id="contactNumber"
                                autoComplete="contactNumber"
                                error={!!contactNumberError}
                                helperText={contactNumberError}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="operatingHours"
                                label="Operating Hours"
                                type="text"
                                id="operatingHours"
                                autoComplete="operatingHours"
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="specialities"
                                label="Specialities"
                                type="text"
                                id="specialities"
                                autoComplete="specialities"
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="email"
                                label="Email"
                                type="email"
                                id="email"
                                autoComplete="email"
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
                                autoComplete="password"
                                error={!!passwordError}
                                helperText={passwordError}
                            />
                            {formError && (
                                <Typography color="error" variant="body2" align="center">
                                    {formError}
                                </Typography>
                            )}
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign Up
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}
 
export default ShopRegister;