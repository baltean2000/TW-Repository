import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './Menu';
import HomePage from './HomePage';
import FormPage from './FormPage';
import ContentPage from './ContentPage';
import LoginForm from './LoginForm'

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/content" element={<ContentPage />} />
        <Route path="/login" element={<LoginForm/>} />
      </Routes>
    </Router>
  );
}

export default App;
