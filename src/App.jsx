import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Playground from './pages/Playground'; 
import Documentation from './pages/Documentation';
import Igd from './pages/Igd';
import Ralan from './pages/Ralan';
import Ranap from './pages/Ranap';
import Farmasi from './pages/Farmasi';
import Lab from './pages/Lab';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/igd" element={<Igd />} />
        <Route path="/ralan" element={<Ralan />} />
        <Route path="/ranap" element={<Ranap />} />
        <Route path="/farmasi" element={<Farmasi />} />
        <Route path="/lab" element={<Lab />} />
      </Routes>
    </BrowserRouter>
  );
}