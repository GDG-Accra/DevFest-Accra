import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import "@fontsource/nunito-sans";
import "@fontsource/inter";
import FAQs from "./pages/FAQsPage/ FAQs";
import DPPage from "./pages/DPPage/DPPage";
import SpeakerPage from "./pages/SpeakersPage/SpeakerPage";
import TeamPage from "./pages/TeamPage/TeamPage";
import DPForm from "./pages/DPPage/DPForm";
// import MainPage from "./pages/MainPage/MainPage";


const App: React.FC = () => {
  return (
    <div>
      <Routes>

        {/* Home section  */}
        <Route path="/" element={<HomePage />} />

        {/* Speaaker section  */}
        <Route path="/devfest/speakers" element={<SpeakerPage />} />

        {/* FAQs section  */}
        <Route path="/devfest/faqs" element={<FAQs />} />

        {/* Teams section  */}
        <Route path="/devfest/teams" element={<TeamPage />} />

        {/* DP section  */}
        <Route path="/devfest/dp-generator" element={<DPPage />} />

        {/*DP Form */}
        <Route path="/DPForm" element={<DPForm/>}/>
      </Routes>
    </div>
  );
};

export default App;
