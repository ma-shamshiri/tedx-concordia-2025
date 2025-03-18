import React, { useEffect, useState } from "react";
import { BlockEventMetrics } from "../components/BlockEventMetrics";
import { BlockFooter } from "../components/BlockFooter"
import { motion } from "framer-motion";
import BlockEvent from "../components/BlockEvent";
import MyNavbar from "../components/MyNavbar";
import OrkenWorld from "../components/OrkenWorld/OrkenWorld";
import BlockHomeEvent from "../components/BlockHomeEvent";

const HomePage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
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
        <MyNavbar />
        <BlockHomeEvent />
        <OrkenWorld />
        <BlockEventMetrics />
        <BlockFooter />
      </motion.div>
    </>
  );
};

export default HomePage;