import React, { useState } from 'react';
import './PurchasingForm.css';
import SignatureCanvas from 'react-signature-canvas';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PurchasingForm = () => {
  const [formData, setFormData] = useState({
    date: '',
    Devicepur: '',
    Deviceamt: '',
    name: '',
    phoneNo: '',
    email: '',
    Address: '',
    Dl: '',
  });

  const formFields = [
    { name: 'date', label: 'Date:', type: 'date' },
    { name: 'Devicepur', label: 'Device Being Purchased:', type: 'text' },
    { name: 'Deviceamt', label: 'Device Purchased Amount:', type: 'text' },
    { name: 'name', label: 'Name:', type: 'text' },
    { name: 'phoneNo', label: 'Phone No.:', type: 'tel' },
    { name: 'email', label: 'E-mail:', type: 'email' },
    { name: 'Address', label: 'Address:', type: 'text' },
    { name: 'Dl', label: 'Driving License No.:', type: 'text' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    const apiUrl = 'https://mobilecarebackend.onrender.com/sellingform';
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      notify();
      // Reset form data
      setFormData({
        date: '',
        name: '',
        phoneNo: '',
        email: '',
        licenseNumber: '',
        Address: '',
        samemail: '',
        iemail: '',
        pc: '',
        devmo: '',
        Imei: '',
        purprice: '',
        sremail: ''
      });
    } else {
      throw new Error('Failed to submit form');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

  const notify = () => toast("Your form is submitted!");

  return (
    <form onSubmit={handleSubmit} className="purchase-form">
      {formFields.map(field => (
        <div key={field.name} className="form-group">
          <label htmlFor={field.name}>{field.label}</label>
          <input
            type={field.type}
            id={field.name}
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange}
            required
          />
        </div>
      ))}
      <div className="signature-container">
        <label htmlFor="signature">Signature:</label>
        <div style={{ width: 500, height: 200, border: '1px solid #CCC' }}>
          <SignatureCanvas
            canvasProps={{ width: 500, height: 200, className: 'sigCanvas' }}
          />
        </div>
      </div>
      <button type="submit">Submit</button>
      <ToastContainer />
    </form>
  );
};

export default PurchasingForm;
