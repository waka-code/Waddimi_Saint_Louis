import { ucI18n } from "../../Translation/hook";
import { ucHeaderStyles } from "./HeaderStyles";
import { ucHeader } from "./hook";

export const Header = () => {
  const { navStyle, liStyle, ulStyle, ulScroolYStyle } = ucHeaderStyles();
  const { hoverNav, navigation, menuNav, routeMap } = ucHeader({
    ulScroolYStyle,
    ulStyle,
  });
  
  const { handleLanguage, language, lang, } = ucI18n();

  return (
    <nav style={navStyle}>
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
          border: "1px solid black",
          boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.24)",
          zIndex: 1000,
        }}
      >
        {lang.map((i, idx) => {
          return (
            <button
              key={idx}
              onClick={() => {
                handleLanguage(i);
              }}
              className="btnCv"
              style={{
                backgroundColor:
                  language === i ? "rgba(0, 0, 0, 0.74)" : "transparent",
                color: language === i ? "white" : "black",
                padding: "9px",
                width: "50px",
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
