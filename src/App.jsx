import React, { useState } from 'react'
import Login from './pages/LoginAndRegister.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import ProtectedRoute from './utils/ProtectedRoute.jsx';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <>
    {/* <Login/> */}
    <Router>
      <Routes>
        {/* Public Pages */}
        <Route path="/login" element={<Login setAuth={setIsAuthenticated} />} />
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