import { useState } from 'react';
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

  const handleLogin = (type: UserType) => {
    setUserType(type);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
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
        return userType ? (
          <Dashboard
            userType={userType}
            onNavigate={(page: string) => setCurrentPage(page as Page)}
            onLogout={handleLogout}
          />
        ) : null;
      case 'upload':
        return userType ? (
          <CertificateUpload
            userType={userType}
            onBack={() => setCurrentPage('dashboard')}
            onLogout={handleLogout}
          />
        ) : null;
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