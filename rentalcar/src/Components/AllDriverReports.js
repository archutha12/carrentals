import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllDriverReports = () => {
  const [GetAllDrivers, setdata] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const qp = new URLSearchParams(window.location.search);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const url = 'https://localhost:7273/api/Admindriverreports    ';
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
      <h1 className="text-center"> Drivers List</h1>
      <div className="row">
        {GetAllDrivers.map((Driver, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card">
              <div className="card-body">
              <p className="card-title">Name: {Driver.name}</p>
                <p className="card-text">Driverid: {Driver.driverid}</p>
                <p className="card-text">DateOfBirth: {Driver.dateOfBirth}</p>
                <p className="card-text">Phoneno: {Driver.phoneno}</p>
                <p className="card-text">Address: {Driver.address}</p>
                <p className="card-text">Licenseno: {Driver.licenseno}</p>
                <Link
                  to={`/EditDriver?driverid=${Driver.driverid} &name=${Driver.name}&dateOfBirth=${Driver.dateOfBirth}&phoneno=${Driver.phoneno}&address=${Driver.address}&licenseno=${Driver.licenseno}`}
                  className="btn btn-info"
                >
                  Edit Driver
                </Link>&nbsp;
                <Link to={`/RemoveDriver?driverid=${Driver.driverid}`} className="btn btn-info">
                 Remove Driver
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllDriverReports;
