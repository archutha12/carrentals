import React,  {useState, useEffect , useRef } from 'react';
import { useNavigate } from "react-router-dom";

const CancelRide = () => {
    var ob = useNavigate();

    function NoMethod()
    {   
        ob('/CustomerHome')
    }
    
    function DeleteRecord()
    {
        const qp = new URLSearchParams(window.location.search)
        var bid= qp.get("bid")
    fetch(`https://localhost:7273/api/Customercancelride/`+bid, {
          method: 'DELETE'
       })
       .then((response) => {
        alert("done")
        console.log(response);
       })
       .catch((error) => {
         console.error(error);
       });
    
      }
    return (
        <div>
            <div>
                <h1>Are you sure you want to delete this Ride?</h1>
                <div style={{marginLeft:"300px", padding:"50px"}}>
                <input type="button" value="Yes" className='btn btn-info' onClick={DeleteRecord}/>&nbsp;&nbsp;&nbsp;&nbsp; 
                <input type="button" value="No"  className='btn btn-info' onClick={NoMethod}/> 
                </div>
                </div>
        </div>
    );
};

export default CancelRide;