import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Toaster } from 'react-hot-toast';
 
const App = () => {
  return (
    <BrowserRouter>
    <Toaster position="top-center" reverseOrder={false}/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
