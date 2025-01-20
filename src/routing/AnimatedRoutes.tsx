import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { useLocation, Routes, Route } from 'react-router-dom';
import Aarya from '../components/TeamMembers2025/Aarya';
import Aastha from '../components/TeamMembers2025/Aastha';
import Akash from '../components/TeamMembers2025/Akash';
import Amin from '../components/TeamMembers2025/Amin';
import Amir from '../components/TeamMembers2025/Amir';
import Faraz from '../components/TeamMembers2025/Faraz';
import Haard from '../components/TeamMembers2025/Haard';
import Harshit from '../components/TeamMembers2025/Harshit';
import Javan from '../components/TeamMembers2025/Javan';
import Khushi from '../components/TeamMembers2025/Khushi';
import Parinaz from '../components/TeamMembers2025/Parinaz';
import Sanjana from '../components/TeamMembers2025/Sanjana';
import Shreya from '../components/TeamMembers2025/Shreya';
import EventPage from "./EventPage";
import HomePage from "./HomePage";
import JoinUsPage from "./JoinUsPage";
import JoinUsSpeakerPage from "./JoinUsSpeakerPage";
import JoinUsSponsorPage from "./JoinUsSponsorPage";
import JoinUsTeamPage from "./JoinUsTeamPage";
import MediaPage from "./MediaPage";
import SpeakersPage from "./SpeakersPage";
import TeamPage from "./TeamPage";

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/photos/" element={<MediaPage />} />
        <Route path="/event/" element={<EventPage />} />
        <Route path="/joinus/" element={<JoinUsPage />} />
        <Route path="/joinus/team/" element={<JoinUsTeamPage />} />
        <Route path="/joinus/speaker/" element={<JoinUsSpeakerPage />} />
        <Route path="/joinus/sponsor/" element={<JoinUsSponsorPage />} />
        <Route path="/speakers/" element={<SpeakersPage />} />
        <Route path="/team/" element={<TeamPage />} />
        <Route path="/team/aarya-sadhwani/" element={<Aarya />} />
        <Route path="/team/aastha-malhotra/" element={<Aastha />} />
        <Route path="/team/akash-balaji/" element={<Akash />} />
        <Route path="/team/mohammad-amin-shamshiri/" element={<Amin />} />
        <Route path="/team/amirmohammad-tayeban/" element={<Amir />} />
        <Route path="/team/faraz-khorsandi/" element={<Faraz />} />
        <Route path="/team/haard-pathak/" element={<Haard />} />
        <Route path="/team/harshit-maann/" element={<Harshit />} />
        <Route path="/team/javan-chhatwal/" element={<Javan />} />
        <Route path="/team/khushi-shah/" element={<Khushi />} />
        <Route path="/team/parinaz-beigi/" element={<Parinaz />} />
        <Route path="/team/sanjana-ravi/" element={<Sanjana />} />
        <Route path="/team/shreya-pradhan/" element={<Shreya />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
