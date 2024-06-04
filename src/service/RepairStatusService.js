import { Component } from "react";
import axios from "axios"
 

const createRepaitStatus="http://localhost:1222/CreateRepairStatus";
const getAllRepairStatus="http://localhost:1222/getAllRepairStatus";

 

class ReviewService extends Component {
 
   
    GetAllRepairStatus=()=>{
        return axios.get(getAllRepairStatus);
    }
    CreateRepaitStatus(repairStatus){
        return axios.post(createRepaitStatus,repairStatus);
    }
 
}
  export default new ReviewService();