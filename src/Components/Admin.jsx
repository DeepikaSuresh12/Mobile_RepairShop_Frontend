import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { NavLink, useNavigate } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import axios from 'axios';
 

 
function Admin() {
  
const defaultTheme = createTheme();
  let navigate = useNavigate();
 
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
 
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    data.append("email", password);
 
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
 
    sessionStorage.setItem("email", data.get("email"));
    sessionStorage.setItem("password", data.get("password"));
 
    await axios
      .get(
        `http://localhost:1222/loginAdmin/${data.get("email")}/${data.get(
          "password"
        )}`
      )
      .then((res) => {
        if (res.data) {
          console.log(email);
          console.log(password);
          console.log(res.data);
          alert("Login Successfull");
          navigate("/adminhome");
        } else {
 
          alert("Login Failed");
 
        }
      })
      .catch((err) => console.log(err));
  };
 
 
 
 
  return (
    <>
 
 
      <nav className="navbar">
        <div className="nav-container">
          {/* <NavLink exact to="/" className="nav-logo">
            <span><IoMdJet />  Tourism Management System
            </span>
            <span className="icon">
            </span>
          </NavLink> */}
 
          <ul className="nav-item"
          // className={click ? "nav-menu active" : "nav-menu"}
          >
 
            <NavLink
              exact
              to="/"
              activeClassName="active"
              className="nav-links"
            // onClick={handleClick}
            >
             {/* <ArrowLeftIcon/> Back to Home */}
            </NavLink>
 
 
 
          </ul>
 
        </div>
      </nav>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: '#1f5156' }}>
              {/* <AdminPanelSettingsIcon /> */}
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form onSubmit={handleSubmit}>
 
            <Box  noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Enter Email"
                name="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Enter Password"
                type="password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
 
                autoComplete="current-password"
              />
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="info" />}
                label="Remember me"
              /> */}
           <Button
 
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor: '#1f5156' }}
              >
                Sign In
              </Button>
              <Grid container>
 
                <Grid item>
                  <Link href="#" variant="body2">
 
                  </Link>
                </Grid>
              </Grid>
            </Box>
            </form>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}
 
export default Admin;