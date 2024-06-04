import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { TextField, Button, MenuItem, FormControl, InputLabel, Select, Card, CardContent } from '@mui/material';

function AppointmentForm() {


  const { uId, shopId } = useParams();
  

  const [appointment, setAppointment] = useState({
    appointmentDate: '',
    problem: '',
    mobileType: '',
    address: '',
    status: 'PENDING',
    shop: {
      shopId: `${shopId}`,
    },user: {
      userId: ''
  },
  });
  const [idList, setIdList] = useState([]);
  const userId = sessionStorage.getItem("userId");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:1222/GetShopIds').then((response) => {
      console.log(response.data);
      setIdList(response.data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Adding User")
    const userData = {
     ...appointment,
      isappointment: null,
      user: {
        userId: userId,
      },
    };

    axios
     .post('http://localhost:1222/CreateAppointment', userData)
     .then((result) => {
        console.log(result);
        alert('successfully added');
        navigate(`/homepage/${userId}`, { replace: true });
      })
     .catch((err) => console.log(err));
  };

  const handleChange = (e, name, value) => {
    if (name === 'shopId') {
      setAppointment((prevState) => ({
       ...prevState,
        shop: { shopId: value },
      }));
    } else if (name === 'userId') {
      setAppointment((prevState) => ({
       ...prevState,
        user: { userId: value },
      }));
    } else {
      setAppointment((prevState) => ({
       ...prevState,
        [name]: value,
      }));
    }
  };

  return (
    <Card style={{ margin: 'auto', width: '50%' }}>
      <CardContent>
        <h1>Add appointment</h1>
        <form onSubmit={handleSubmit}>
          <TextField
            label=""
            variant="outlined"
            type='date'
            fullWidth
            margin="normal"
            name="AppointmentDate"
            value={appointment.appointmentDate}
            onChange={(e) => handleChange(e, 'appointmentDate', e.target.value)}
            required
          />

          <TextField
            label=""
            variant="outlined"
            type='time'
            fullWidth
            margin="normal"
            name="Pickup"
            value={appointment.pickup}
            onChange={(e) => handleChange(e, 'time', e.target.value)}
            required
          />

          {/* <TextField
            label=""
            disabled
            variant="outlined"
            type=''
            fullWidth
            margin="normal"
            name="Status"
            value={appointment.status}
            onChange={(e) => handleChange(e, 'status', e.target.value)}
            required
          /> */}
          
          <TextField
            label="address"
            variant="outlined"
            fullWidth
            margin="normal"
            name="address"
            value={appointment.address}
            onChange={(e) => handleChange(e, 'address', e.target.value)}
            required
          />
          <FormControl fullWidth margin="normal">
            <InputLabel>Select the Mobile</InputLabel>
            <Select
               name="mobileType"
              onChange={(e) => handleChange(e, 'mobileType', e.target.value)}
              label="Select the Mobile"
              required
            >
              <MenuItem value="Oneplus">Oneplus Nord</MenuItem>
              <MenuItem value="Iphone">Iphone 15 plus</MenuItem>
              <MenuItem value="Samsung">Samsung Galaxy F55</MenuItem>
              <MenuItem value="Redmi">Redmi Note 13 pro</MenuItem>
              <MenuItem value="Vivo">Vivo Y200e</MenuItem>
              <MenuItem value="Oppo">Oppo A3s</MenuItem>
              <MenuItem value="Poco">Poco x6 pro</MenuItem>
              <MenuItem value="Realme">Realme Narzo N65</MenuItem>
              <MenuItem value="Realme">Lenovo legion pro2</MenuItem>
                            
            </Select>
          </FormControl> 

          <FormControl fullWidth margin="normal">
            <InputLabel>Problem</InputLabel>
            <Select
              name="problem"
              onChange={(e) => handleChange(e, 'problem', e.target.value)}
              label="Shop ID"
              required
            >
              <MenuItem value="Display">Display Flikker / Display Change</MenuItem>
              <MenuItem value="Speaker">Speaker</MenuItem>
              <MenuItem value="MicroPhone">MicroPhone</MenuItem>
              <MenuItem value="Camera">Camera Issue</MenuItem>
              <MenuItem value="Software">Software</MenuItem>
              <MenuItem value="Battery">Battery</MenuItem>
            </Select>
          </FormControl> 

          <button
            variant="contained"
            to={`/appointmenthomepage/${userId}`}
            color="primary"
            style={{ marginTop: '20px' }}
          >
            Add Appointment
          </button>
        </form>
      </CardContent>
    </Card>
  );
}

export default AppointmentForm;