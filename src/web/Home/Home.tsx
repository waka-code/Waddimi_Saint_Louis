import { ucHomeStyles, ucProjectDisplayStyles } from "./HomeStyles";
import { ucScrollHover } from "../../designs/hook";
import { ProjectDisplayProps, ucHome } from "./hook";
import { ucPortfolioStyle } from "../Portfolio/PortfolioStyle";
import { useMemo } from "react";
import { ucTestData } from "../mockup/mockup";
import { ucTranslation } from "../../Translation/resources";
import { color } from "framer-motion";

const PortfolioOverview = () => {
  const { divStyles, h1Styles, h2Styles, pStyles, divContainer } =
    ucHomeStyles();
  const { projects, projectsInProgres } = ucHome();
  const { CurriculumVitae } = ucTestData();
  const { resources } = ucTranslation();

  return (
    <div style={divContainer}>
      <div style={divStyles}>
        <h1 style={h1Styles}>
          <span style={{ color: "#BA9797" }}>{resources.hiIamLouis}</span>
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
          {CurriculumVitae.map((i, idx) => {
            return (
              <a
                href={i.url}
                download="WaddimiSaintLouisCV"
                target="_blank"
                rel="noreferrer"
                className="Cv"
                key={idx}
              >
                <button className="btnCv" aria-label={"btnCv"}>
                  {i.title === "CV" ? resources.viewCv : resources.downloadCv}
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
  };

  return (
    <div
      style={
        isPortfolio ? { ...portfolioStyle, gridTemplateColumns } : divStyles
      }
      data-aos={hoverCards}
      data-aos-duration="1000"
    >
      {projects.map((project, index) => {
        const disabled = project.url === "/";
        const technologiesUsed = project.technologiesUsed;
        const title = project.Title;
        const description = project.description;
        return (
          <div
            key={index}
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
                }}
              >
                <div>
                  <h4
                    style={{
                      color: "white",
                      fontSize: "18px",
                      fontWeight: "bold",
                    }}
                  >
                    {technologiesUsed.length > 0
                      ? technologiesUsed.join(" | ")
                      : resources.technologiesUsed}
                  </h4>
                </div>

                <span> {title.length > 0 ? title : "Title"}</span>
                <p>
                  {description.length > 0 ? description : resources.unavailable}
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: "5px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <ButtonLink
                    href={project.url}
                    label={project.isVideo ? "Video" : "GitHub Pages"}
                    size={size}
                    disabled={disabled}
                  />
                  <ButtonLink
                    href={project.urlCode}
                    label={resources.viewCode}
                    size={size}
                    disabled={disabled}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const ButtonLink = ({
  href,
  label,
  size,
  disabled,
}: {
  href: string | undefined;
  label: string;
  size: {
    width: string;
    height: string;
  };
  disabled: boolean;
}) => (
  <button
    style={
      {
        ...size,
        backgroundColor: "#242424",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: disabled ? "not-allowed" : "pointer",
      }
    }
    disabled={disabled}
    aria-label={label}
    onClick={() => window.open(href, "_blank")}
    onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "#3a3a3a";
    }}
    onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "#242424";
    }}
  >
    {label}
  </button>
);
