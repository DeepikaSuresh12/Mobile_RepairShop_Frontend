import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

const ShopAppointment = () => {
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

  const handleUpdate = (appointment, newStatus) => {
    appointment.status = newStatus;
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
    <div style={{ background: '#f0f0f0', padding: '20px', backgroundImage: 'url("https://visible.scene7.com/is/image/visible/1022_BLOG_POST_FEATURED_IMAGES_640x400-10---FNL?$WebP$")'}}>
    <div className="d-flex justify-content-center">
      <div className="card-deck">
        {history.map((appointment) => (
          <div key={appointment.appointmentId} className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">
                Appointment ID: {appointment.appointmentId}
              </h5>
              <p className="card-text">Date: {appointment.appointmentDate}</p>
              <p className="card-text">Status: {appointment.status}</p>
              <p className="card-text">Problem: {appointment.problem}</p>
              <p className="card-text">Mobile Type: {appointment.mobileType}</p>
              <p className="card-text">Address: {appointment.address}</p>
              <p className="card-text">User ID: {appointment.user.userId}</p>
              {/* <p className="card-text">Shop ID: {appointment.shop.shopId}</p> */}

              {appointment.status === "PENDING" && (
                <>
                  <Button
                    variant="success"
                    style={{ margin: '0 5px' }}
                    onClick={() => handleUpdate(appointment, "Approved")}
                  >
                    Approve
                  </Button>
                  <Button
                    variant="danger"
                    style={{ margin: '0 5px' }}
                    onClick={() => handleUpdate(appointment, "Reject")}
                  >
                    Reject
                  </Button>
                  <Button
                    variant="warning"
                    style={{ margin: '0 5px' }}
                    
                    onClick={() => handleUpdate(appointment, "On Hold")}
                  >
                    On Hold
                  </Button>
                  <Button
                    variant="secondary"
                    
                    style={{ margin: '0 5px' }}
                    onClick={() => handleUpdate(appointment, "Cancelled")}
                  >
                    Cancel
                  </Button>
                </>
              )}

              {appointment.status === "Approved" && (
                <Button
                  variant="success"
                  style={{ margin: '0 5px' }}
                  onClick={() => handleUpdate(appointment, "On Process")}
                >
                  On Process
                </Button>
              )}

              {appointment.status === "On Process" && (
                <>
                  <Button
                    variant="success"
                    style={{ margin: '0 5px' }}
                    onClick={() => handleUpdate(appointment, "Delivered")}
                  >
                    Delivered
                  </Button>
                  <Button
                    variant="secondary"
                    style={{ margin: '0 5px' }}
                    onClick={() => handleUpdate(appointment, "On Hold")}
                  >
                    On Hold
                  </Button>
                </>
              )}

              {appointment.status === "On Hold" && (
                <>
                  <Button
                    variant="success"
                    style={{ margin: '0 5px' }}
                    onClick={() => handleUpdate(appointment, "On Process")}
                  >
                    On Process
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={() => handleUpdate(appointment, "Cancelled")}
                  >
                    Cancel
                  </Button>
                </>
              )}

              {appointment.status === "Cancelled" && (
                <Button
                  variant="secondary"
                  onClick={() => handleUpdate(appointment, "Pending")}
                >
                  Pending
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ShopAppointment;