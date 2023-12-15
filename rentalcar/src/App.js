import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './Components/Login';
import CustomerHome from './Components/CustomerHome';
import CustomerMaster from './Components/CustomerMaster';
import AvailableCarReports from './Components/AvailableCarReports';
import AvailableDriverReports from './Components/AvailableDriverReports';
import BillGen from './Components/BillGen';
import AdminMaster from './Components/AdminMaster';
import AddCar from './Components/AddCar';
import AddDriver from './Components/AddDriver';
import RemoveCar from './Components/RemoveCar';
import RemoveDriver from './Components/RemoveDriver';
import BookedCarReports from './Components/BookedCarReports';
import BookedDriverReports from './Components/BookedDriverReports';
import AllCarReports from './Components/AllCarReports';
import AllDriverReports from './Components/AllDriverReports';
import AdminReports from './Components/AdminReports';
import CustBookedReports from './Components/CustBookedReports';
import EditRide from './Components/EditRide';
import CancelRide from './Components/CancelRide';
import CustEditProfile from './Components/CustEditProfile';
import EditCar from './Components/EditCar';
import EditDriver from './Components/EditDriver';
import ContactUs from './Components/ContactUs';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<AdminMaster />}>
            <Route path="/AddCar" element={<AddCar />} />
            <Route path="/RemoveCar" element={<RemoveCar />} />
            <Route path="/RemoveDriver" element={<RemoveDriver />} />
            <Route path="/AddDriver" element={<AddDriver />} />
            <Route path="/AllCarReports" element={<AllCarReports />} />
            <Route path="/AllDriverReports" element={<AllDriverReports />} />
            <Route path="/BookedCarReports" element={<BookedCarReports />} />
            <Route path="/BookedDriverReports" element={<BookedDriverReports />} />
            <Route path="/AdminReports" element={<AdminReports />} />
            <Route path="/EditCar" element={<EditCar />} />
            <Route path="/EditDriver" element={<EditDriver />} />
          </Route>
          <Route path="/" element={<CustomerMaster />} >
            <Route path="/CustomerHome" index element={<CustomerHome />}></Route>
              <Route path="/AvailableCarReports" element={<AvailableCarReports />} />
              <Route path="/AvailableDriverReports" element={<AvailableDriverReports />} />
              <Route path="/CustBookedReports" element={<CustBookedReports />} />
              <Route path="/CustEditProfile" element={<CustEditProfile />} />
              <Route path="/EditRide" element={<EditRide />} />
              <Route path="/CancelRide" element={<CancelRide />} />
              <Route path="/ContactUs" element={<ContactUs />} />
              <Route path="/BillGen" element={<BillGen />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
