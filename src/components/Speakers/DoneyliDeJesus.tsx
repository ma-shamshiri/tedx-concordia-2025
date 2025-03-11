import React, { useEffect, useState } from "react";
import { BlockFooter } from "../BlockFooter";
import { doneyli_de_jesus } from "../../assets";
import { motion } from "framer-motion";
import BlockSpeakerProfiles from "../BlockSpeakerProfiles";
import MyNavbar from "../MyNavbar";

const DoneyliDeJesus: React.FC = () => {
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
                    name="Doneyli De Jesus"
                    title="Principal AI Architect"
                    biography={`Doneyli is a Principal AI Architect at Snowflake, where he leads strategic initiatives in 
                        Generative AI and Machine Learning, helping organizations unlock the transformative power of AI. 
                        With over two decades of experience in AI & Data, he has been at the forefront of guiding enterprises 
                        through the ever-changing technological landscape. His expertise bridges the gap between cutting-edge 
                        technology and real-world impact, enabling businesses to turn data into actionable intelligence. 
                        Beyond his role at Snowflake, Doneyli is a thought leader and mentor dedicated to shaping the next 
                        generation of AI and data professionals. His passion for education and strategic thinking extends beyond 
                        boardrooms—he actively shares insights through public speaking, coaching, and industry mentorship. 
                        He believes that the future of AI is not just about technology but about empowering people to think 
                        differently and innovate fearlessly. He brings a unique perspective on the intersection of AI, business, 
                        and human potential—challenging audiences to rethink what’s possible in an AI-driven world.`}
                    image={doneyli_de_jesus}
                    linkedinAddress="https://www.linkedin.com/in/doneyli/"
                    emailAddress=""
                    twitterAddress=""
                />
                <BlockFooter />
            </motion.div>
        </>
    );
};

export default DoneyliDeJesus;