import { ucTestData } from "../mockup/mockup";

export type ProjectProps = {
  url: string;
  urlCode?: string;
  img: any;
  technologiesUsed: string[];
  Title:string;
  description: string;
  isVideo: boolean;	
};

export type ProjectDisplayProps = {
  projects: ProjectProps[];
  isPortfolio?: boolean;
  gridTemplateColumns: string | undefined
};

export const ucHome = () => {
  const { projects, projectsInProgres } = ucTestData();

  return { projects, projectsInProgres };
};
