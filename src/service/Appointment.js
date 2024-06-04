import { Component } from "react";
import axios from "axios"
 

const createAppointment="http://localhost:1222/CreateAppointment";
const getAllAppointment="http://localhost:1222/getAllAppointment";

 

class Appointment extends Component {
 
   
    GetAllAppointment=()=>{
        return axios.get(getAllAppointment);
    }
    CreateAppointment(appointment){
        return axios.post(createAppointment,appointment);
    }
}
  export default new Appointment();