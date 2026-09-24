import { ReactNode } from "react";

export interface Project {
    title: string;
    type: string;
    company: string;
    period: string;
    description: string;
    features: string[];
    tech: string[];
    highlights?: string[];
    link?: Record<string, string>[];
}

export interface ProjectCardProps {
    project: Project;
    featured: boolean;
}

export interface RowProps {
    k: string;
    children: ReactNode;
    last?: boolean;
}