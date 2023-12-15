
import React from 'react';
import { Link } from 'react-router-dom';
 
 
const AdminReports = () => {
    return (
        <div>
            <h2> Reports</h2><br/>
            <Link to="/AllCarReports"   className="nav-item nav-link">All Car Reports</Link><br/>
            <Link to="/AllDriverReports"   className="nav-item nav-link">All Driver Reports</Link> <br/> 
            <Link to="/AvailableCarReports"   className="nav-item nav-link">Available Car Reports</Link> <br/>
            <Link to="/AvailableDriverReports"   className="nav-item nav-link">Available Driver Reports</Link> <br/>
            <Link to="/BookedCarReports"   className="nav-item nav-link">Booked Car Reports</Link> <br/>
            <Link to="/BookedDriverReports"   className="nav-item nav-link">Booked Driver Reports</Link> <br/>
        </div>
    );
};
 
export default AdminReports;