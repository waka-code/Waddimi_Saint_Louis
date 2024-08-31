import { useMemo } from "react";
import { ucMediaQuery } from "../../designs/mediaQuery/hook";

export const ucHomeStyles = () => {
  
  const divContainer: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const divStyles: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "auto",
    padding: "60px 0 5px 0",
    width: "100%",
    overflow: "hidden",
  };

  const h1Styles: React.CSSProperties = {
    color: "white",
    fontSize: "130px",
    textAlign: "center",
    lineHeight: "1.1",
    display: "flex",
    flexDirection: "column",
  };

  const h2Styles: React.CSSProperties = {
    color: "white",
    fontSize: "50px",
    textAlign: "center",
  };

  const pStyles: React.CSSProperties = {
    color: "white",
    fontSize: "20px",
    textAlign: "center",
    display: "flex",
    flexWrap: "wrap",
  };

  return { divStyles, h1Styles, h2Styles, pStyles, divContainer };
};

export const ucProjectDisplayStyles = () => {
  const { isMobileDevice, isTabletDevice, isLaptop, isDesktop } =
  ucMediaQuery();
  const responsiveGridTemplateColumns = useMemo(() => {
    const deviceGridTemplateColumns = {
      isMobileDevice: "repeat(1, 1fr)",
      isTabletDevice: "repeat(1, 1fr)",
      isLaptop: "repeat(1, 1fr)",
      isDesktop: "repeat(1, 1fr)",
    };
  
    const gridTemplateColumns = Object.entries(deviceGridTemplateColumns).find(
      ([device]) => eval(device)
    )?.[1] || "repeat(2, 1fr)";
  
    return gridTemplateColumns;
  },[isMobileDevice, isTabletDevice, isLaptop, isDesktop])

  const widthAndHeight = useMemo(() => {
    const deviceDimensions = {
      isMobileDevice: { width: "300px", height: "30vh" },
      isTabletDevice: { width: "500px", height: "30vh" },
      isLaptop: { width: "700px", height: "50vh" },
      isDesktop: { width: "700px", height: "50vh" },
    };
  
    const currentDevice = Object.entries(deviceDimensions).find(
      ([device]) => {
        switch (device) {
          case 'isMobileDevice':
            return isMobileDevice;
          case 'isTabletDevice':
            return isTabletDevice;
          case 'isLaptop':
            return isLaptop;
          case 'isDesktop':
            return isDesktop;
          default:
            return false;
        }
      }
    )?.[1] || { width: "100%", height: "40vh" };
  
    return currentDevice;
  }, [isMobileDevice, isTabletDevice, isLaptop, isDesktop]);
  
  const divStyles: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: responsiveGridTemplateColumns,
    gridTemplateRows: "repeat(1, 1fr)",
    gap: "4rem",
    cursor: "pointer",
    padding: "100px 0 40px 0",
    alignItems: "center",
   };

  const projectGrid: React.CSSProperties = {
    borderRadius: "10px",
    transition: "all 0.6s ease",
    boxShadow: "0 2px 4px 0 #141414",
    border: "2px solid #141414",
    position: "relative",
    display: "flex",
    width:widthAndHeight.width,
    height:widthAndHeight.height
  };

  return { divStyles, projectGrid };
};
