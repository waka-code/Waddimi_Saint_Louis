import React, {
  CSSProperties,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { ucMediaQuery } from "./mediaQuery/hook";
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

export const ucResponsiveStyle = ({
  mobile,
  tablet,
  laptop,
  desktop,
  baseStyle,
}: {
  mobile: string,
  tablet: string,
  laptop: string,
  desktop: string,
  baseStyle: any;
}) => {
  const { isMobileDevice, isTabletDevice, isLaptop, isDesktop } = ucMediaQuery();

  const deviceStyles = {
    isMobileDevice: mobile,
    isTabletDevice: tablet,
    isLaptop: laptop,
    isDesktop: desktop,
  };

  // Arreglar el error
  const responsiveStyle = Object.entries(deviceStyles).find(
    ([device, _]) => {
      if (device === 'isMobileDevice' && isMobileDevice) return true;
      if (device === 'isTabletDevice' && isTabletDevice) return true;
      if (device === 'isLaptop' && isLaptop) return true;
      if (device === 'isDesktop' && isDesktop) return true;
    }
  )?.[1] || baseStyle;

  console.log(responsiveStyle);

  return { ...baseStyle, ...responsiveStyle };
};