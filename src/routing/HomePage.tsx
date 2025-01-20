import React, { useEffect, useState } from "react";
import { BlockFooter } from "../components/BlockFooter"
import { Navigationbar } from "../components/Navigationbar";
import { BlockEventMetrics } from "../components/BlockEventMetrics";
import OrkenWorld from "../components/OrkenWorld/OrkenWorld";
import BlockLanding from "../components/BlockLanding";

const HomePage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const eventStartTime = new Date("2025-02-28T09:00:00-08:00");

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(delay);
  }, []);

  return (
    <>
      <Navigationbar />
      <BlockLanding />
      <OrkenWorld />
      <BlockEventMetrics />
      <BlockFooter />
    </>
  );
};

export default HomePage;