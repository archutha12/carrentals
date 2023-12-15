import React from 'react';
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const AdminMaster = () => {        
    var ob =  useNavigate();
    function NoMethod()
    {  
        const [data] = document.forms["myform"]
        ob({
            pathname: '/Search',
            search: '?fname='+data.value,
          });
    }
    return (
        <div sytle = {{marginLeft:'100px'}}>
            <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
           <div className="container-fluid">
      <Link to="/" className="navbar-brand">Home</Link>
        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
            <div className="navbar-nav">
            <Link to="/AddCar"   className="nav-item nav-link">Add Car</Link>
            <Link to="/AddDriver"   className="nav-item nav-link">Add Driver</Link>
            <Link to="/RemoveCar"   className="nav-item nav-link">Remove Car</Link>  
            <Link to="/RemoveDriver"   className="nav-item nav-link">Remove Driver</Link>
            <Link to="/AdminReports"   className="nav-item nav-link"> Reports</Link> 
            </div>
            <div className="navbar-nav">
            {sessionStorage.getItem("usid")==null?
          <li><Link  className="nav-item nav-link" to="/Login">Login</Link></li>:
          <li><Link  className="nav-item nav-link" to="/Logout">Logout</Link></li>
           }  
            </div>
        </div>
        {sessionStorage.getItem("usid")==null?
         <div className='btn btn-info'>Welcome Guest</div>:
         <div  className='btn btn-success'>Welcome : {sessionStorage.getItem("usid") }</div>
           }  
    </div>
</nav>
<div style={{marginTop:"100px", marginLeft:"150px"}}>
<Outlet/>
</div>
</div>
 
 
</div>
    );
};
 
export default AdminMaster;
 
 
 