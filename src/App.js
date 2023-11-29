import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from './UserContext';
import LoginComponent from './LoginComponent';
import SignupComponent from './SignupComponent';
import HomeComponent from './Home';

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/signup" element={<SignupComponent />} />
          <Route path="/" element={<HomeComponent />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
