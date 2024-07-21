export function ucSkillsStyles() {
  return {
    SkillsContainer: {
      padding: "60px 0 5px 0",
    },
    SkillsContainerDiv: {
      borderBottom: "1px solid white",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    SkillsGrid: {
      display: "grid",
      gap: "20px",
      padding: "20px",
    },
    SkillsIcons: {
      border: "1px solid white",
      padding: "20px",
      boxShadow: "0 5px 8px 0 #141414",
      width: "360px",
    },
    SkillsImg: {
      display: "flex",
      flexDirection: "column" as "column",
      flexWrap: "wrap" as "wrap",
    },
  };
}
