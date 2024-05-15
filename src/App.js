import React from 'react'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Footer from './component/footer'
import Financing from './component/Financing'
import Purchasing from './component/Purchasing'
import Contract from './component/Contract'
import Repair from './component/Repair'
import Loginpage from './component/LoginPage'
import { Routes,Route } from 'react-router-dom'
import ExcelSheetPage from "./component/ExcelSheetPage";
import Insurance from './component/Insurance'
import Network from './component/Network'
const App = () => {
  
  return (
     
    <div>
     
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/financing' element={<Financing/>}/>
      <Route path='/purchasing' element={<Purchasing/>}/>
      <Route path='/contract' element={<Contract/>}/>
      <Route path='/repair' element={<Repair/>}/>
      <Route path='/login' element={<Loginpage/>}/>
      <Route path="/excel-form" element={<ExcelSheetPage />} />
      <Route path='/insurance' element={<Insurance />} /> {/* Add this route */}
        <Route path='/network' element={<Network />} /> 
    </Routes>
    <Footer/>
    
    </div>
  )
}

export default App;
