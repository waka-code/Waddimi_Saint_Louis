import { CiGrid2V, CiGrid41 } from "react-icons/ci";
import { ucIconsGrid } from "./hook";

type IconsGridProps = {
  ochange: (n: string) => void;
  isPortfolio: boolean;
};

export const IconsGrid = ({ ochange, isPortfolio }: IconsGridProps) => {
  const { grid, handleClick } = ucIconsGrid({ ochange, isPortfolio });

  return (
    <div style={{ display: "flex", gap: "2px" }}>
      <CiGrid2V
        size={25}
        onClickCapture={() => handleClick("repeat(2, 1fr)")}
        className={`icon ${grid === "repeat(2, 1fr)" ? "active" : ""}`}
      />
      <CiGrid41
        size={25}
        onClickCapture={() => handleClick("repeat(3, 1fr)")}
        className={`icon ${grid === "repeat(3, 1fr)" ? "active" : ""}`}
      />
    </div>
  );
};
