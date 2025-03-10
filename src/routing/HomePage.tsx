import React, { useEffect, useState } from "react";
import { BlockFooter } from "../components/BlockFooter"
import { BlockEventMetrics } from "../components/BlockEventMetrics";
import OrkenWorld from "../components/OrkenWorld/OrkenWorld";
import MyNavbar from "../components/MyNavbar";
import BlockEvent from "../components/BlockEvent";
// import BlockLanding from "../components/BlockLanding";

const HomePage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(delay);
  }, []);

  return (
    <>
      <MyNavbar />
      {/* <BlockLanding /> */}
      <BlockEvent />
      <OrkenWorld />
      <BlockEventMetrics />
      <BlockFooter />
    </>
  );
};

export default HomePage;