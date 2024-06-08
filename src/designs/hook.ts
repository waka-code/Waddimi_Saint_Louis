import React, { useCallback, useEffect, useMemo, useState } from "react";
type ucHeaderProps = {
  ulScroolYStyle: React.CSSProperties | undefined;
  ulStyle: React.CSSProperties | undefined;
  zoomIn: string | undefined;
  zoomInDown: string | undefined;
};

export const ucScrollHover = ({
  ulScroolYStyle,
  ulStyle,
  zoomIn,
  zoomInDown,
}: ucHeaderProps) => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const hoverNav = useMemo(() => {
    if (scrollPosition > 50) {
      return {
        ...ulStyle,
        ...ulScroolYStyle,
      };
    } else {
      return ulStyle;
    }
  }, [scrollPosition, ulStyle, ulScroolYStyle]);

  const hoverCards = useMemo(() => {
    return scrollPosition ? zoomIn : zoomInDown;
  }, [scrollPosition, zoomInDown, zoomIn]);

  return { hoverNav, hoverCards };
};

type Grids = {
  skilsGrid: string;
  portfolioGrid: string;
};

export const ucIconsGrid = ({
  ochange,
  isPortfolio,
}: {
  ochange: (n: string) => void | null;
  isPortfolio?: boolean;
}) => {
  const [grids, setGrids] = useState<Grids>(() => {
    const savedState = JSON.parse(localStorage.getItem("grids") || "{}");
    return {
      skilsGrid: savedState.skilsGrid || "repeat(3, 1fr)",
      portfolioGrid: savedState.portfolioGrid || "repeat(3, 1fr)",
    };
  });

  useEffect(() => {
    localStorage.setItem("grids", JSON.stringify(grids));
  }, [grids]);

  const handleClick = useCallback(
    (grid: string) => {
      setGrids((prevGrids) => ({
        ...prevGrids,
        [isPortfolio ? "portfolioGrid" : "skilsGrid"]: grid,
      }));
      ochange(grid);
    },
    [isPortfolio, ochange]
  );

  const grid = isPortfolio ? grids.portfolioGrid : grids.skilsGrid;

  return { ...grids, grid, handleClick };
};
