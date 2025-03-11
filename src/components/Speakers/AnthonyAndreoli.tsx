import React, { useEffect, useState } from "react";
import { BlockFooter } from "../BlockFooter";
import { anthony_andreoli } from "../../assets";
import { motion } from "framer-motion";
import BlockSpeakerProfiles from "../BlockSpeakerProfiles";
import MyNavbar from "../MyNavbar";

const AnthonyAndreoli: React.FC = () => {
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
                    name="Anthony Andreoli"
                    title="PhD Researcher in Cybersecurity"
                    biography={`Anthony is only a PhD researcher in Cybersecurity by day. The remainder of his time is consumed by 
                        two avenues: creating music, and the search for compassion. Given the world's obsession with self-worth 
                        associated to productivity, he wields a different perspective. Witnessing tragedies in his own family life, 
                        and within the families of those he loves, he observed that productivity was not even in the periphery of 
                        suffering; rather, a lack of unconditional and ever-present love seemed to be at its root. A single-pointed 
                        spiritual curiosity developed within him to understand the nature of suffering and the causes of emotional 
                        turmoil. Though some have called him sensitive, he believes a lack of proper sensitivity cuts down human 
                        creativity and, yes, productivity. He has spent nearly 3 years studying Advaita Vedanta in hopes of 
                        understanding existence and the human condition. In constant pursuit of higher-knowledge, Anthony's sole 
                        wish is to deliver the necessary conditions for human prosperity.`}
                    image={anthony_andreoli}
                    linkedinAddress="https://www.linkedin.com/in/anthony-andreoli/"
                    emailAddress=""
                    twitterAddress=""
                />
                <BlockFooter />
            </motion.div>
        </>
    );
};

export default AnthonyAndreoli;