import React, { useEffect, useState } from "react";
import { BlockFooter } from "../BlockFooter";
import { antonia_macris } from "../../assets";
import { motion } from "framer-motion";
import BlockSpeakerProfiles from "../BlockSpeakerProfiles";
import MyNavbar from "../MyNavbar";

const AntoniaMacris: React.FC = () => {
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
                    name="Antonia Macris"
                    title="Manager of Corporate Learning, Environment and Climate Change Canada"
                    biography={`Antonia Macris is an interdisciplinary and trailblazing young professional, holding a Master of Arts in 
                        Educational Technology and Master of Environment from Concordia University, and a Graduate Diploma in Public 
                        Relations and Communications Management from McGill University. She works for the Government of Canada as Manager 
                        of Corporate Learning and Co-Chair of the National Youth Network at Environment and Climate Change Canada. 
                        Her past work experiences include the United Nations Environment Programme and McGill and Concordia Universities, 
                        where she developed student-alumni professional development and experiential learning opportunities. Her 
                        interests focused on advancing global environmental education and sustainable behaviour change communication 
                        across corporate, national and international sectors. Antonia has volunteered with multiple and diverse 
                        organizations for over a decade, including as current President of the Hellenic Initiative Canada Montreal New 
                        Leaders, Youth Secretary of the Hellenic Community of Greater Montreal, Canadian Non-Profit Director of the 
                        National Hellenic Students Association and Board Member of the Hellenic Scholarships Foundation. In 2025, 
                        Antonia was awarded the King Charles III Coronation Medal at the Senate of Canada and the National Assembly 
                        Medal for her youth leadership and community service contributions toward positively shaping the next generation 
                        of leaders across Canada and abroad. `}
                    image={antonia_macris}
                    linkedinAddress="https://www.linkedin.com/in/antoniamacris/"
                    emailAddress=""
                    twitterAddress=""
                />
                <BlockFooter />
            </motion.div>
        </>
    );
};

export default AntoniaMacris;