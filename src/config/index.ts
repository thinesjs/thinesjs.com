import { Metadata } from "next";

export const SITE_CONFIG: Metadata = {
    title: {
        default: "thinesjs - home",
        template: `%s | thinesjs`
    },
    description: "i come up with a silly problem and make silly solutions for it",
    icons: {
        icon: [
            {
                url: "/icons/favicon.ico",
                href: "/icons/favicon.ico",
            }
        ]
    },
    openGraph: {
        title: "thinesjs",
        description: "i come up with a silly problem and make silly solutions for it",
        images: [
            {
                url: "/assets/og-image.png",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        creator: "@thinesjs",
        title: "thinesjs",
        description: "i come up with a silly problem and make silly solutions for it",
        images: [
            {
                url: "/assets/og-image.png",
            }
        ]
    },
    metadataBase: new URL("https://thinesjs.com"),
};