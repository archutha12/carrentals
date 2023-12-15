import React, { useState, useEffect, useRef } from 'react';

const EditCar = () => {
  const qp = new URLSearchParams(window.location.search);
  const [getcar, setcar] = useState('');
  const [carno, setcarno] = useState(qp.get('carno'));
  const [brand, setbrand] = useState(qp.get('brand'));
  const [color, setcolor] = useState(qp.get('color'));
  const [fueltype, setfueltype] = useState(qp.get('fueltype'));
  const [registereddate, setregistereddate] = useState(qp.get('registereddate'));
  const [mileage, setmileage] = useState(qp.get('mileage'));
  const [capacity, setcapacity] = useState(qp.get('capacity'));
  const [cost, setcost] = useState(qp.get('cost'));
  const [image, setimage] = useState(qp.get('image'));

  const carnoRef = useRef();
  const brandRef = useRef();
  const colorRef = useRef();
  const fueltypeRef = useRef();
  const registereddateRef = useRef();
  const mileageRef = useRef();
  const capacityRef = useRef();
  const costRef = useRef();
  const imageRef = useRef();

  const Updatecar = async () => {
    const jsonData = {
      CarNo: carnoRef.current.value,
      Brand: brandRef.current.value,
      Color: colorRef.current.value,
      FuelType: fueltypeRef.current.value,
      Registereddate: registereddateRef.current.value,
      Mileage: mileageRef.current.value,
      Capacity: capacityRef.current.value,
      Cost: costRef.current.value,
      image: imageRef.current.value,
      Status:false
    };


    try {
      const response = await fetch(`https://localhost:7273/api/Adminupdatecar`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(jsonData),
      });

      const userData = await response.json();

      if (userData === 1) {
        console.log('Car updated successfully');
        setcar('Car updated successfully');
      } else {
        console.log('Check the credentials again and fill them');
        setcar('Check the credentials again and fill them');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      alert('Car updation failed. An error occurred.');
    }
  };

  return (
    <div>
      <div>
        <form name="myform">
          <label>Car Number</label>
          <input type="text" name="car number" defaultValue={carno} className="form-control" ref={carnoRef} />

          <label>Brand</label>
          <input type="text" name="brand" defaultValue={brand} className="form-control" ref={brandRef} />

          <label>Color</label>
          <input type="text" name="color" defaultValue={color} className="form-control" ref={colorRef} />

          <label>FuelType</label>
          <input type="text" name="fueltype" defaultValue={fueltype} className="form-control" ref={fueltypeRef} />

          <label>Registered Date</label>
          <input type="date" name="registereddate" defaultValue={registereddate} className="form-control" ref={registereddateRef} />

          <label>Mileage</label>
          <input type="text" name="mileage" defaultValue={mileage} className="form-control" ref={mileageRef} />

          <label>Capacity</label>
          <input type="text" name="capacity" defaultValue={capacity} className="form-control" ref={capacityRef} />

          <label>Cost</label>
          <input type="text" name="cost" defaultValue={cost} className="form-control" ref={costRef} />

          <label>Image</label>
          <input type="text" name="image" defaultValue={image} className="form-control" ref={imageRef} />

          <input type="button" onClick={Updatecar} value="Update Car" className="btn btn-primary" />
        </form>
      </div>
      <label>{getcar}</label>
    </div>
  );
};

export default EditCar;
