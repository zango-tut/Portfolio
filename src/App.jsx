import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Portfolio from './pages/Portfolio'
import './App.css';
import Navbar from './components/Navbar';
import ProjectsPage from './pages/ProjectsPage';


export default function App() {
  return (
    <BrowserRouter >
      <Navbar/>
      <Routes className = 'min-h-screen'>
        <Route path='/Portfolio' element={<Portfolio />} />
        <Route path='/Portfolio/Projects' element={<ProjectsPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}