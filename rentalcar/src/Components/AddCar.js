import React, { useRef, useState } from 'react';

const AddCar = () => {
  const [getcar, setcar] = useState('');
  const carno = useRef();
  const brand = useRef();
  const color = useRef();
  const fueltype = useRef();
  const registereddate = useRef();
  const mileage = useRef();
  const capacity = useRef();
  const cost = useRef();
  const image = useRef();

  const addingcar = async () => {
    var jsonData = {
      "carno": carno.current.value,
      "brand": brand.current.value,
      "color": color.current.value,
      "fueltype": fueltype.current.value,
      "registereddate": registereddate.current.value,
      "mileage": mileage.current.value,
      "capacity": capacity.current.value,
      "cost": cost.current.value,
      "image": image.current.value,
      "status":false
    };

    if (Object.values(jsonData).some(value => value === '')) {
      alert('Please fill in all fields.');
      return;
    }

    try {
      const response = await fetch(`https://localhost:7273/api/Adminaddcar`, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(jsonData),
      });

      const userdata = await response.json();
      console.log(userdata);

      if (userdata === 1) {
        console.log("Car added successfully");
        setcar("Car added successfully");
      } else {
        console.log("Check the credentials again and fill them");
        setcar("Check the credentials again and fill them");
      }
    } catch (error) {
      console.error('An error occurred:', error);
      alert('Car addition failed. An error occurred.');
    }
  }

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>

    <div>
    <label>Image </label>
      <input type="file" ref={image}  className='form-control' />

      <label>Car Number </label>
      <input type="text" ref={carno} className='form-control' />

      <label>Brand </label>
      <input type="text" ref={brand} className='form-control' />

      <label>Color </label>
      <input type="text" ref={color} className='form-control' />

      <label>Fuel Type </label>
      <input type="text" ref={fueltype} className='form-control' />

      <label>Registered Date </label>
      <input type="date" ref={registereddate} className='form-control' />

      <label>Mileage </label>
      <input type="text" ref={mileage} className='form-control' />

      <label>Capacity </label>
      <input type="text" ref={capacity} className='form-control' />

      <label> Cost </label>
      <input type="text" ref={cost} className='form-control' />

      <label>{getcar}</label> <br />
      <input type='button' value='Submit' onClick={addingcar} />
    </div>
    </div>
  );
};

export default AddCar;
