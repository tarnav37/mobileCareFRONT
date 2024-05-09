import React, { useState, useRef } from "react";
import "./RepairForm.css"; // Import your CSS file
import SignatureCanvas from "react-signature-canvas";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const RepairForm = () => {
  const navigate = useNavigate();
  const notify = () => toast("Your form is submitted!");

  const [formData, setFormData] = useState({
    date: "",
    deviceModel: "",
    customerName: "",
    phoneNumber: "",
    partOrder: "",
    technicianName: "",
    status: "",
    deposit: "",
    totalAmount: "",
    balance: "",
  });
  const signatureCanvasRef = useRef({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSaveSignature = () => {
    const signatureData = signatureCanvasRef.current.toDataURL();
    // Do something with the signature data, like save it to the form data
    console.log("Signature Data:", signatureData);
  };

  const handleClearSignature = () => {
    signatureCanvasRef.current.clear();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://mobilecarebackend.onrender.com/repairform",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        notify();
        // Make a POST request to download the PDF
        const downloadResponse = await fetch(
          "https://mobilecarebackend.onrender.com/download",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        if (downloadResponse.ok) {
          // If download is successful, read the response as blob
          const pdfBlob = await downloadResponse.blob();
          // Create a temporary URL for the blob
          const pdfUrl = URL.createObjectURL(pdfBlob);
          // Open the PDF in a new tab for download
          const downloadLink = document.createElement("a");
          // Set the href attribute of the link to the temporary URL
          downloadLink.href = pdfUrl;
          // Set the download attribute to specify the filename for the downloaded file
          downloadLink.download = "downloaded_file.pdf";
          // Append the link to the document body
          document.body.appendChild(downloadLink);
          // Simulate a click event on the link to trigger the download
          downloadLink.click();
          // Remove the link from the document body
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

  return (
    <form onSubmit={handleSubmit} className="repair-form">
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
        <label htmlFor="deviceModel">Device Model:</label>
        <input
          type="text"
          id="deviceModel"
          name="deviceModel"
          value={formData.deviceModel}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="customerName">Customer Name:</label>
        <input
          type="text"
          id="customerName"
          name="customerName"
          value={formData.customerName}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="partOrder">Part Order:</label>
        <select
          id="partOrder"
          name="partOrder"
          value={formData.partOrder}
          onChange={handleChange}
        >
          <option value="">Part Order</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="technicianName">
          Technician Name (Technician Only):
        </label>
        <input
          type="text"
          id="technicianName"
          name="technicianName"
          value={formData.technicianName}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="beingrepair">
          What is being repaired ? (Technician Only):
        </label>
        <input
          type="text"
          id="beingrepair"
          name="beingrepair"
          value={formData.beingrepair}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="status">Status (Technician Only):</label>
        <select
          id="status"
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="">Choose Status</option>
          <option value="Complete">Complete</option>
          <option value="Pending">Pending</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="deposit">Deposit:</label>
        <input
          type="text"
          id="deposit"
          name="deposit"
          value={formData.deposit}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="totalAmount">Total Amount:</label>
        <input
          type="text"
          id="totalAmount"
          name="totalAmount"
          value={formData.totalAmount}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="balance">Balance:</label>
        <input
          type="text"
          id="balance"
          name="balance"
          value={formData.balance}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="notes">Additional Notes (If Any):</label>
        <input
          type="text"
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
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

export default RepairForm;
