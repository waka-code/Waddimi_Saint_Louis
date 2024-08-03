import { useNavigate } from "react-router-dom";
import { ucHomeStyles, ucProjectDisplayStyles } from "./HomeStyles";
import { ucScrollHover } from "../../designs/hook";
import { ProjectDisplayProps, ucHome } from "./hook";
import { ucPortfolioStyle } from "../Portfolio/PortfolioStyle";
import { useMemo } from "react";
import { ucTestData } from "../mockup/mockup";
import { ucTranslation } from "../../Translation/resources";
import { ucMediaQuery } from "../../designs/mediaQuery/hook";

const PortfolioOverview = () => {
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
            style={isTabletDevice ? { color: "#BA9797" } : { color: "white" }}
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
        <DynamicProjectGrid
          projects={projects}
          gridTemplateColumns={undefined}
        />
      </div>
      {/* Sección en progreso */}
      <div style={divStyles}>
        <h2 style={h2Styles}>{resources.inProgress}</h2>
        <p style={pStyles}>{resources.listOfOngoingProjects}</p>
        <DynamicProjectGrid
          projects={projectsInProgres}
          gridTemplateColumns={undefined}
        />
      </div>
    </div>
  );
};

export default PortfolioOverview;

export const DynamicProjectGrid: React.FC<ProjectDisplayProps> = ({
  projects,
  isPortfolio,
  gridTemplateColumns,
}) => {
  const navigate = useNavigate();
  const { resources } = ucTranslation();
  const { divStyles, projectGrid } = ucProjectDisplayStyles();
  const { portfolioStyle, portfolioGrid, portfolioImg, imgStyle } =
    ucPortfolioStyle();

  const { hoverCards } = ucScrollHover({
    ulScroolYStyle: undefined,
    ulStyle: undefined,
    zoomIn: "zoom-in",
    zoomInDown: "zoom-in-down",
  });

  const width = useMemo(() => {
    return gridTemplateColumns === "repeat(3, 1fr)" ? "450px" : "550px";
  }, [gridTemplateColumns]);

  const size = {
    width: "200px",
    height: "40px",
    cursor: "pointer",
  };

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
            style={isPortfolio ? portfolioImg : imgStyle}
          />

          <div className="projectAnimationHover">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "40px",
                gap: "10px",
              }}
            >
              <div>
                <h4 style={{color:"white", fontSize:"20px", fontWeight:"bold", letterSpacing:"4px"}}>Tecnologias usadas</h4>
              </div>

              <span>Title</span>
              <p>{resources.unavailable}</p>
              <button
                style={size}
                onClickCapture={() =>
                  alert(
                    "Aun no tengo proyecto que mostrar, puedes visitar mi github... Waddimi Saint Louis"
                  )
                }
              >
                github
              </button>
              <button
                style={size}
                onClickCapture={() =>
                  alert(
                    "Aun no tengo proyecto que mostrar, puedes visitar mi github... Waddimi Saint Louis"
                  )
                }
              >
                {resources.viewCode}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
