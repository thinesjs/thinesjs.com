import { Project } from "@/interfaces/projects.interface";
import { ArrowRight, ArrowUpRightIcon } from "lucide-react";

export const projects: Project[] = [
    {
        title: "thinesjs.com",
        description: "just imagine there is some inspirational quote here 🚀",
        links: [
            {
                text: "You are here",
                url: "https://thinesjs.com",
                icon: ArrowRight,
                disabled: true,
            },
        ],
    },
    {
        title: "myPlate",
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
        ],
    },
    // {
    //     title: "myTransit",
    //     description:
    //         "A web application to keep live locations of public transport in Malaysia.",
    //     links: [
    //         {
    //             text: "Visit myTransit",
    //             url: "https://staging.mytransit.thinesjs.com?ref=thinesjs.com",
    //             icon: ArrowUpRightIcon,
    //         },
    //     ],
    // },
];
