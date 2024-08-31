import { useMediaQuery } from "react-responsive";

export const ucMediaQuery = () => {
  const isMobileDevice = useMediaQuery({ query: "(maz-device-width: 479px)" });
  const isTabletDevice = useMediaQuery({
    query: "only screen and (min-device-width: 480px) and (max-width : 767px)",
  });
  const isLaptop = useMediaQuery({
    query: "only screen and (min-device-width: 768px) and (max-width : 1023px)",
  });
  const isDesktop = useMediaQuery({
    query:
      "only screen and (min-device-width: 1024px) and (max-width : 1199px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-device-width: 1200px)" });

  return { isMobileDevice, isTabletDevice, isLaptop, isDesktop, isBigScreen };
};
