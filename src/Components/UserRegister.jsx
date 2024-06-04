import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";
 
function UserRegister() {
    const [emailError, setEmailError] = React.useState("");
    const [passwordError, setPasswordError] = React.useState("");
    const [phoneError, setPhoneError] = React.useState("");
    const [nameError, setNameError] = React.useState("");
    const navigate = useNavigate();
 
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const userName = formData.get("userName");
        const userAddress = formData.get("userAddress");
        const email = formData.get("email");
        const password = formData.get("password");
        const phoneNo = formData.get("phoneNo");
        let formValid = true;
 
        // Check if all fields have been filled in
        if (!userName || !email || !password || !userAddress || !phoneNo) {
            alert("Fill all fields");
            formValid = false;
        }
 
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
 
        // Validate phone number
        if (!phoneNo || !/^[6-9]\d{9}$/.test(phoneNo)) {
            setPhoneError("Please enter a valid phone number ");
            formValid = false;
        } else {
            setPhoneError("");
        }
 
        // Validate user name
        if (!userName || !/^[A-Z][a-zA-Z]*$/.test(userName)) {
            setNameError("Please enter a valid name starting with a capital letter and containing no numbers.");
            formValid = false;
        } else {
            setNameError("");
        }
 
        if (formValid) {
            const userData = {
                userName,
                userAddress,
                email,
                password,
                phoneNo,
            };
 
axios.post("http://localhost:1222/registerUser", userData)
                .then((response) => {
                    console.log("Registration successful:", response.data);
                    alert("Registration successful");
                    navigate("/");
                })
                .catch((error) => {
                    alert("Registration failed. Please try again.");
                });
        }
    };
 
    return (
        <Grid container component="main" sx={{ height: "30vh", marginTop: "30px" }}>
            <Grid item xs={false} sm={4} md={4} sx={{
                backgroundRepeat: "no-repeat",
                backgroundColor: (t) => t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900],
                backgroundSize: "cover",
                backgroundPosition: "center",
            }} />
            <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square>
                <Box sx={{ my: 8, mx: 4, display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5"> Sign up </Typography>
                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="userName"
                            label="Name"
                            name="userName"
                            autoComplete="userName"
                            autoFocus
                            error={!!nameError}
                            helperText={nameError}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="userAddress"
                            label="Address"
                            name="userAddress"
                            autoComplete="userAddress"
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
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="phoneNo"
                            label="Phone Number"
                            type="tel"
                            id="phoneNo"
                            autoComplete="phoneNo"
                            error={!!phoneError}
                            helperText={phoneError}
                        />
                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                            Sign Up
                        </Button>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}
 
export default UserRegister;