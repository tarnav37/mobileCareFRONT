import React, { useState } from 'react';
import './PurchasingForm.css';
import SignatureCanvas from 'react-signature-canvas';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const PurchasingForm = () => {
  const navigate = useNavigate();
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
      const apiUrl = 'https://mobilecarebackend.onrender.com/purchaseform'; 
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
          Devicepur: '',
          Deviceamt: '',
          name: '',
          phoneNo: '',
          email: '',
          Address: '',
          Dl: '',
        });

        const downloadResponse = await fetch('https://mobilecarebackend.onrender.com/download', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (downloadResponse.ok) {
          // If download is successful, read the response as blob
          const pdfBlob = await downloadResponse.blob();
          // Create a temporary URL for the blob
          const pdfUrl = URL.createObjectURL(pdfBlob);
          // Open the PDF in a new tab for download
          window.open(pdfUrl);
        } else {
          throw new Error('Failed to download PDF');
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
        navigate('/');
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
      <div className="form-group">
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="Devicepur">Device Being Purchased:</label>
        <input
          type="text"
          id="Devicepur"
          name="Devicepur"
          value={formData.Devicepur}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="Deviceamt">Device Purchased Amount:</label>
        <input
          type="text"
          id="Deviceamt"
          name="Deviceamt"
          value={formData.Deviceamt}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="phoneNo">Phone No.:</label>
        <input
          type="tel"
          id="phoneNo"
          name="phoneNo"
          value={formData.phoneNo}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="Address">Address:</label>
        <input
          type="text"
          id="Address"
          name="Address"
          value={formData.Address}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="Dl">Driving License No.:</label>
        <input
          type="text"
          id="Dl"
          name="Dl"
          value={formData.Dl}
          onChange={handleChange}
          required
        />
      </div>
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
