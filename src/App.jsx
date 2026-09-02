import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Playground from './pages/Playground'; // Pastikan Anda juga memasukkan TopNavBar ini ke dalam Playground.jsx
import Documentation from './pages/Documentation'; // Pastikan Anda juga memasukkan TopNavBar ini ke dalam Documentation.jsx

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="/documentation" element={<Documentation />} />
      </Routes>
    </BrowserRouter>
  );
}