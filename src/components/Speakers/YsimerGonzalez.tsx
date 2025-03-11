import React, { useEffect, useState } from "react";
import { BlockFooter } from "../BlockFooter";
import { ysimer_gonzalez } from "../../assets";
import { motion } from "framer-motion";
import BlockSpeakerProfiles from "../BlockSpeakerProfiles";
import MyNavbar from "../MyNavbar";

const YsimerGonzalez: React.FC = () => {
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
                    name="Ysimer Gonzalez"
                    title="Supply Chain Manager"
                    biography={`Ysimer Gonzalez is an Industrial Engineer with a focus on supply chain and operations management. 
                        With a proactive approach to continuous improvement, Ysimer has led innovative projects and managed inventory 
                        strategies, significantly impacting efficiency and processes. Ysimer's journey began as an assistant to the 
                        materials planning department, now leading the national Supply Chain team, she fosters talent and promotes 
                        diversity in engineering and technology fields. Passionate about mentorship, Ysimer supports future leaders 
                        and delivers insights on career development as a Mentor on ABB’s Female Mentoring and Development Program (FMDP). 
                        She is also cofounder of the FMDP mentees Alumni Network. Committed to inspiring others, Ysimer continually seeks 
                        to improve both professional and personal contexts through process enhancement and efficiency.`}
                    image={ysimer_gonzalez}
                    linkedinAddress="https://www.linkedin.com/in/ysimergonzalez"
                    emailAddress=""
                    twitterAddress=""
                />
                <BlockFooter />
            </motion.div>
        </>
    );
};

export default YsimerGonzalez;