import { Component } from "react";
import axios from "axios"
 
const registerRepairShop="http://localhost:1222/registerRepairShop";
const loginRepairShop="http://localhost:1222/loginRepairShop";
const createRepairShop="http://localhost:1222/CreateRepairShop";
const getAllRepairShop="http://localhost:1222/getallrepairshop";
const getShopById="http://localhost:1222/getShopById/";
const getShopIds="http://localhost:1222/GetShopIds";
const updateRating="http://localhost:1222/updateRating/?rating=''&review='"
 

class RepairShopService extends Component {
 
   GetShopIds=()=>{
    return axios.get(getShopIds);
   }
    GetAllRepairShop=()=>{
        return axios.get(getAllRepairShop);
    }
    CreateRepairShop(shop){
        return axios.post(createRepairShop,shop);
    }
 
    GetShopById(){
        return axios.get(getShopById);
    }
    LoginRepairShop(shop){
        return axios.post(loginRepairShop,shop);
    }
    RegisterRepairShop(shop){
        return axios.post(registerRepairShop,shop);
    }
}
  export default new  RepairShopService();