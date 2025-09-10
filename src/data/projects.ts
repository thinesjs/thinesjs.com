import { Project } from "@/interfaces/projects.interface";
import { ArrowUpRightIcon } from "lucide-react";

export const projects: Project[] = [
    {
        title: "myPlate - Malaysia Car Plates",
        description:
            "An application to keep track of latest vehicle registration numbers for Malaysians. Available for iOS and Android through the App Store and Google Play Store.",
        links: [
            {
                text: "Get myPlate for iOS",
                url: "https://apps.apple.com/us/app/myplate-malaysia-car-plates/id6741453266",
                icon: ArrowUpRightIcon,
            },
            {
                text: "Get myPlate for Android",
                url: "https://play.google.com/store/apps/details?id=com.thinesjs.myplate",
                icon: ArrowUpRightIcon,
            },
            // {
            //     text: "Help",
            //     url: "https://thinesjs.github.io/myplate-docs/",
            //     icon: ArrowUpRightIcon,
            // },
        ],
    },
    {
        title: "myTransit (Preview)",
        description:
            "An application for public transport in Malaysia, or busrouter.sg for Malaysians. Available for the web.\n\nCurrently in preview, expect bugs and missing features.",
        links: [
            {
                text: "Visit myTransit",
                url: "https://preview.mytransit.thinesjs.com",
                icon: ArrowUpRightIcon,
            },
        ],
    },
    {
        title: "Isometrify (Preview)",
        description:
            "Generate isometric 3D icons with AI — customize styles, trim backgrounds, and export transparent PNGs. Available for the web.\n\nCurrently in preview, expect bugs and missing features.",
        links: [
            {
                text: "Visit Isometrify",
                url: "https://preview.isometrify.thinesjs.com",
                icon: ArrowUpRightIcon,
            },
        ],
    },
];
