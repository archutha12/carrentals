import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllCarReports = () => {
  const [GetAllcars, setdata] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const qp = new URLSearchParams(window.location.search);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const url = 'https://localhost:7273/api/Admincarslist ';
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.$values);
      setdata(data.$values);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1 className="text-center">Cars List</h1>
      <div className="row">
        {GetAllcars.map((car, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card">
              <img src={car.image} className="card-img-top" alt={car.brand} />
              <div className="card-body">
                <h5 className="card-title">{car.brand}</h5>
                <p className="card-text">carno: {car.carNo}</p>
                <p className="card-text">Color: {car.color}</p>
                <p className="card-text">Capacity: {car.capacity}</p>
                <p className="card-text">Cost: {car.cost}</p>
                <Link
                  to={`/EditCar?carno=${car.carNo} &brand=${car.brand}&color=${car.color}image=${car.image}&brand=${car.brand}&capacity=${car.capacity}&cost=${car.cost}`}
                  className="btn btn-info"
                >
                  Edit Car
                </Link>&nbsp;
                <Link to={`/RemoveCar?bid=${car.bookingid}`} className="btn btn-info">
                 Remove Car
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCarReports;
