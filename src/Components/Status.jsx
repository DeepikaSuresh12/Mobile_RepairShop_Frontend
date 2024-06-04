import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

const Status = () => {
  const sessionId = sessionStorage.getItem("userId");

  const [history, setHistory] = useState([]);

  useEffect(() => {
    const getHistory = async () => {
      try {
        const response = await axios.get(
          `http://localhost:1222/getappointmentbysid/${sessionId}`
        );
        setHistory(response.data);
      } catch (error) {
        console.error("Error fetching:", error);
      }
    };
    getHistory();
  }, []);

  //   const handleApprove = (appointmentId) => {
  //     // Implement your logic for approving the appointment
  //     console.log(`Appointment ${appointmentId} approved`);
  //   };

  //   const handleReject = (appointmentId) => {
  //     // Implement your logic for rejecting the appointment
  //     console.log(`Appointment ${appointmentId} rejected`);
  //   };

  const handleUpdate = (appointment) => {
    appointment.status = "Approved";
    axios
      .put(
        `http://localhost:1222/update/${appointment.appointmentId}?shopId=${sessionId}`,
        appointment
      )
      .then((result) => {
        console.log(result);
        alert("success");
        window.location.reload();
        // navigate("/");
      })
      .catch((err) => console.log(err));
  };

  const handleUpdateReject = (appointment) => {
    appointment.status = "Reject";
    axios
      .put(
        `http://localhost:1222/update/${appointment.appointmentId}?shopId=${sessionId}`,
        appointment
      )
      .then((result) => {
        console.log(result);
        alert("success");
        window.location.reload();
        // navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="card-deck">
        {history.map((appointment) => (
          <div key={appointment.appointmentId} className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">
                Appointment ID: {appointment.appointmentId}
              </h5>
            
              <p className="card-text">Status: {appointment.status}</p>
              <p className="card-text">User ID: {appointment.user.userId}</p>
              <p className="card-text">Shop ID: {appointment.shop.shopId}</p>
              <Button
                variant="success"
                onClick={() => handleUpdate(appointment)}
              >
                Approve
              </Button>
              <Button
                variant="danger"
                onClick={() => handleUpdateReject(appointment)}
              >
                Reject
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Status;
