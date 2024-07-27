import { ucI18n } from "../../Translation/hook";
import { ucHeaderStyles } from "./HeaderStyles";
import { ucHeader } from "./hook";
import { PiWarningDiamondDuotone } from "react-icons/pi";

export const Header = () => {
  const { navStyle, liStyle, ulStyle, ulScroolYStyle } = ucHeaderStyles();
  const { hoverNav, navigation, menuNav, routeMap, resources, isVisible } =
    ucHeader({
      ulScroolYStyle,
      ulStyle,
    });
  const { handleLanguage, language, lang } = ucI18n();

  return (
    <nav style={navStyle}>
      {isVisible && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            margin: "10px",
            color: "white",
            padding: "10px",
            textAlign: "center",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            backgroundColor: "rgba(0, 0, 0, 0.44)",
            borderRadius: "5%",
          }}
        >
          <PiWarningDiamondDuotone color="yellow" />
          <text>{resources.responsiveDesignUnavailable}</text>
          <PiWarningDiamondDuotone color="yellow" />
        </div>
      )}
      <ul style={hoverNav}>
        {menuNav.map((item, index) => {
          let ruta = routeMap[item] || "/";

          return (
            <li key={index} onClick={() => navigation(ruta)} style={liStyle}>
              {item}
            </li>
          );
        })}
      </ul>

      <div
        style={{
          position: "fixed",
          top: "3%",
          right: "3%",
          border: "1px solid rgba(0, 0, 0, 0.24)",
          // boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.24)",
          boxShadow: "0 5px 8px 0 #141414",
          zIndex: 1000,
          borderRadius: "5%",
        }}
      >
        {lang.map((i, idx) => {
          return (
            <button
              key={idx}
              onClick={() => {
                handleLanguage(i);
              }}
              style={{
                backgroundColor:
                  language === i ? "rgba(0, 0, 0, 0.44)" : "transparent",
                color: language === i ? "white" : "black",
                width: "40px",
                border: "none",
                fontSize: "25px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "40px",
                cursor: "pointer",
                transition: "background-color 0.5s ease, color 0.5s ease",
              }}
            >
              <text
                style={{
                  fontSize: "15px",
                }}
              >
                {i}
              </text>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
