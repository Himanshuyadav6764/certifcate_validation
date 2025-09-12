import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import CertificateUpload from './components/CertificateUpload';
import Analytics from './components/Analytics';

export type UserType = 'user' | 'institution' | null;
export type Page = 'landing' | 'login' | 'dashboard' | 'upload' | 'analytics';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [userType, setUserType] = useState<UserType>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (type: UserType) => {
    setUserType(type);
    setIsLoggedIn(true);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserType(null);
    setCurrentPage('landing');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage onNavigateToLogin={() => setCurrentPage('login')} />;
      case 'login':
        return <LoginPage onLogin={handleLogin} onBack={() => setCurrentPage('landing')} />;
      case 'dashboard':
        return (
          <Dashboard
            userType={userType}
            onNavigate={setCurrentPage}
            onLogout={handleLogout}
          />
        );
      case 'upload':
        return (
          <CertificateUpload
            userType={userType}
            onBack={() => setCurrentPage('dashboard')}
            onLogout={handleLogout}
          />
        );
      case 'analytics':
        return (
          <Analytics
            onBack={() => setCurrentPage('dashboard')}
            onLogout={handleLogout}
          />
        );
      default:
        return <LandingPage onNavigateToLogin={() => setCurrentPage('login')} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {renderPage()}
    </div>
  );
}

export default App;