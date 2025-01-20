import React, { useState, useRef } from "react";
import "./ContractForm.css";
import SignatureCanvas from "react-signature-canvas";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const ContractForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    date: "",
    name: "",
    phoneNo: "",
    email: "",
    licenseNumber: "",
    Address: "",
    samemail: "",
    iemail: "",
    pc: "",
    devmo: "",
    Imei: "",
    Deviceamt: "",
    signature: "", // Added signature field
  });

  const signatureCanvasRef = useRef({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSaveSignature = () => {
    const signatureData = signatureCanvasRef.current.toDataURL();
    setFormData((prevState) => ({
      ...prevState,
      signature: signatureData,
    }));
    console.log("Signature Data:", signatureData);
  };

  const handleClearSignature = () => {
    signatureCanvasRef.current.clear();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const apiUrl = "https://mobilecarebackend.onrender.com/sellingform";
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        notify();
        setFormData({
          date: "",
          name: "",
          phoneNo: "",
          email: "",
          licenseNumber: "",
          Address: "",
          samemail: "",
          iemail: "",
          pc: "",
          devmo: "",
          Imei: "",
          Deviceamt: "",
          signature: "", // Clear signature field
        });

        const downloadResponse = await fetch(
          "https://mobilecarebackend.onrender.com/downloadselling",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        if (downloadResponse.ok) {
          const pdfBlob = await downloadResponse.blob();
          const pdfUrl = URL.createObjectURL(pdfBlob);
          const downloadLink = document.createElement("a");
          downloadLink.href = pdfUrl;
          downloadLink.download = "downloaded_file.pdf";
          document.body.appendChild(downloadLink);
          downloadLink.click();
          document.body.removeChild(downloadLink);
        } else {
          throw new Error("Failed to download PDF");
        }
        window.scrollTo({ top: 0, behavior: "smooth" });
        navigate("/");
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const notify = () => toast("Your form is submitted!");

  return (
    <form onSubmit={handleSubmit} className="contract-form">
      <div className="care-form">
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
      <div className="care-form">
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
      <div className="care-form">
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
      <div className="care-form">
        <label htmlFor="email">E-mail:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="care-form">
        <label htmlFor="licenseNumber">Driver License Number:</label>
        <input
          type="text"
          id="licenseNumber"
          name="licenseNumber"
          value={formData.licenseNumber}
          onChange={handleChange}
          required
        />
      </div>
      <div className="care-form">
        <label htmlFor="location">Location:</label>
        <select
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Select a location
          </option>
          <option value="Augusta">Augusta</option>
          <option value="Perimeter">Perimeter</option>
          <option value="Cumberland">Cumberland</option>
          <option value="Southlake">Southlake</option>
          <option value="Lynnhaven">Lynnhaven</option>
          <option value="Carolina Place">Carolina Place</option>
        </select>
      </div>
      <div className="care-form">
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
      <div className="care-form">
        <label htmlFor="samemail">
          I-Cloud E-mail / Samsung E-mail (Optional):
        </label>
        <input
          type="text"
          id="samemail"
          name="samemail"
          value={formData.samemail}
          onChange={handleChange}
        />
      </div>
      <div className="care-form">
        <label htmlFor="iemail">
          I-Cloud PasssCode / Samsung Passcode (Optional):
        </label>
        <input
          type="text"
          id="iemail"
          name="iemail"
          value={formData.iemail}
          onChange={handleChange}
        />
      </div>
      <div className="care-form">
        <label htmlFor="pc">Phone Passcode (Optional):</label>
        <textarea
          id="pc"
          name="pc"
          value={formData.pc}
          onChange={handleChange}
        />
      </div>
      <div className="care-form">
        <label htmlFor="devmo">Device Model:</label>
        <textarea
          id="devmo"
          name="devmo"
          value={formData.devmo}
          onChange={handleChange}
          required
        />
      </div>
      <div className="care-form">
        <label htmlFor="Imei">IMEI No. / Serial No.</label>
        <textarea
          id="Imei"
          name="Imei"
          value={formData.Imei}
          onChange={handleChange}
          required
        />
      </div>
      <div className="care-form">
        <label htmlFor="Deviceamt">Device Amount:</label>
        <textarea
          id="Deviceamt"
          name="Deviceamt"
          value={formData.Deviceamt}
          onChange={handleChange}
          required
        />
      </div>
      <div className="signature-container">
        <label htmlFor="signature">Signature:</label>
        <div style={{ width: 700, height: 300, border: "1px solid #CCC" }}>
          <SignatureCanvas
            ref={signatureCanvasRef}
            canvasProps={{ width: 700, height: 300, className: "sigCanvas" }}
          />
        </div>
        <div className="signature-buttons">
          <button type="button" onClick={handleSaveSignature}>
            Save
          </button>
          <button type="button" onClick={handleClearSignature}>
            Clear
          </button>
        </div>
      </div>
      <button type="submit">Submit</button>
      <ToastContainer />
    </form>
  );
};

export default ContractForm;
