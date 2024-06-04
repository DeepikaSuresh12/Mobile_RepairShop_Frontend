import React, { useEffect } from 'react'

useEffect(() => {
    
    const sessionId=sessionStorage.getItem('shopId')
    const [review, setReview] = useState([]);
    const getReviews = async () => {
      try {
        const response = await axios.get(
          `http://localhost:1222/getallreview/${sessionId}`
        );
        setReview(response.data);
      } catch (error) {
        console.error("Error fetching:", error);
      }
    };
    getReviews();
  }, [sessionId]);;

const Reviews = () => {
  return (
    <div>
      
    </div>
  )
}

export default Reviews
