// App.tsx
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer.tsx';
import LoginPage from './components/LoginPage.tsx';
import SignupPage from './components/SignupPage.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <div className="main-frame">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
