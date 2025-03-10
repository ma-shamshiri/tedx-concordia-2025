// data.ts

import { amin } from "../../assets";

export interface Speaker {
    id: number;
    name: string;
    title: string;
    image: string;
    slug: string; // or a URL path to the speaker's dedicated page
}

export const speakersData: Speaker[] = [
    {
        id: 1,
        name: "Dr. Jane Doe",
        title: "Research Scientist",
        image: amin,
        slug: "jane-doe",
    },
    {
        id: 2,
        name: "John Smith",
        title: "Entrepreneur",
        image: amin,
        slug: "john-smith",
    },
    {
        id: 3,
        name: "Alice Johnson",
        title: "Creative Director",
        image: amin,
        slug: "alice-johnson",
    },
    {
        id: 4,
        name: "Michael Brown",
        title: "Tech Evangelist",
        image: amin,
        slug: "michael-brown",
    },
    // Add more speakers as needed
];
