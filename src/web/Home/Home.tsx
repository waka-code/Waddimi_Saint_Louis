import { useNavigate } from "react-router-dom";
import { ucHomeStyles, ucProjectDisplayStyles } from "./HomeStyles";
import { ucScrollHover } from "../../designs/hook";
import { ProjectDisplayProps, ucHome } from "./hook";
import { ucPortfolioStyle } from "../Portfolio/PortfolioStyle";
import { useMemo } from "react";
import { ucTestData } from "../mockup/mockup";
import { ucTranslation } from "../../Translation/resources";
import { ucMediaQuery } from "../../designs/mediaQuery/hook";

const Work = () => {
  const { divStyles, h1Styles, h2Styles, pStyles, divContainer } =
    ucHomeStyles();
  const { projects, projectsInProgres } = ucHome();
  const { CurriculumVitae } = ucTestData();
  const { resources } = ucTranslation();
  const { isTabletDevice } = ucMediaQuery();

  return (
    <div style={divContainer}>
      <div style={divStyles}>
        <h1 style={h1Styles}>
          <span
            style={isTabletDevice ? { color: "#734c4c" } : { color: "white" }}
          >
            {resources.hiIamLouis}
          </span>
          <span>{resources.systemEngineer}</span>
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            alignItems: "center",
          }}
        >
          {CurriculumVitae.map((i) => {
            return (
              <a
                href={i.url}
                download="WaddimiSaintLouisEs"
                target="_blank"
                rel="noreferrer"
                className="Cv"
              >
                <button className="btnCv">
                  {i.title === "CV" ? resources.viwCv : resources.downloadCv}
                </button>
              </a>
            );
          })}
        </div>

        <h2 style={h2Styles}>{resources.welcomeAWakacode}</h2>
        <p style={pStyles}>{resources.wakaCode}</p>
        <ProjectDisplay projects={projects} gridTemplateColumns={undefined} />
      </div>
      {/* Sección en progreso */}
      <div style={divStyles}>
        <h2 style={h2Styles}>{resources.inProgress}</h2>
        <p style={pStyles}>{resources.listOfOngoingProjects}</p>
        <ProjectDisplay
          projects={projectsInProgres}
          gridTemplateColumns={undefined}
        />
      </div>
    </div>
  );
};

export default Work;

export const ProjectDisplay: React.FC<ProjectDisplayProps> = ({
  projects,
  isPortfolio,
  gridTemplateColumns,
}) => {
  const navigate = useNavigate();
  const { resources } = ucTranslation();
  const { divStyles, projectGrid } = ucProjectDisplayStyles();
  const { portfolioStyle, portfolioGrid, portfolioImg } = ucPortfolioStyle();

  const { hoverCards } = ucScrollHover({
    ulScroolYStyle: undefined,
    ulStyle: undefined,
    zoomIn: "zoom-in",
    zoomInDown: "zoom-in-down",
  });

  const width = useMemo(() => {
    if (gridTemplateColumns === "repeat(3, 1fr)") {
      return "450px";
    } else {
      return "550px";
    }
  }, [gridTemplateColumns]);

  return (
    <div
      style={
        isPortfolio ? { ...portfolioStyle, gridTemplateColumns } : divStyles
      }
      data-aos={hoverCards}
      data-aos-duration="1000"
    >
      {projects.map((project, index) => (
        <div
          key={index}
          onClick={() => navigate(project.url)}
          style={isPortfolio ? { ...portfolioGrid, width } : projectGrid}
          className="Cards"
        >
          <img
            src={project.img}
            alt="proyecto"
            style={isPortfolio ? portfolioImg : undefined}
          />
          <button className="Button" onClickCapture={() => alert("hola")}>
            {resources.viewCode}
          </button>
          <p className="Description">Description</p>
        </div>
      ))}
    </div>
  );
};
