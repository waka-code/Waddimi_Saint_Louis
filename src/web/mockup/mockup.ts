import { ProjectProps } from "../Home/hook";
import picture00 from "../../img/picture00.png";
import waddyImg from "../../img/waddyImg.png";
import WaddimiSaintLouisCv_ from "../../cv/WaddimiSaintLouisCv_.pdf";
import { ucTranslation } from "../../Translation/resources";

type Icon = {
  title: string;
  icon: string[];
};

type IconObject = {
  icons: Icon[];
};

const CV =
  "https://www.canva.com/design/DAGDDUviYeU/fWYu7GRVNwJXmOLzgwPaRg/view?utm_content=DAGDDUviYeU&utm_campaign=designshare&utm_medium=link&utm_source=editor";

export const ucTestData = () => {
   const { resources } = ucTranslation();
  
  //Home

 
  const projects: ProjectProps[] = [
    {
      url: "/SinRutas",
      img: "https://via.placeholder.com/350",
    },
    {
      url: "/SinRutas",
      img: "https://via.placeholder.com/350",
    },
    {
      url: "/SinRutas",
      img: "https://via.placeholder.com/350",
    },
    {
      url: "/SinRutas",
      img: "https://via.placeholder.com/350",
    },
  ];

  const projectsInProgres: ProjectProps[] = [
    {
      url: "/SinRutas",
      img: "https://via.placeholder.com/500",
    },
    {
      url: "/SinRutas",
      img: "https://via.placeholder.com/500",
    },
  ];
  //footer
  const social = [
    {
      name: "GitHub",
      url: "https://github.com/waka-code",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/waddimi-saint-louis-b49424230/?trk=opento_sprofile_goalscard",
    },
    {
      name: "instagram",
      url: "https://www.instagram.com/saint_louis29/",
    },
    {
      name: "CV",
      url: CV,
    },
  ];

  const jobDescriptions: {
    firstJob: { position: string; title: string; description: string };
    secondJob: { position: string; title: string; description: string };
    thirdJob: { position: string; title: string; description: string };
    fourthJob: { position: string; title: string; description: string };
  } = {
    firstJob: {
      position: "01",
      title: resources.codingWithAwareness,
      description: resources.AlwaysCode,
    },
    secondJob: {
      position: "02",
      title: resources.theThreeUnexpectedVirtuesOfaProgrammer,
      description: resources.mostOfYouAreFamiliar,
    },
    thirdJob: {
      position: "03",
      title: resources.theImportanceOfMeasurement,
      description: resources.measurementIsTheFirst,
    },
    fourthJob: {
      position: "04",
      title: resources.theArtOfDebugging,
      description: resources.debugging,
    },
  };

  const workExperience: {
    Novosit: { jobTitle: string; jobDuration: string };
    Upwork: { jobTitle: string; jobDuration: string };
    Digitador: { jobTitle: string; jobDuration: string };
  } = {
    Novosit: { jobTitle: "Fullstack developer", jobDuration: "2023 - Actual" },
    Upwork: { jobTitle: "Freelancer", jobDuration: "2020 - 2023" },
    Digitador: { jobTitle: resources.typist, jobDuration: "2019 - 2020" },
  };

  const imageFiles = {
    imageFile00: picture00,
    imageFile01: waddyImg,
  };
  const portfolio: ProjectProps[] = [
    {
      url: "A",
      img: "https://via.placeholder.com/500",
    },
    {
      url: "B",
      img: "https://via.placeholder.com/500",
    },
    {
      url: "C",
      img: "https://via.placeholder.com/500",
    },
    {
      url: "A",
      img: "https://via.placeholder.com/500",
    },
    {
      url: "B",
      img: "https://via.placeholder.com/500",
    },
    {
      url: "C",
      img: "https://via.placeholder.com/500",
    },
  ];

  const skills: IconObject = {
    icons: [
      {
        title: "FRONTEND",
        icon: [
          "HTML",
          "CSS",
          "JS",
          "TS",
          "REACT",
          "NEXT",
          "SASS",
          "GESTALT",
          "BOOSTRAP",
        ],
      },
      {
        title: "BACKEND",
        icon: ["NODE", "RUBY", "C#", "SQL", "MONGO", "FIREBASE", "EXPRESS"],
      },
      {
        title: "SOFTSKILLS AND TOOLS",
        icon: [
          "JIRA",
          "FIGMA",
          "DOCKER",
          "GIT",
          "GITHUB",
          "SCRUM",
          "PROBLEM SOLVING",
          "POSTMAN",
        ],
      },
    ],
  };

  const CurriculumVitae = [
    {
      title: "CV",
      url: CV,
    },
    {
      title:"Donwload CV",
      url: WaddimiSaintLouisCv_,
    }
  ];
  return {
    imageFiles,
    social,
    projects,
    projectsInProgres,
    jobDescriptions,
    workExperience,
    portfolio,
    skills,
    CurriculumVitae
  };
};
