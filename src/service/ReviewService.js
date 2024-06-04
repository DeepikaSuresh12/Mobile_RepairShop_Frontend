import { Component } from "react";
import axios from "axios"
 

const createReview="http://localhost:1222/CreateReview";
const getAllReview="http://localhost:1222/getAllReview";

 

class ReviewService extends Component {
 
   
    GetAllReview=()=>{
        return axios.get(getAllReview);
    }
    createReview(review){
        return axios.post(createReview,review);
    }
 
}
  export default new ReviewService();