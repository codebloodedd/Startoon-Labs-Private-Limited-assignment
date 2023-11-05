import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import logo from "./assets/companyLogo.png";
import './App.css'
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PatientInfo from './pages/patientInfo';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/patient/:id" element={<PatientInfo/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
