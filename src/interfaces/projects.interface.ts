import { LucideIcon } from "lucide-react";

export interface ProjectLink {
    text: string;
    url?: string;
    icon: LucideIcon;
    disabled?: boolean;
}

export interface Project {
    title: string;
    description: string;
    links: ProjectLink[];
}
