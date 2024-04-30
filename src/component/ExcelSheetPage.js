import React, { useState, useEffect } from "react";
import "./ExcelSheetPage.css"; 
import logo from "../Images/Logo.png";

const ExcelSheetPage = () => {
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
    balance: ""
  });

  const [rows, setRows] = useState([]);
  const [showReminder, setShowReminder] = useState(true);
  const [selectedRow, setSelectedRow] = useState(null);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://mobilecarebackend.onrender.com/repairform", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        console.log("Form data submitted successfully");
        // After successful submission, fetch updated data
        fetchData();
      } else {
        throw new Error("Failed to submit form data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
    // Reset form data
    setFormData({
      date: "",
      deviceModel: "",
      customerName: "",
      phoneNumber: "",
      partOrder: "",
      technicianName: "",
      status: "",
      deposit: "",
      totalAmount: "",
      balance: ""
    });
  };

  const fetchData = async () => {
    try {
      const response = await fetch("https://mobilecarebackend.onrender.com/repairdata");
      if (response.ok) {
        const data = await response.json();
        setRows(data.repairData || []);
      } else {
        throw new Error("Failed to fetch repair data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []); 

  const handleReminderPopup = (row) => {
    setSelectedRow(row);
    setShowReminder(true);
  };

  // Function to close reminder popup
  const closeReminderPopup = () => {
    setShowReminder(false);
    setSelectedRow(null);
  };

  return (
    <div className="excel-sheet">
      <a className="logo" target="_blank" href="/">
        <img src={logo} alt="" />
      </a>
      <div className="rep" style={{ textAlign: "center" }}>
        <h1>Repair Status Sheet</h1>
        <br />
      </div>
      <form onSubmit={handleSubmit} className="edit-sheet">
        <div className="group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>
        <div className="group">
          <label htmlFor="deviceModel">Device Model:</label>
          <input
            type="text"
            id="deviceModel"
            name="deviceModel"
            value={formData.deviceModel}
            onChange={handleChange}
          />
        </div>
        <div className="group">
          <label htmlFor="customerName">Customer Name:</label>
          <input
            type="text"
            id="customerName"
            name="customerName"
            value={formData.customerName}
            onChange={handleChange}
          />
        </div>
        <div className="group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className="group">
          <label htmlFor="partOrder">Part Order:</label>
          <input
            type="text"
            id="partOrder"
            name="partOrder"
            value={formData.partOrder}
            onChange={handleChange}
          />
        </div>
        <div className="group">
          <label htmlFor="technicianName">Technician Name:</label>
          <input
            type="text"
            id="technicianName"
            name="technicianName"
            value={formData.technicianName}
            onChange={handleChange}
          />
        </div>
        <div className="group">
          <label htmlFor="status">Status:</label>
          <input
            type="text"
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
          />
        </div>
        <div className="group">
          <label htmlFor="deposit">Deposit:</label>
          <input
            type="number"
            id="deposit"
            name="deposit"
            value={formData.deposit}
            onChange={handleChange}
          />
        </div>
        <div className="group">
          <label htmlFor="totalAmount">Total Amount:</label>
          <input
            type="number"
            id="totalAmount"
            name="totalAmount"
            value={formData.totalAmount}
            onChange={handleChange}
          />
        </div>
        <div className="group">
          <label htmlFor="balance">Balance:</label>
          <input
            type="number"
            id="balance"
            name="balance"
            value={formData.balance}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add Data</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Device Model</th>
            <th>Customer Name</th>
            <th>Phone Number</th>
            <th>Part Order</th>
            <th>Technician Name</th>
            <th>Status</th>
            <th>Deposit</th>
            <th>Total Amount</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {rows.length > 0 && rows.map((row, index) => (
            row.date && row.deviceModel && row.customerName && row.phoneNumber && row.partOrder && row.technicianName && row.status && row.deposit && row.totalAmount && row.balance ? (
              <tr key={index}>
                <td>{row.date}</td>
                <td>{row.deviceModel}</td>
                <td>{row.customerName}</td>
                <td>{row.phoneNumber}</td>
                <td>{row.partOrder}</td>
                <td>{row.technicianName}</td>
                <td>
                    {row.status === "Pending" || row.status == "pending" && (
                      <button  className = "rem-button"onClick={() => handleReminderPopup(row)}>Pending</button>
                    )}
                    {row.status !== "Pending" && row.status}
                  </td>
                <td>{row.deposit}</td>
                <td>{row.totalAmount}</td>
                <td>{row.balance}</td>
              </tr>
            ) : null
          ))}
        </tbody>
      </table>
      {showReminder && selectedRow && (
        <div className="reminder-popup">
          <div className="reminder-content">
            <h3>Reminder: Pending Status</h3>
            <p>Don't forget to follow up on the repair with:</p>
            <p>Customer Name: {selectedRow.customerName}</p>
            <p>Phone Number: {selectedRow.phoneNumber}</p>
            <button onClick={closeReminderPopup}>Close</button>
          </div>
        </div>
        )}
    </div>
  );
};

export default ExcelSheetPage;
