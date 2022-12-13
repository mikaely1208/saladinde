
import './App.css';
import React, { useState } from 'react';
import {Routes, Route} from "react-router-dom"
import Home from './components/home/home';
import Accueil from './components/accueil/accueil';
import Header from './components/Order/header';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route  path='/Accueil' element={<Accueil/>}/>
        <Route  path='/Order' element={<Header/>}/>
      </Routes>
      
    </div>
    
    );
}



export default App;

