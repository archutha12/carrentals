import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AvailableCarReports = () => {
  const [GetAvailablecars, setdata] = useState([]);
  const qp = new URLSearchParams(window.location.search);
  const navigate = useNavigate();
 
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const url = 'https://localhost:7273/api/availablecars';
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
      <h1 className="text-center">Recommended cars for you</h1>
      <div className="row">
        {GetAvailablecars.map((car, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card">
              <img src={car.image} className="card-img-top" alt={car.brand} />
              <div className="card-body">
                <h5 className="card-title">Brand: {car.brand}</h5>
                <p className="card-text">Color: {car.color}</p>
                <p className="card-text">Capacity: {car.capacity}</p>
                <p className="card-text">Cost: {car.cost}</p>
                <Link to={`/AvailableDriverReports?carnum=${car.carNo}&cost=${car.cost}`} className="btn btn-info">
                  View Driver
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableCarReports;
