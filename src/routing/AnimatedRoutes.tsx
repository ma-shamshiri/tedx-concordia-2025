import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { useLocation, Routes, Route } from 'react-router-dom';
import EventPage from "./EventPage";
import HomePage from "./HomePage";
import JoinUsPage from "./JoinUsPage";
import JoinUsSpeakerPage from "./JoinUsSpeakerPage";
import JoinUsSponsorPage from "./JoinUsSponsorPage";
import JoinUsTeamPage from "./JoinUsTeamPage";
import MediaPage from "./MediaPage";
import SpeakersPage from "./SpeakersPage";
import TeamPage from "./TeamPage";
import DoneyliDeJesus from '../components/Speakers/DoneyliDeJesus';
import YsimerGonzalez from '../components/Speakers/YsimerGonzalez';
import AnthonyAndreoli from '../components/Speakers/AnthonyAndreoli';
import RashidaGeddes from '../components/Speakers/RashidaGeddes';
import AntoniaMacris from '../components/Speakers/AntoniaMacris';
import GeoffreyReid from '../components/Speakers/GeoffreyReid';
import AminShamshiri from '../components/TeamMembers/AminShamshiri';
import AdityaThakkar from '../components/TeamMembers/AdityaThakkar';
import DivyanshuJaggi from '../components/TeamMembers/DivyanshuJaggi';
import MahimurRahmanKhan from '../components/TeamMembers/MahimurRahmanKhan';
import MokshSood from '../components/TeamMembers/MokshSood';
import ParamPatel from '../components/TeamMembers/ParamPatel';
import VedantGadhavi from '../components/TeamMembers/VedantGadhavi';

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/photos/" element={<MediaPage />} />
        <Route path="/event/" element={<EventPage />} />
        
        <Route path="/team/" element={<TeamPage />} />
        <Route path="/team/amin-shamshiri" element={<AminShamshiri />} />
        <Route path="/team/aditya-thakkar" element={<AdityaThakkar />} />
        <Route path="/team/divyanshu-jaggi" element={<DivyanshuJaggi />} />
        <Route path="/team/mahimur-rahman-khan" element={<MahimurRahmanKhan />} />
        <Route path="/team/moksh-sood" element={<MokshSood />} />
        <Route path="/team/param-patel" element={<ParamPatel />} />
        <Route path="/team/vedant-gadhavi" element={<VedantGadhavi />} />

        <Route path="/speakers/" element={<SpeakersPage />} />
        <Route path="/speakers/doneyli-de-jesus/" element={<DoneyliDeJesus />} />
        <Route path="/speakers/ysimer-gonzalez/" element={<YsimerGonzalez />} />
        <Route path="/speakers/anthony-andreoli/" element={<AnthonyAndreoli />} />
        <Route path="/speakers/rashida-geddes/" element={<RashidaGeddes />} />
        <Route path="/speakers/antonia-macris/" element={<AntoniaMacris />} />
        <Route path="/speakers/geoffrey-reid/" element={<GeoffreyReid />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
