import { useLocation, useNavigate } from "react-router-dom";
import { ucScrollHover } from "../../designs/hook";
import { ucTranslation } from "../../Translation/resources";
import { useEffect, useMemo, useState } from "react";

export const ucHeader = ({
  ulScroolYStyle,
  ulStyle,
}: {
  ulScroolYStyle: React.CSSProperties;
  ulStyle: React.CSSProperties;
}) => {
  const { resources } = ucTranslation();
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();
  const navigation = useNavigate();
  const menuNav: string[] = [
    resources.home,
    resources.aboutMe,
    resources.portfolio,
    resources.skills,
  ];

  const routeMap = useMemo(() => ({
    [resources.home]: "/",
    [resources.aboutMe]: "/about",
    [resources.portfolio]: "/portfolio",
    [resources.skills]: "/skills",
  }), [resources]);
 
  const { hoverNav } = ucScrollHover({
    ulScroolYStyle: ulScroolYStyle,
    ulStyle: ulStyle,
    zoomIn: undefined,
    zoomInDown: undefined,
  });

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [location]);
  
  return {
    hoverNav,
    navigation,
    menuNav,
    routeMap,
    resources,
    location,
    isVisible
  };
};
