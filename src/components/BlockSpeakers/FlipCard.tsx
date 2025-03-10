import React, { useState } from "react";
import { Box, Button, Image, Text, Link } from "@chakra-ui/react";
import { GiResize } from "react-icons/gi";
import { Link as RouterLink } from "react-router-dom";

interface FlipCardProps {
  frontImageHref: string;
  backImageHref: string;
}

const FlipCard: React.FC<FlipCardProps> = ({
  frontImageHref,
  backImageHref,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleCardHover = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <Box
      className={`scene scene--card`}
      width="100%"
      height="40rem"
      style={{
        perspective: "600px",
      }}
      onMouseEnter={handleCardHover}
      onMouseLeave={handleCardHover}
    >
      <Box
        className="card"
        position="relative"
        width="100%"
        height="100%"
        transition="transform 1.3s"
        cursor="pointer"
        transform={isFlipped ? "rotateY(180deg)" : "rotateY(0)"}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <Box
          className="card__face card__face--front"
          position="absolute"
          width="100%"
          height="100%"
          color="white"
          textAlign="center"
          fontWeight="bold"
          fontSize="3rem"
          style={{
            WebkitBackfaceVisibility: "hidden",
            backfaceVisibility: "hidden",
          }}
        >
          <Image
            src={frontImageHref}
            width="100%"
            height="100%"
            objectFit="cover"
            borderRadius={"8px"}
          />
        </Box>
        <Box
          className="card__face card__face--back"
          position="absolute"
          bg=" #CB0000"
          width="100%"
          height="100%"
          color="#fff"
          textAlign="center"
          fontWeight="bold"
          fontSize="3rem"
          transform="rotateY(180deg)"
          style={{
            WebkitBackfaceVisibility: "hidden",
            backfaceVisibility: "hidden",
          }}
        >
          <Text
            as="h3"
            fontSize="lg"
            mb={2}
            textAlign="center"
            // bgGradient={headingGradient}
            bgClip="text"
          >
            name
          </Text>
          <Text fontSize="sm" mb={4} textAlign="center">
            title
          </Text>
          <Link
            as={RouterLink}
            to="/"
            cursor="pointer"
            colorScheme="teal"
          >
            View Profile
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default FlipCard;
