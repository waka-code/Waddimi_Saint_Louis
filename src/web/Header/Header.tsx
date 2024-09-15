import { ucI18n } from "../../Translation/hook";
import { ucHeaderStyles } from "./HeaderStyles";
import { ucHeader } from "./hook";
import { PiWarningDiamondDuotone } from "react-icons/pi";
import spain from "../../assets/svg/spain.svg";
import us from "../../assets/svg/us.svg";
import { ucTestData } from "../mockup/mockup";

export const Header = () => {
  const { navStyle, liStyle, ulStyle, ulScroolYStyle } = ucHeaderStyles();
  const { hoverNav, navigation, menuNav, routeMap, resources, isVisible } =
    ucHeader({
      ulScroolYStyle,
      ulStyle,
    });
  const { handleLanguage, language, lang } = ucI18n();
  const { social } = ucTestData();

  return (
    <nav style={navStyle}>
      {isVisible && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "70px",
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
      <div
        style={{
          position: "fixed",
          top: "-10px",
          left: "0",
          margin: "10px",
          paddingLeft: "10px",
          paddingRight: "10px",
          paddingBottom: "10px",
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "10px",
          backgroundColor: "#333333",
          borderRadius: "5%",
          width: "40px",
        }}
      >
        <div
          style={{
            height: "150px",
            backgroundColor: "#BA9797",
            width: "10%",
          }}
        />

        {social.map((i, idx) => {
          return (
            <div className="social" key={idx}>
              <a href={i.url} target="_blank" rel="noreferrer">
                <img
                  key={idx}
                  src={i.icon}
                  width={25}
                  title={i.name}
                  alt={i.name}
                  style={{
                    cursor: "pointer",
                  }}
                />
              </a>
            </div>
          );
        })}
      </div>
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
          top: "3.5%",
          right: "0%",
          gap: "15px",
          display: "flex",
          flexDirection: "column",
          width: "100px",
          height: "110px",
        }}
      >
        {lang.map((i, idx) => {
          return (
            <button
              aria-label={"language"}
              key={idx}
              onClick={() => {
                handleLanguage(i);
              }}
              style={{
                backgroundColor: language === i ? "#333333" : "#141414",
                border: language === i ? "2px solid #787878" : "none",
                width: "100px",
                maxHeight: "150px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "130px",
                cursor: "pointer",
                transition: "background-color 0.5s ease, color 0.5s ease",
                borderBottomLeftRadius: "100px",
                borderTopLeftRadius: "100px",
                position: "relative",
                borderRight: "none",
              }}
            >
              <img key={idx} src={i === "es" ? spain : us} width={20} alt={i} />
            </button>
          );
        })}
      </div>
    </nav>
  );
};
