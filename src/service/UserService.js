import { Component } from "react";
import axios from "axios"
 
const registerUser="http://localhost:1222/registerUser";
const loginUser="http://localhost:1222/loginUser";
const createUser="http://localhost:1222/CreateUser";
const getAllUser="http://localhost:1222/getAllUsers";
const getUserById="http://localhost:1222/getUserById/";
const loginAdmin="http://localhost:1222/loginAdmin";
 

class UserService extends Component {
 
   
    GetAllUser=()=>{
        return axios.get(getAllUser);
    }
    CreateUser(user){
        return axios.post(createUser,user);
    }
 
    GetUserById(){
        return axios.get(getUserById);
    }
    LoginUser(user){
        return axios.post(loginUser,user);
    }
    RegisterUser(user){
        return axios.post(registerUser,user);
    }
    loginAdmin(admin){
        return axios.post(loginAdmin,admin);
    }
}
  export default new UserService();