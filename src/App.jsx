import React, { useEffect, useState } from 'react';
import LoginPage from './pages/LoginPage.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import ProtectedRoute from './utils/ProtectedRoute.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const token = useSelector(state => state.user.token);

  return (
    <>
      {/* <Login/> */}
      <Router>
        <Routes>
          {/* Public Pages */}
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/"
            element={
              <ProtectedRoute isAuthenticated={!!token}>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute isAuthenticated={!!token}>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App; 