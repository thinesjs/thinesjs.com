import { Project } from "@/interfaces/projects.interface";
import { ArrowUpRightIcon } from "lucide-react";

export const projects: Project[] = [
    {
        title: "myPlate - Malaysia Car Plates",
        description:
            "An application to keep track of latest vehicle registration numbers for Malaysians. Available for iOS and Android through the App Store and Google Play Store, and on the web.",
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
            {
                text: "Visit myPlate on the web",
                url: "https://myplate.thinesjs.app",
                icon: ArrowUpRightIcon,
            },
        ],
    },
];
