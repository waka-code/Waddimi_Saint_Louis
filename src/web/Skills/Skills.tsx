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
          <h2>{resources.skills}</h2>
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
                height:
                  gridTemplateColumns === "repeat(3, 1fr)" ? "290px" : "290px",
              }}
            >
              <span>{title}</span>
              <hr />
              {icon.technologies.map((i, index) => (
                <div key={index} style={SkillsImg}>
                  <span>{i}</span>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
