import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SettingsPage from './components/SettingsPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Главная страница с Widget */}
        <Route path="/" element={<HomePage />} />

        {/* Страница настроек */}
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
