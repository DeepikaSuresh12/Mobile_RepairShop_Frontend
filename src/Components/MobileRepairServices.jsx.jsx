import React, { useState, useEffect } from "react";
// import { InputGroup, FormControl } from 'react-bootstra
import { Container, Card, Button, InputGroup, FormControl} from "react-bootstrap";
import RepairShopService from "../service/RepairShopService";
import { Link } from "react-router-dom";
import { Search } from 'react-bootstrap-icons';
 
const MobileRepairServices = () => {
    const [repairServices, setRepairServices] = useState([]);
    const [search, setSearch] = useState("");
    const [visibleServices, setVisibleServices] = useState(10); // Number of services to show initially
    const userId = sessionStorage.getItem("userId");
 
    useEffect(() => {
        RepairShopService.GetAllRepairShop()
            .then((response) => {
                if (response.data) {
                    setRepairServices(response.data);
                    console.log(response.data);
                }
            })
            .catch((error) => console.error("Error fetching data: ", error));
    }, [search]);
 
    // Filter repair services based on search query
    const filteredServices = repairServices.filter(
        (service) =>
            service.address.toLowerCase().includes(search.toLowerCase()) ||
            service.specialities.toLowerCase().includes(search.toLowerCase())
    );
 
    // Function to load more services
    const loadMore = () => {
        setVisibleServices((prevValue) => prevValue + 10); // Load 10 more services
    };
 
    // Function to display rating as stars
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < rating) {
              stars.push(<span key={i} style={{color: 'gold'}}>&#9733;</span>); // Filled star
            } else {
              stars.push(<span key={i} style={{color: 'gray'}}>&#9734;</span>); // Empty star
            }
        }
        return stars;
    };
 
    return (
      <div style={{ background: '#f0f0f0', padding: '20px', backgroundImage: 'url("https://visible.scene7.com/is/image/visible/1022_BLOG_POST_FEATURED_IMAGES_640x400-10---FNL?$WebP$")'}}>
        <Container style={{ maxWidth: "800px" }}> {/* Adjusted container size */}
           <InputGroup className="mb-1">
    <InputGroup.Text>
        <Search />
    </InputGroup.Text>
    <FormControl
        type="text"
        placeholder="Search repair services"
        onChange={(e) => setSearch(e.target.value)}
    />
</InputGroup>
            {filteredServices.slice(0, visibleServices).map((service) => (
                <Card key={service.id} className="mb-3">
                    <Card.Body>
                        <Card.Title>{service.name}</Card.Title>
                        <Card.Text>
                            <strong>Location:</strong> {service.address} <br />
                            <strong>Operating Hours:</strong> {service.operatingHours} <br />
                            <strong>Specialities:</strong> {service.specialities} <br />
                            <strong>Contact No:</strong> {service.contactNumber} <br />
                            <strong>Email:</strong> {service.email} <br />
                            <strong>Rating:</strong> {renderStars(service.rating)} <br />
                            <strong>Review:</strong> {service.review}
                        </Card.Text>
                        <Link variant="success" className="mt-2" to={`/appointmentform/${userId}/${service.shopId}`}>
                            Book Appointment
                        </Link>{" "}
                    </Card.Body>
                </Card>
            ))}
            {visibleServices < filteredServices.length && (
                <Button onClick={loadMore} className="mb-3">
                    Load More
                </Button>
            )}
        </Container>
        </div>
    );
};
 
export default MobileRepairServices;
