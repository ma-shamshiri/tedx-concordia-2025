import React, { useState } from "react";
import {
    Box,
    Heading,
    Text,
    SimpleGrid,
    Flex,
    useColorModeValue,
    keyframes,
} from "@chakra-ui/react";
import { speakersData } from "./data";
import FlipCard from "./FlipCard";
import { amin } from "../../assets";

// Wave background at the bottom
const WaveBackground: React.FC = () => {
    const waveFill = useColorModeValue("#912338", "#CB0000");

    return (
        <Box
            as="svg"
            viewBox="0 0 1440 320"
            position="absolute"
            bottom="0"
            left="0"
            width="100%"
            height="auto"
            zIndex={1}
        >
            <path
                fill={waveFill}
                fillOpacity="1"
                d="M0,256L30,256C60,256,120,256,180,224C240,192,300,128,360,122.7C420,117,480,171,540,181.3C600,192,660,160,720,128C780,96,840,64,900,80C960,96,1020,160,1080,165.3C1140,171,1200,117,1260,90.7C1320,64,1380,64,1410,64L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
            />
        </Box>
    );
};

// Subtle floating animation for the heading
const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
`;

// FlipCard component for each speaker
interface SpeakerFlipCardProps {
    index: number;
    name: string;
    title: string;
    image: string;
    headingGradient: string;
    onClick: (index: number) => void;
}

const SpeakerFlipCard: React.FC<SpeakerFlipCardProps> = ({
    index,
    name,
    title,
    image,
    headingGradient,
    onClick,
}) => {
    const frontBg = useColorModeValue("white", "gray.700");
    const frontHoverBg = useColorModeValue("gray.100", "gray.600");
    const backBg = useColorModeValue("rgba(255,255,255,0.9)", "rgba(0,0,0,0.7)");
    const textColor = useColorModeValue("gray.700", "gray.100");

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <Box
            role="group"
            position="relative"
            w="100%"
            h="320px"
        >
            {/* Inner container that will rotate */}
            <Box
                position="absolute"
                w="100%"
                h="100%"
            >
                <Box
                    className="image"
                    position="relative"
                    cursor="pointer"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => onClick(index)}
                    borderWidth="1px"
                    borderColor={useColorModeValue("#000", "#fff")}
                    borderRadius="10px"
                >
                    <FlipCard
                        frontImageHref={amin}
                        backImageHref={amin}
                    />
                    <Box p={4}>
                        <Heading
                            as="h3"
                            fontSize="xl"
                            mb={1}
                            bgGradient={headingGradient}
                            bgClip="text"
                        >
                            {name}
                        </Heading>
                        <Text fontSize="sm" color={textColor}>
                            {title}
                        </Text>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

const BlockSpeakers: React.FC = () => {
    const bg = useColorModeValue("gray.50", "#000");
    const headingGradient = useColorModeValue(
        "linear(to-r, teal.500, blue.500)",
        "linear(to-r, teal.200, blue.300)"
    );

    const handleCardClick = (slug: string) => {
        // Navigate to speaker's dedicated page
        window.location.href = `/speakers/${slug}`;
    };

    return (
        <Box position="relative" minH="100vh" bg={bg} overflow="hidden">
            {/* Wave background at the bottom */}
            <WaveBackground />

            <Flex
                direction="column"
                align="center"
                justify="flex-start"
                pt={{ base: 10, md: 20 }}
                px={4}
                textAlign="center"
                zIndex={2}
                position="relative"
            >
                <Heading
                    fontSize={{ base: "3xl", md: "5xl" }}
                    bgGradient={headingGradient}
                    bgClip="text"
                    mb={4}
                    animation={`${floatAnimation} 5s ease-in-out infinite`}
                >
                    Meet Our Speakers
                </Heading>

                <Text
                    fontSize={{ base: "md", md: "lg" }}
                    color={useColorModeValue("gray.600", "gray.200")}
                    maxW="600px"
                    mb={10}
                >
                    Our amazing lineup of speakers will share their unique perspectives,
                    stories, and insights. Hover over each speaker card to see more details
                    and click to visit their page!
                </Text>

                {/* Staggered Grid Layout */}
                <SimpleGrid
                    columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
                    spacing={8}
                    maxW="1200px"
                    w="100%"
                >
                    {speakersData.map((speaker, index) => {
                        // Create a vertical offset to achieve a staggered effect
                        // for an eye-catching, less "uniform" grid
                        const offset = index % 2 === 0 ? "0px" : "40px";

                        return (
                            <Box key={speaker.id} mt={offset}>
                                <SpeakerFlipCard
                                    index={index}
                                    name={speaker.name}
                                    title={speaker.title}
                                    image={speaker.image}
                                    headingGradient={headingGradient}
                                    onClick={() => handleCardClick(speaker.slug)}
                                />
                            </Box>
                        );
                    })}
                </SimpleGrid>
            </Flex>
        </Box>
    );
};

export default BlockSpeakers;
