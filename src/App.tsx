import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { TransactionProvider } from './context/TransactionContext';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Sobre from './pages/Sobre';
import Login from './pages/Login';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <TransactionProvider>
      <Router>
        <header className="app-header">
          <nav className="navbar">
            <Link to="/" className="header-link">Início</Link>
            <Link to="/dashboard" className="header-link">Dashboard</Link>
            <Link to="/sobre" className="header-link">Sobre</Link>
            {isAuthenticated ? (
              <Link to="/" onClick={handleLogout} className="header-link">Deslogar</Link>
            ) : (
              <Link to="/login" className="header-link">Login</Link>
            )}
          </nav>
        </header>
        <main className="app-content">
          <Routes>
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/sobre" element={<Sobre />} />
          </Routes>
        </main>
      </Router>
    </TransactionProvider>
  );
}

export default App;
