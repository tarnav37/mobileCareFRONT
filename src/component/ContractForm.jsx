import React, { useState } from 'react';
import './ContractForm.css'; // Import your CSS file
import SignatureCanvas from 'react-signature-canvas'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContractForm = () => {
  const [signature, setSignature] = useState();
  const [result, setResult] = useState();
  
  const clearHandler = () => {
    if (signature) {
      signature.clear();
      setResult(null);
    }
  };
  
  const saveHandler = () => {
    if (signature) {
      const res = signature.getTrimmedCanvas().toDataURL('image/png');
      setResult(res);
    }
  };
  
  const notify = () => toast("Your form is submitted!");

  const [formData, setFormData] = useState({
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
    sremail: '',
    Devicepur: '',
    Deviceamt: '',
    Dl: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
        sremail: '',
        Devicepur: '',
        Deviceamt: '',
        Dl: ''
      });
      // Clear signature
      clearHandler();
      
      // Make a POST request to download the PDF
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
    } else {
      throw new Error('Failed to submit form');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};


  return (
    <form onSubmit={handleSubmit} className="contract-form">
      <div className="care-form">
        <label htmlFor="date">Date:</label>
        <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required />
      </div>
      <div className="care-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required/>
      </div>
      <div className="care-form">
        <label htmlFor="phoneNo">Phone No.:</label>
        <input type="tel" id="phoneNo" name="phoneNo" value={formData.phoneNo} onChange={handleChange} required/>
      </div>
      <div className="care-form">
        <label htmlFor="email">E-mail:</label>
        <input type="text" id="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div className="care-form">
        <label htmlFor="licenseNumber">Driver License Number:</label>
        <input type="text" id="licenseNumber" name="licenseNumber" value={formData.licenseNumber} onChange={handleChange} required />
      </div>
      <div className="care-form">
        <label htmlFor="Address">Address:</label>
        <input type="text" id="Address" name="Address" value={formData.Address} onChange={handleChange} required/>
      </div>
      <div className="care-form">
        <label htmlFor="samemail">I-Cloud E-mail / Samsung E-mail (Optional):</label>
        <input type="text" id="samemail" name="samemail" value={formData.samemail} onChange={handleChange} />
      </div>
      <div className="care-form">
        <label htmlFor="iemail">I-Cloud PasssCode / Samsung Passcode (Optional):</label>
        <input type="text" id="iemail" name="iemail" value={formData.iemail} onChange={handleChange} />
      </div>
      <div className="care-form">
        <label htmlFor="pc">Phone Passcode (Optional):</label>
        <textarea id="pc" name="pc" value={formData.pc} onChange={handleChange}  />
      </div>
      <div className="care-form">
        <label htmlFor="devmo">Device Model:</label>
        <textarea id="devmo" name="devmo" value={formData.devmo} onChange={handleChange} required/>
      </div>
      <div className="care-form">
        <label htmlFor="Imei">IMEI No. / Serial No.</label>
        <textarea id="Imei" name="Imei" value={formData.Imei} onChange={handleChange} required/>
      </div>
      <div className="care-form">
        <label htmlFor="purprice">Purchase Price:</label>
        <textarea id="purprice" name="purprice" value={formData.purprice} onChange={handleChange} required />
      </div>
      <div className="care-form">
        <label htmlFor="sremail">Sales Representative E-mail Id:</label>
        <textarea id="sremail" name="sremail" value={formData.sremail} onChange={handleChange} required />
      </div>
      <div className="care-form">
        <label htmlFor="Devicepur">Device Purchase:</label>
        <textarea id="Devicepur" name="Devicepur" value={formData.Devicepur} onChange={handleChange} required />
      </div>
      <div className="care-form">
        <label htmlFor="Deviceamt">Device Amount:</label>
        <textarea id="Deviceamt" name="Deviceamt" value={formData.Deviceamt} onChange={handleChange} required />
      </div>
      <div className="care-form">
        <label htmlFor="Dl">Dl:</label>
        <textarea id="Dl" name="Dl" value={formData.Dl} onChange={handleChange} required />
      </div>
      <div className="signature-container">
        <label htmlFor="signature">Signature:</label>
        <div style={{ width: 500, height: 200, border: '1px Solid #CCC' }}>
          <SignatureCanvas 
            ref={(ref) => setSignature(ref)}
            pencolor='Black'
            backgroundColor= "rgba(255,255,255,1)"
            canvasProps={{ width: 500, height: 200, className: 'sigCanvas' }}
          />
        </div>
        <button onClick={clearHandler}>Clear</button>
        <button onClick={saveHandler}>Save</button>
        {result && (
          <div>
            <img src={result} alt="Signature"/>
          </div>
        )}
      </div>
      <button type="submit">Submit</button>
      <ToastContainer />
    </form>
  );
};

export default ContractForm;
