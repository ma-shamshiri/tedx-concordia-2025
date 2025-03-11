import React, { useEffect, useState } from "react";
import { BlockFooter } from "../BlockFooter";
import { geoffrey_reid2 } from "../../assets";
import { motion } from "framer-motion";
import BlockSpeakerProfiles from "../BlockSpeakerProfiles";
import MyNavbar from "../MyNavbar";

const GeoffreyReid: React.FC = () => {
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
                <BlockSpeakerProfiles
                    name="Geoffrey M. Reid"
                    title="CEO | Consultant | Professor | Author | Speaker"
                    biography={`Geoffrey Reid began his career over thirty years ago as a public policy analyst in the Canadian Public Service after completing an undergraduate degree from Bishop’s University. In recent years, he has been serving as a CEO for a private multinational company with fifty locations around the world and is a global leader in business events and sales. In between, Geoffrey added a master’s degree, pursued doctoral studies, and worked as a self-employed mediator, trainer, and consultant for both public and private sector clients. In the five years that preceded his career shift to sales, Geoffrey also worked as an adjunct professor with the School of Graduate Studies at Concordia University in Montreal, Canada, teaching negotiation, mediation, and conflict resolution at the master’s level. Geoffrey began his sales career in Montreal in the year 2000 in a junior sales position, with the primary objective of learning sales—something he knew nothing about at the time. At the end of his first full year in sales, Geoffrey had generated more new personal sales revenue than any other employee in North America. Shortly thereafter, he entered management, and rose through the ranks to take local then national responsibility for all offices in Canada. In 2014, he was given international responsibilities and moved to global headquarters in London UK to accept a chief executive officer position, taking approximately one hundred flights per year to support offices in Asia, Europe and North America. His most satisfying contribution is having hired and/or developed, directly or indirectly, many of the current top sales performers, managers, and directors. Much of this satisfaction comes from Geoffrey having had the opportunity to share skill sets that have allowed his employees to generate top-end incomes for their own benefit and that of their families. Since the pandemic, Geoffrey has returned home to Montreal to play similar roles and to share more broadly what he has learned in his quarter-century sales career to help make up for the lack of sales education that exists in most business schools and elsewhere.`}
                    image={geoffrey_reid2}
                    linkedinAddress="https://www.linkedin.com/in/geoffrey-reid-b073111"
                    emailAddress=""
                    twitterAddress=""
                />
                <BlockFooter />
            </motion.div>
        </>
    );
};

export default GeoffreyReid;