import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage';
import Speakers from './components/SpeakersSection/Speakers';
import "@fontsource/nunito-sans";
import "@fontsource/inter";

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/speakers" element={<Speakers />} />
        
      </Routes>
    </div>
  );
}

export default App;