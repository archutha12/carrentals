import React,  {useState, useEffect , useRef } from 'react';

const CustEditProfile = () => {

  const qp = new URLSearchParams(window.location.search)
  var [cid,setcid] = useState(qp.get("cid"))
  var [name,setname] = useState(qp.get("name"))
  var [dateofbirth,setdateofbirth] = useState(qp.get("dateofbirth"))
  var [address,setaddress] = useState(qp.get("address"))
  var [phoneno,setphoneno] = useState(qp.get("phoneno"))
  var [email,setemail] = useState(qp.get("email"))
  var [userid,setuserid] = useState(qp.get("userid"))


  function updaterecord()
  {
   var {cid,name,dateofbirth,address,phoneno,email,userid}= document.forms["myform"]
   var jsonData ={
    "cid": parseInt(cid.value),
    "name":name.value,
    "dateofbirth":dateofbirth.value,
    "address":address.value,   
    "phoneno":phoneno.value,
    "email":email.value   ,
    "userid":userid.value   
  }
  console.log(jsonData)

  console.log(`https://localhost:7273/api/CustUpdateProfile/${cid.value}`)
  fetch(`https://localhost:7273/api/CustUpdateProfile/${cid.value}`, {
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
          <label> cid </label>
    <input type="text" name="cid" defaultValue={cid} className='form-control'  />

    <label>name </label>
    <input type="text" name="name" defaultValue={name} className='form-control'  />

    <label>dateofbirth </label>
    <input type="date" name="dateofbirth" defaultValue={dateofbirth} className='form-control'  />

    <label>address </label>
    <input type="text" name="address" defaultValue={address}className='form-control'  />

    <label>phoneno </label>
    <input type="text" name="phoneno" defaultValue={phoneno}className='form-control'  />

    <label>email </label>
    <input type="text" name="email" defaultValue={email}className='form-control'  />

    <label>userid </label>
    <input type="text" name="userid" defaultValue={userid}className='form-control'  />

    <input type="button" onClick={updaterecord} value="update Contact" className='btn btn-primary' /> 
    </form>
</div>
        </div>
    );
};

export default CustEditProfile;