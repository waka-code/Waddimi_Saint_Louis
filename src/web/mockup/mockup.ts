import { ProjectProps } from "../Home/hook";
import picture00 from "../../assets/img/picture00.png";
import waddyImg from "../../assets/img/waddyImg.png";
import WaddimiSaintLouisCv_ from "../../cv/WaddimiSaintLouisCv_.pdf";
import { ucTranslation } from "../../Translation/resources";
import noDisponible from "../../assets/img/noDisponible.png";
import CompanyNamePNG from "../../assets/img/CompanyNamePNG.png";
import inventarios from "../../assets/img/inventarios.png";
import wanimeJK from "../../assets/img/wanime.png";

import bootstrap from "../../assets/svg/bootstrap.svg";
import dotnet from "../../assets/svg/dotnet.svg";
import github from "../../assets/svg/github.svg";
import html from "../../assets/svg/html.svg";
import js from "../../assets/svg/js.svg";
import figma from "../../assets/svg/figma.svg";
import firebase from "../../assets/svg/firebase.svg";
import jira from "../../assets/svg/jira.svg";
import ruby from "../../assets/svg/ruby.svg";
import next from "../../assets/svg/next.svg";
import reactjs from "../../assets/svg/reactjs.svg";
import css from "../../assets/svg/css.svg";
import docker from "../../assets/svg/docker.svg";
import express from "../../assets/svg/expressjs.svg";
import git from "../../assets/svg/git.svg";
import mongo from "../../assets/svg/mongo.svg";
import node from "../../assets/svg/node.svg";
import postman from "../../assets/svg/postman.svg";
import sass from "../../assets/svg/sass.svg";
import ts from "../../assets/svg/ts.svg";
import sql from "../../assets/svg/sql.svg";
import tailwind from "../../assets/svg/tailwind.svg";
import postgresql from "../../assets/svg/postgresql.svg";
import instagram from "../../assets/svg/instagram.svg";
import linkedin from "../../assets/svg/linkedin.svg";
import angular from "../../assets/svg/angular.svg";


type Icon = {
  title: string;
  technologies: string[];
};

type IconObject = {
  icons: Icon[];
};

const CV =
  "https://www.canva.com/design/DAGaT4ag5gM/0EJTQrP5wQM7_M9kSvHtTw/view?utm_content=DAGaT4ag5gM&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=he3183005da";

export const ucTestData = () => {
  const { resources } = ucTranslation();

  //Home

  const projects: ProjectProps[] = [
    {
      url: "https://waka-code.github.io/WebForceExamen/",
      urlCode: "https://github.com/waka-code/WebForceExamen",
      img: CompanyNamePNG,
      technologiesUsed: ["Html", "Css"],
      Title: "Web Force Examen",
      description: "layout",
      isVideo: false,
    },
    {
      url: "https://www.youtube.com/watch?v=osnWdZEGVVI",
      urlCode: "https://github.com/waka-code/sistemaDeInventario",
      img: inventarios,
      technologiesUsed: ["C#", "SQL"],
      Title: "Sistema de inventarios",
      description: "sistema de inventarios",
      isVideo: true,
    },
    {
      url: "https://www.tiktok.com/@wakacode/video/7219738950980619525?is_from_webapp=1&sender_device=pc&web_id=7351955148874761733",
      img: wanimeJK,
      urlCode:"https://github.com/waka-code/ClaseA",
      technologiesUsed: ["React", "Typescript", "Css", "Node", "Express", "Mongo"],
      Title: "wanime",
      description: "",
      isVideo: true,
    },
    {
      url: "/",
      urlCode: "/",
      img: noDisponible,
      technologiesUsed: [],
      Title: "",
      description: "",
      isVideo: false,
    },
  ];

  const projectsInProgres: ProjectProps[] = [
    {
      url: "/",
      img: noDisponible,
      technologiesUsed: [],
      Title: "",
      description: "",
      isVideo: false,
    },
    {
      url: "/",
      img: noDisponible,
      technologiesUsed: [],
      Title: "",
      description: "",
      isVideo: false,
    },
  ];
  //footer
  const social = [
    {
      icon: github,
      name: "GitHub",
      url: "https://github.com/waka-code",
    },
    {
      icon: linkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/waddimi-saint-louis-b49424230/",
    },
    {
      icon: instagram,
      name: "Instagram",
      url: "https://www.instagram.com/saint_louis29/",
    }
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
    IMarket: {
      jobTitle: string;
      jobDuration: string;
      stack: string;
      description: string;
    };
    Novosit: {
      jobTitle: string;
      jobDuration: string;
      stack: string;
      description: string;
    };
    Upwork: {
      jobTitle: string;
      jobDuration: string;
      stack: string;
      description: string;
    };
    // Digitador: {
    //   jobTitle: string;
    //   jobDuration: string;
    //   stack: string;
    //   description: string;
    // };
  } = {
    IMarket: {
      jobTitle: "Ssr Fullstack dev - (Partial Project)",
      jobDuration: "2024 - Actual",
      stack: "Angular 18, Tailwind, Typecript, C#, Postgresql",
      description: resources.novosit,
    },
    Novosit: {
      jobTitle: "Fullstack developer",
      jobDuration: "2023 - Actual",
      stack: "React, Mongo, C#, Typescript, Node, Docker",
      description: resources.novosit,
    },
    Upwork: {
      jobTitle: "Freelancer",
      jobDuration: "2020 - 2023",
      stack: "Html, Css, TS, React, Express, Angular, etc.",
      description: resources.upwork,
    }
    // Digitador: {
    //   jobTitle: resources.typist,
    //   jobDuration: "2019 - 2020",
    //   stack: "Excel, Word, Powerpoint",
    //   description: resources.workTypist,
    // },
  };

  const imageFiles = {
    imageFile00: picture00,
    imageFile01: waddyImg,
  };
  const portfolio: ProjectProps[] = [
    {
      url: "https://waka-code.github.io/WebForceExamen/",
      urlCode: "https://github.com/waka-code/WebForceExamen",
      img: CompanyNamePNG,
      technologiesUsed: ["Html", "Css"],
      Title: "Web Force Examen",
      description: "layout",
      isVideo: false,
    },
    {
      url: "https://www.youtube.com/watch?v=osnWdZEGVVI",
      urlCode: "https://github.com/waka-code/sistemaDeInventario",
      img: inventarios,
      technologiesUsed: ["C#", "SQL"],
      Title: "Sistema de inventarios",
      description: "sistema de inventarios",
      isVideo: true,
    },
    {
      url: "https://www.tiktok.com/@wakacode/video/7219738950980619525?is_from_webapp=1&sender_device=pc&web_id=7351955148874761733",
      img: wanimeJK,
      urlCode:"https://github.com/waka-code/wanime",
      technologiesUsed: ["React", "Typescript", "Css", "Node", "Express", "Mongo"],
      Title: "wanime",
      description: "",
      isVideo: true,
    },
    {
      url: "/",
      img: noDisponible,
      technologiesUsed: [],
      Title: "",
      description: "",
      isVideo: false,
    },
    {
      url: "/",
      img: noDisponible,
      technologiesUsed: [],
      Title: "",
      description: "",
      isVideo: false,
    },
    {
      url: "/portfolio",
      img: noDisponible,
      technologiesUsed: [],
      Title: "",
      description: "",
      isVideo: false,
    },
  ];

  const SkillSetOverview: IconObject = {
    icons: [
      {
        title: "FRONTEND",
        technologies: [
          html,
          css,
          js,
          ts,
          reactjs,
          next,
          sass,
          bootstrap,
          tailwind,
          angular 
        ],
      },
      {
        title: "BACKEND",
        technologies: [
          node,
          ruby,
          dotnet,
          sql,
          mongo,
          firebase,
          express,
          postgresql,
        ],
      },
      {
        title: "SOFTSKILLS AND TOOLS",
        technologies: [jira, figma, docker, git, github, postman],
      },
    ],
  };

  const CurriculumVitae = [
    {
      title: "CV",
      url: CV,
    },
    {
      title: "Donwload CV",
      url: WaddimiSaintLouisCv_,
    },
  ];

  const whatsapp =
    "https://api.whatsapp.com/send/?phone=18295041112&text&type=phone_number&app_absent=0";
  return {
    imageFiles,
    social,
    projects,
    projectsInProgres,
    jobDescriptions,
    workExperience,
    portfolio,
    SkillSetOverview,
    CurriculumVitae,
    whatsapp,
  };
};
