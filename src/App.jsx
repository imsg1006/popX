import React, { useState } from 'react';
import LandingPage from '../src/pages/LandingPage';
import LoginPage from '../src/pages/LoginPage';
import SignupPage from '../src/pages/SignUpPaage';
import AccountSettingsPage from '../src/pages/AccountSettings';

export default function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage onNavigate={setCurrentPage} />;
      case 'login':
        return <LoginPage onNavigate={setCurrentPage} />;
      case 'signup':
        return <SignupPage onNavigate={setCurrentPage} />;
      case 'account':
        return <AccountSettingsPage onNavigate={setCurrentPage} />;
      default:
        return <LandingPage onNavigate={setCurrentPage} />;
    }
  };

  return <div className="font-sans">{renderPage()}</div>;
}