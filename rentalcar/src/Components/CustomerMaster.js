import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const CustomerMaster = () => {
const isUserLoggedIn = sessionStorage.getItem('usid') !== null;
  return (
    <div style={{backgroundImage: `url(car.jpg)`, backgroundPosition:'center',backgroundSize:'cover'}}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/CustomerHome" className="navbar-brand">
          Home
          </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
            <div className="navbar-nav">
              <Link to="/CustBookedReports" className="nav-item nav-link mr-5">
              Your Rides
              </Link>
              <Link to="/SpecialOffers" className="nav-item nav-link mr-5">
              Special Offers
              </Link>
              <Link to="/ContactUs" className="nav-item nav-link mr-5">
              Contact Us
              </Link>
            </div>
            <div className="navbar-nav">
            {!isUserLoggedIn ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Login">
                    Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Logout">
                    Logout
                    </Link>
                  </li>
                </>
              ) : (
                <div className="nav-item nav-link">Welcome: {isUserLoggedIn}</div>
              )}
            </div>
          </div>
        </div>
      </nav>
     <Outlet/>
    </div>
  );
};
export default CustomerMaster;
