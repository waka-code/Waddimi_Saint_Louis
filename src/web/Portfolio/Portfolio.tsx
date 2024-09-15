import { useCallback, useState } from "react";
import { IconsGrid } from "../../designs/IconsGrid";
import { DynamicProjectGrid } from "../Home/Home";
import { ucTestData } from "../mockup/mockup";
import { ucPortfolioStyle } from "./PortfolioStyle";
import { ucIconsGrid } from "../../designs/hook";
import { ucTranslation } from "../../Translation/resources";

export default function CreativeWorksDisplay() {
  const { portfolio } = ucTestData();
  const {  portfolioDiv } = ucPortfolioStyle();
  const { portfolioGrid } = ucIconsGrid({ ochange: () => {} });
  const [gridTemplateColumns, setGridTemplateColumns] =
    useState<string>(portfolioGrid);
  const { resources } = ucTranslation();
  const handleGrid = useCallback(
    (n: string) => {
      setGridTemplateColumns(n);
    },
    [setGridTemplateColumns]
  );
  return (
    <div>
      <div style={portfolioDiv}>
        <h2 style={{color:"white", fontWeight:"bold", letterSpacing:"5px"}}>{resources.portfolio}</h2>
        <IconsGrid ochange={handleGrid} isPortfolio={true} />
      </div>
      <div style={{ padding: "20px" }}>
        <DynamicProjectGrid
          projects={portfolio}
          isPortfolio={true}
          gridTemplateColumns={gridTemplateColumns}
        />
      </div>
    </div>
  );
}
