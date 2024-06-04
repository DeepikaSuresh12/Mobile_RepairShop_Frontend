import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Modal } from "react-bootstrap";
import { TextField } from '@mui/material';

const History = () => {
  const [sessionId, setSessionId] = useState(sessionStorage.getItem('userId'));
  const [history, setHistory] = useState([]);
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('')
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    const getHistory = async () => {
      try {
        const response = await axios.get(
          `http://localhost:1222/getAppointmentHistory/${sessionId}`
        );
        setHistory(response.data);
      } catch (error) {
        console.error("Error fetching:", error);
      }
    };
    getHistory();
  }, [sessionId]);

  const handleRate = (appointment) => {
    setSelectedAppointment(appointment);
    setShowRatingModal(true);
  };

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };
  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };
  const handleRateSubmit = () => {

    console.log(selectedAppointment.shop.shopId)
    console.log(rating)
    console.log(review)
    axios
     .put(
        `http://localhost:1222/updateRating/${selectedAppointment.shop.shopId}?rating=${rating}&review=${review}`
     
      )
     .then((result) => {
        console.log(result);
        alert("success");
        // Update the history state with the new rating
        setHistory(
          history.map((appointment) =>
            appointment.appointmentId === selectedAppointment.appointmentId
             ? {...appointment, rating: rating, review:review}
              : appointment
          )
        );
        // Calculate the new average rating
        const repairShop = history.find((shop) => shop.shopId === selectedAppointment.shop.shopId);
    if (repairShop) {
      repairShop.rating = rating;
      repairShop.review = review;
      repairShop.save();
    }
    setShowRatingModal(false);
  })
     .catch((err) => console.log(err));
  };

  return (
    <div style={{ background: '#f0f0f0', padding: '20px', minHeight:"100vh",backgroundImage: 'url("https://visible.scene7.com/is/image/visible/1022_BLOG_POST_FEATURED_IMAGES_640x400-10---FNL?$WebP$")'}}>
    <div style={{ maxWidth: '600px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }} className="d-flex justify-content-center">
      {history.map((appointment) => (
        <div key={appointment.appointmentId} className="card mb-3" style={{ width: '100%', margin: '10px 0' }}>
          <div className="card-body">
            <h5 className="card-title">Appointment ID: {appointment.appointmentId}</h5>
            <p className="card-text text-truncate">Date: {appointment.appointmentDate}</p>
            <p className="card-text text-truncate">Status: {appointment.status}</p>
            <p className="card-text text-truncate">Problem: {appointment.problem}</p>
            <p className="card-text text-truncate">Mobile Type: {appointment.mobileType}</p>
            {/* <p className="card-text">Address: {appointment.address}</p> */}
            {/* <p className="card-text">User ID: {appointment.user.userId}</p> */}
            <p className="card-text text-truncate">Shop ID: {appointment.shop.shopId}</p>
            {/* Display the rating for this appointment */}
            {appointment.rating && <p className="card-text">Rating: {appointment.rating}</p>}
            {appointment.review && <p className="card-text">Review: {appointment.review}</p>}
          </div>

          {
            appointment.status === "Delivered" && (
              <Button

              variant="success"
              size="xs"
              className="btn-xs py-0 px-1"
              style={{ padding: '0.25rem', fontSize: '0.95rem', width: '30%', minWidth: '95px'  }}
                onClick={() => handleRate(appointment)}
              >
                ⭐️ Rate Us
              </Button>
            )

          }
        </div>
      ))}
      <Modal show={showRatingModal} onHide={() => setShowRatingModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Rate Your Experience</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="rating">
            <input type="radio" id="star5" name="rating" value="5" onChange={handleRatingChange} />
            <label for="star5">5</label>
            <input type="radio" id="star4" name="rating" value="4" onChange={handleRatingChange} />
            <label for="star4">4</label>
            <input type="radio" id="star3" name="rating" value="3" onChange={handleRatingChange} />
            <label for="star3">3</label>
            <input type="radio" id="star2" name="rating" value="2" onChange={handleRatingChange} />
            <label for="star2">2</label>
            <input type="radio" id="star1" name="rating" value="1" onChange={handleRatingChange} />
            <label for="star1">1</label>
          </div>
          <TextField
            id="outlined-multiline-static"
            label="Review"
            multiline
            rows={4}
            variant="outlined"
            value={review}
            onChange={handleReviewChange}
        />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleRateSubmit}>
            Submit Rating
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    </div>
  );
};

export default History;