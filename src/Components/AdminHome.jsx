import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import RepairShopService from "../service/RepairShopService";

const AdminHome = () => {
  const [shop, setShop] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState("home");
  const mail = sessionStorage.getItem("email");

  useEffect(() => {
    loadShops();
  }, []);

  const loadShops = async () => {
    const result = await RepairShopService.GetAllRepairShop(shop);
    setShop(result.data);
  };

  const handleDelete = (id) => {
    axios
     .put(`http://localhost:1222/updateshopstatus/${id}`, { status: "Rejected" })
     .then((result) => {
        console.log(result);
        alert("success");
        window.location.reload();
      })
     .catch((err) => console.log(err));
  };

  const handleUpdate = (id) => {
    axios
     .put(`http://localhost:1222/updateshopstatus/${id}`, { status: "Approved" })
     .then((result) => {
        console.log(result);
        alert("success");
        window.location.reload();
      })
     .catch((err) => console.log(err));
  };

  const handleSendEmail = (shopId, email) => {
    axios
     .post(`http://localhost:1222/sendEmail/${shopId}`)
     .then((response) => {
        alert("Email sent to " + email);
        console.log(response.data);
      })
     .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <section style={{
  backgroundImage: 'url("https://visible.scene7.com/is/image/visible/1022_BLOG_POST_FEATURED_IMAGES_640x400-10---FNL?$WebP$")',
  backgroundSize: 'cover',
  height:"100vh",
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat' }}>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {shop
           .filter((shop) => shop.name.toLowerCase().includes(search))
           .map((shop) => (
              <div key={shop.shopId} style={{  marginBottom: "20px", paddingTop:"10px", marginRight:"10px" }}>
                <div style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "14px", backgroundColor:"white"}}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div style={{ flex: 1 }}>
                      <h2>{shop.name}</h2>
                      <p>ShopID: {shop.shopId}</p>
                      <p>Status: {shop.status}</p>
                      <p>PhoneNo: {shop.contactNumber}</p>
                      <p>Operating Hours: {shop.operatingHours}</p>
                      <p>Email ID {shop.email}</p>
  
                    </div>
                  </div>
                  <div>
                    <div style={{ display: "flex", gap: "10px" }}>
                      <Link to={`/shoplogin/:shopId/${shop.shopId}`} style={{ textDecoration: "none", color: "blue" }}>
                        {/* <button>View</button> */}
                      </Link>
                      <button onClick={() => handleUpdate(shop.shopId)} className="btn btn-success" disabled={shop.status==="Approved"}>Approve</button>
                      <button onClick={() => handleDelete(shop.shopId)} className="btn btn-danger">Reject</button>
                      <button onClick={() => handleSendEmail(shop.shopId, shop.email)} className="btn btn-primary" disabled={shop.status!=="Approved"}>Send Mail</button>
                    </div> 
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default AdminHome;