import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import "@fontsource/nunito-sans";
import "@fontsource/inter";
import FAQs from "./pages/FAQsPage/ FAQs";
import Speakers from "./pages/SpeakersPage/Speakers";
import TeamPage from "./pages/TeamPage/TeamPage";

const App: React.FC = () => {
  return (
    <div>
      <Routes>
         {/* Home section  */}
        <Route path='/' element={<HomePage />} />
        {/* Speaaker section  */}
        <Route path='/devfest/speakers' element={<Speakers />} />

        {/* FAQs section  */}
        <Route path='/devfest/faqs' element={<FAQs />} />

        {/* Teams section  */}
        <Route path='/devfest/teams' element={<TeamPage />} />

        {/* DP section  */}
      </Routes>
    </div>
  );
};

export default App;
