import { ucTestData } from "../mockup/mockup";

export type ProjectProps = {
  url: string;
  img: any;
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
