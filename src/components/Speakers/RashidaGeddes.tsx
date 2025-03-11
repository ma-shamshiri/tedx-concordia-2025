import React, { useEffect, useState } from "react";
import { BlockFooter } from "../BlockFooter";
import { rashida_geddes } from "../../assets";
import { motion } from "framer-motion";
import BlockSpeakerProfiles from "../BlockSpeakerProfiles";
import MyNavbar from "../MyNavbar";

const RashidaGeddes: React.FC = () => {
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
                    name="Rashida Geddes"
                    title="Leadership & Career Coach and Senior Talent Leader"
                    biography={`Rashida Geddes is a Leadership & Career Coach and Senior Talent Leader committed to helping 
                        professionals overcome barriers, clarify goals, and unlock their potential! She has partnered with 
                        organizations like BMO, Bell, Meta, and HP to find, engage, and hire top talent. Her insights have 
                        been featured on Bell TV1, Rogers, and CBC Canada, as well as at Harvard Business School, where she 
                        empowers Millennials and Gen Z to own their brilliance and leverage their lived experiences. 
                        Through her coaching, speaking, and training, Rashida is shaping the next generation of leaders to 
                        create meaningful impact in their careers and organizations.`}
                    image={rashida_geddes}
                    linkedinAddress="https://www.linkedin.com/in/rashidageddes"
                    emailAddress=""
                    twitterAddress=""
                />
                <BlockFooter />
            </motion.div>
        </>
    );
};

export default RashidaGeddes;