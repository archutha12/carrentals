
import React from 'react';
 
const ContactUs = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ color: 'blue' }}>Contact Us</h2>
      <p>If you have any inquiries or need assistance, we are here to help. Feel free to reach out to us through the following channels:</p>
 
      <div>
        <label style={{ fontWeight: 'bold' }}>Phone Number:</label>
        <span>8008432735</span>
      </div>
 
      <div style={{ marginTop: '20px' }}>
        <h3 style={{ color: 'blue' }}>Visit Us</h3>
        <p style={{ marginBottom: '5px' }}>Rush Cars</p>
        <p>Kundanhalli Metro, Bangalore</p>
        <p>Karnataka, India</p>
        <p>PIN Code: 560037</p>
      </div>
 
      <div style={{ marginTop: '20px' }}>
        <h3 style={{ color: 'blue' }}>Connect Online</h3>
        <p style={{ marginBottom: '5px' }}>Follow us on social media for updates and promotions:RushCars</p>
      </div>
 
      <div style={{ marginTop: '20px' }}>
        <h3 style={{ color: 'blue' }}>Email</h3>
        <p style={{ marginBottom: '5px' }}>Drop us an email at info@rushcars.com for further assistance.</p>
      </div>
 
    </div>
  );
};
 
export default ContactUs;
 