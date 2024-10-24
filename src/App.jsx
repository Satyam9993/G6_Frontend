import React, { useState } from 'react';
import LoginPage from './pages/LoginPage.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import ProtectedRoute from './assets/utils/ProtectedRoute.jsx';
import RegisterPage from './pages/RegisterPage.jsx';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <>
    {/* <Login/> */}
    <Router>
      <Routes>
        {/* Public Pages */}
        <Route path="/register" element={<RegisterPage setAuth={setIsAuthenticated} />} />
        <Route path="/login" element={<LoginPage setAuth={setIsAuthenticated} />} />
        <Route
          path="/"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <HomePage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
    </>
  )
}

export default App; 