import { ProjectProps } from "../Home/hook";
import picture00 from "../../assets/img/picture00.png";
import waddyImg from "../../assets/img/waddyImg.png";
import WaddimiSaintLouisCv_ from "../../cv/WaddimiSaintLouisCv_.pdf";
import { ucTranslation } from "../../Translation/resources";
import noDisponible from "../../assets/img/noDisponible.png"

import bootstrap from "../../assets/svg/bootstrap.svg"
import cv from "../../assets/svg/cv.svg"
import dotnet from "../../assets/svg/dotnet.svg"
import github from "../../assets/svg/github.svg"
import html from "../../assets/svg/html.svg"
import js from "../../assets/svg/js.svg"
import figma from "../../assets/svg/figma.svg"
import firebase from "../../assets/svg/firebase.svg"
import jira from "../../assets/svg/jira.svg"
import ruby from "../../assets/svg/ruby.svg"
import next from "../../assets/svg/next.svg"
import reactjs from "../../assets/svg/reactjs.svg"
import css from "../../assets/svg/css.svg"
import docker from "../../assets/svg/docker.svg"
import express from "../../assets/svg/expressjs.svg"
import git from "../../assets/svg/git.svg"
import instagram from "../../assets/svg/instagram.svg"
import linkedil from "../../assets/svg/linkedil.svg"
import mongo from "../../assets/svg/mongo.svg"
import node from "../../assets/svg/node.svg"
import postman from "../../assets/svg/postman.svg"
import sass from "../../assets/svg/sass.svg"
import ts from "../../assets/svg/ts.svg"
import sql from "../../assets/svg/sql.svg"



type Icon = {
  title: string;
  technologies: string[];
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
      url: "/",
      img: noDisponible,
    },
    {
      url: "/",
      img: noDisponible,
    },
    {
      url: "/",
      img: noDisponible,
    },
    {
      url: "/",
      img: noDisponible,
    },
  ];

  const projectsInProgres: ProjectProps[] = [
    {
      url: "/SinRutas",
      img: noDisponible,
    },
    {
      url: "/SinRutas",
      img: noDisponible,
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
      url: "https://www.linkedin.com/in/waddimi-saint-louis-b49424230/",
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
      url: "/portfolio",
      img: noDisponible,
    },
    {
      url: "/portfolio",
      img: noDisponible,
    },
    {
      url: "/portfolio",
      img: noDisponible,
    },
    {
      url: "/portfolio",
      img: noDisponible,
    },
    {
      url: "/portfolio",
      img: noDisponible,
    },
    {
      url: "/portfolio",
      img: noDisponible,
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
        ],
      },
      {
        title: "BACKEND",
        technologies: [node, ruby, dotnet, sql, mongo, firebase, express],
      },
      {
        title: "SOFTSKILLS AND TOOLS",
        technologies: [
          jira,
          figma,
          docker,
          git,
          github,
          postman
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
      title: "Donwload CV",
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
    SkillSetOverview,
    CurriculumVitae
  };
};
