import React, { useRef, useState } from 'react';

const AddDriver = () => {
  const [getdriver, setdriver] = useState('');
  const name = useRef();
  const dateofbirth = useRef();
  const phoneno = useRef();
  const address = useRef();
  const licenseno = useRef();


  const addingdriver = async () => {
    var jsonData = {
      "Name": name.current.value,
      "DateOfBirth": dateofbirth.current.value,
      "Phoneno": phoneno.current.value,
      "Address": address.current.value,
      "Licenseno": licenseno.current.value,
      "Status":false
    };

    if (Object.values(jsonData).some(value => value === '')) {
      alert('Please fill in all fields.');
      return;
    }

    try {
      const response = await fetch(`https://localhost:7273/api/Adminadddriver`, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(jsonData),
      });

      const userdata = await response.json();
      console.log(userdata);

      if (userdata === 1) {
        console.log("Driver added successfully");
        setdriver("Driver added successfully");
      } else {        
        console.log("Check the credentials again and fill them");
        setdriver("Check the credentials again and fill them");
      }
    } catch (error) {
      console.error('An error occurred:', error);
      alert('Car addition failed. An error occurred.');
    }
  }

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>


      <label>Name </label>
      <input type="text" ref={name} className='form-control' />

      <label>Date of Birth</label>
      <input type="date" ref={dateofbirth} className='form-control' />

      <label>Phone Number </label>
      <input type="text" ref={phoneno} className='form-control' />

      <label>Address </label>
      <input type="text" ref={address} className='form-control' />

      <label>License Number </label>
      <input type="text" ref={licenseno} className='form-control' />

      <label>{getdriver}</label> <br />
      <input type='button' value='Submit' onClick={addingdriver} />
    </div>

  );
};

export default AddDriver;
