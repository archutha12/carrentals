import React, { useEffect, useState } from 'react';
import { Link, json, useNavigate } from 'react-router-dom';

const AvailableDriverReports = () => {
  const [GetAvailableDrivers, setdata] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const qp = new URLSearchParams(window.location.search);
  const navigate = useNavigate();
  const cardata={
    carnum :qp.get('carnum'),
    cost : qp.get('cost')
  }
  useEffect(() => {
    fetchData();
  }, []);

 sessionStorage.setItem('cardata',JSON.stringify(cardata))
 const data = JSON.parse(sessionStorage.getItem('cardata'));
 console.log(data)

  const fetchData = async () => {
    const url = 'https://localhost:7273/api/availableDrivers ';
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
      <h1 className="text-center">Recommended Drivers</h1>
      <div className="row">
        {GetAvailableDrivers.map((Driver, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card">
              <div className="card-body">
                <p className="card-text">Driverid: {Driver.driverid}</p>
                <p className="card-text">Name: {Driver.name}</p>
                <p className="card-text">DateOfBirth: {Driver.dateOfBirth}</p>
                <p className="card-text">Phoneno: {Driver.phoneno}</p>
                <p className="card-text">Address: {Driver.address}</p>
                <p className="card-text">Licenseno: {Driver.licenseno}</p>
                <Link to={`/BillGen?driverid=${Driver.driverid}`}  className="btn btn-info">
                  Submit
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableDriverReports;
