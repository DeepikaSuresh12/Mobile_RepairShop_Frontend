import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import UserRegister from "./Components/UserRegister";
import ShopRegister from "./Components/ShopRegistration";
import UserLogin from "./Components/UserLogin";
import ShopLogin from "./Components/ShopLogin";
import MobileRepairServices from "./Components/MobileRepairServices.jsx";
import LandingPage from "./Components/Landing";
import LoginPage from "./Components/Landing/LandingPage";
import AppointmentForm from "./Components/AppointmentForm";
import History from "./Components/History";
import RepairShop from "./Components/RepairShop";
import ShopAppointment from "./Components/ShopAppointment";
import FrontPage from "./Components/FrontPage"
import Admin from "./Components/Admin"
import AdminHome from "./Components/AdminHome";
// import BookAppointment from "./Components/BookAppointment";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path="/" element={<LandingPage />} /> */}
          <Route path="/" element={<FrontPage/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registershop" element={<ShopRegister />} />
          <Route path="/customerlogin" element={<UserLogin />} />
          <Route path="/shoplogin" element={<ShopLogin />} />
          <Route path="/repair" element={<MobileRepairServices />} />
          <Route path="/homepage/:userId" element={<HomePage />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="//appointmenthomepage/${userId}" element={<HomePage />} />
          <Route path="/registercustomer" element={<UserRegister />} />
          <Route path="/appointmentform/:userId/:shopId" element={<AppointmentForm/>} />
          <Route path="/loginPage" element={<LandingPage />} />
          <Route path="/loginPage1" element={<LandingPage />} />
          <Route path="/history/:userId"  element={<History />} />
          <Route path="/shopReg" element={<RepairShop/>} />
          <Route path="/shoplogin/:shopId" element={<RepairShop/>} />
          <Route path="/adminlogin1" element={<Admin/>} />
         < Route path="/appointments/:appointmentId" element={<ShopAppointment/>} />
         <Route path="/adminhome" element={<AdminHome/>} />
         {/* < Route path="/appointment" element={<BookAppointment/>} /> */}
        </Routes>
      </Router>
    </div>
  );
}
export default App;
