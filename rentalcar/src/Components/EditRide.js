import React,  {useState, useEffect , useRef } from 'react';

const EditRide = () => {

  const qp = new URLSearchParams(window.location.search)
  var [rentalType,setrentalType] = useState(qp.get("rentalType"))
  var [pickupDate,setpickupDate] = useState(qp.get("pickupDate"))
  var [dropDate,setdropDate] = useState(qp.get("dropDate"))
  var [pickupLoc,setpickupLoc] = useState(qp.get("pickupLoc"))
  var [dropLoc,setdropLoc] = useState(qp.get("dropLoc"))
  var bid = useRef();


  function Updateride()
  {
   var {rentalType,pickupDate,dropDate,pickupLoc,dropLoc}= document.forms["myform"]
   var jsonData ={
    "rentalType": rentalType.value,
    "pickupDate":pickupDate.value,
    "dropDate":dropDate.value,
    "pickupLoc":pickupLoc.value,   
    "dropLoc":dropLoc.value
  }
  console.log(jsonData)

  console.log(`https://localhost:7273/api/Custupdateride${bid.value}`)
  fetch(`https://localhost:7273/api/Custupdateride${bid.value}`, {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },         
    body: JSON.stringify(jsonData)
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
        <form name="myform">
          <label>rentalType </label>
    <input type="text" name="rentalType" defaultValue={rentalType} className='form-control'  />

    <label>pickupDate </label>
    <input type="date" name="pickupDate" defaultValue={pickupDate} className='form-control'  />

    <label>dropDate </label>
    <input type="date" name="dropDate" defaultValue={dropDate} className='form-control'  />

    <label>pickupLoc </label>
           <select defaultValue={pickupLoc} className='form-control' >
                <option>Hyderabad</option>
                <option>Banglore</option>
                <option>Chennai</option>
                <option>AndraPradesh</option>
            </select><br/>

    <label>Drop Location </label>
    <select defaultValue={dropLoc} className='form-control'  >
                <option>Hyderabad</option>
                <option>Banglore</option>
                <option>Chennai</option>
                <option>AndraPradesh</option>
            </select><br/>

    <input type="button" onClick={Updateride} value="update ride" className='btn btn-primary' /> 
    </form>
</div>
        </div>
    );
};

export default EditRide;