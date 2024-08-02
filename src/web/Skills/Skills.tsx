import { IconsGrid } from "../../designs/IconsGrid";
import { ucSkillsStyles } from "./SkillsStyles";
import { ucSkill } from "./hook";

export default function Skills() {
  const {
    SkillsContainer,
    SkillsContainerDiv,
    SkillsGrid,
    SkillsIcons,
    SkillsImg,
  } = ucSkillsStyles();
  const { gridTemplateColumns, handleGrid, resources, SkillSetOverview } = ucSkill();
  return (
    <div style={SkillsContainer}>
      <div style={SkillsContainerDiv}>
        <div>
          <h2 style={{color:"white", fontWeight:"bold", letterSpacing:"5px"}}>{resources.skills}</h2>
        </div>
        <IconsGrid ochange={handleGrid} isPortfolio={false} />
      </div>
      <div
        style={{
          ...SkillsGrid,
          gridTemplateColumns,
        }}
        data-aos-duration="1000"
        data-aos="zoom-in"
      >
        {SkillSetOverview.icons.map((icon, index) => {
          const title =
            icon.title === "SOFTSKILLS AND TOOLS"
              ? resources.softSkillsAndTools
              : icon.title;
          return (
            <div
              key={index}
              style={{
                ...SkillsIcons,
                height:"300px",
              }}
            >
              <span style={{color:"white", fontWeight:"bold", letterSpacing:"5px"}}>{title}</span>
              <hr />
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "10px",
                width: "fit-content",
                flex:"wrap",
              }}>
                {icon.technologies.map((i, index) => (
                  <div key={index} style={SkillsImg}>
                    <img src={i} width={60} height={50} />
                  </div>
                ))}
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}
