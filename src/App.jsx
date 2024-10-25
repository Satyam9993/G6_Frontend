import React, { useState } from 'react';
import LoginPage from './pages/LoginPage.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import ProtectedRoute from './assets/utils/ProtectedRoute.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
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
        <Route
          path="/profile"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
    </>
  )
}

export default App; 