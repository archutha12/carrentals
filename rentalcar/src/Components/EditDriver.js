import React, { useState,  useRef } from 'react';

const EditDriver = () => {
  const qp = new URLSearchParams(window.location.search);
  const [getdriver, setdriver] = useState('');
  const [Driverid, setdriverid] = useState(qp.get('driverid'));
  const [Name, setname] = useState(qp.get('name'));
  const [DateOfBirth, setdateOfBirth] = useState(qp.get('dateOfBirth'));
  const [Phoneno, setphoneno] = useState(qp.get('phoneno'));
  const [Address, setaddress] = useState(qp.get('address'));
  const [Licenseno, setlicenseno] = useState(qp.get('licenseno'));
 

  const driverid = useRef();
  const name = useRef();
  const dateOfBirth = useRef();
  const phoneno = useRef();
  const address = useRef();
  const licenseno = useRef();
 

  const Updatedriver = async () => {
    const jsonData = {
      Driverid: driverid.current.value,
      Name : name.current.value,
      DateOfBirth: dateOfBirth.current.value,
      Phoneno : phoneno .current.value,
      Address: address.current.value,
      Licenseno: licenseno.current.value,
      Status:false
    };

    try {
      const response = await fetch(`https://localhost:7273/api/Adminupdatedriver`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(jsonData),
      });

      const userData = await response.json();

      if (userData === 1) {
        console.log('Driver updated successfully');
        setdriver('Driver updated successfully');
      } else {
        console.log('Check the credentials again and fill them');
        setdriver('Check the credentials again and fill them');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      alert('Driver updation failed. An error occurred.');
    }
  };

  return (
    <div>
      <div>
        <form name="myform">
          <label>Driver Id</label>
          <input type="text" name="driverid" defaultValue={driverid} className="form-control" ref={driverid} />

          <label>Name</label>
          <input type="text" name="brand" defaultValue={name} className="form-control" ref={name} />

          <label>Date Of Birth</label>
          <input type="date" name="dateOfBirth" defaultValue={dateOfBirth} className="form-control" ref={dateOfBirth} />

          <label>Phone number</label>
          <input type="text" name="phoneno" defaultValue={phoneno} className="form-control" ref={phoneno} />

          <label>Address</label>
          <input type="text" name="address" defaultValue={address} className="form-control" ref={address} />

          <label>licenseno</label>
          <input type="text" name="licenseno" defaultValue={licenseno} className="form-control" ref={licenseno} />

          <input type="button" onClick={Updatedriver} value="Update Car" className="btn btn-primary" />
        </form>
      </div>
      <label>{getdriver}</label>
    </div>
  );
};

export default EditDriver;
