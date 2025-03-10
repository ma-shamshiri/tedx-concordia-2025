import React, { useEffect, useState } from "react";
import { aasthaNoBG, aminBadge } from "../../assets";
import { BlockFooter } from "../BlockFooter";
import { BlockTeamProfiles } from "../BlockTeamProfiles";
import { FaComputer } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Navigationbar } from "../Navigationbar";
import { useTranslation } from "react-i18next";

const Aastha: React.FC = () => {
  const { t } = useTranslation();

  const [boxLoaded, setBoxLoaded] = useState(false);

  const handleBoxLoad = () => {
    setBoxLoaded(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        onAnimationComplete={handleBoxLoad}
      >
        <Navigationbar />
        <BlockTeamProfiles
          firstName="Aastha"
          lastName="Malhotra"
          fullName="Aastha Malhotra"
          title="Coming soon.."
          role="Sponsorship and Outreach Manager"
          imageSrc={aasthaNoBG}
          badgeSrc={aminBadge}
          linkedinHref="https://ca.linkedin.com/"
          twitterHref="https://twitter.com/"
          tedHref="https://www.instagram.com/"
          quoteText={t("Coming soon.. Stay tuned for an intriguing biography!")}
          icon={FaComputer}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

export default Aastha;
