import { ucI18n } from "../../Translation/hook";
import { ucHeaderStyles } from "./HeaderStyles";
import { ucHeader } from "./hook";
import { PiWarningDiamondDuotone } from "react-icons/pi";

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
            <div className="social">
              <a href={i.url} target="_blank" rel="noreferrer">
                <img
                  key={idx}
                  src={i.icon}
                  width={25}
                  title={i.name}
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
          top: "1.5%",
          right: "0%",
          height: "100px",
          gap: "5px",
          display: "flex",
          flexDirection: "column",
          width: "80px",
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
                backgroundColor: language === i ? "#141414" : "#E8DEDE",
                color: language === i ? "#BA9797" : "#141414",
                border: language === i ? "1px solid #BA9797" : "none",
                width: "80px",
                maxHeight: "120px",
                fontSize: "25px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100px",
                cursor: "pointer",
                transition: "background-color 0.5s ease, color 0.5s ease",
                borderBottomLeftRadius: "100px",
                borderTopLeftRadius: "100px",
              }}
            >
              <text
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  letterSpacing: "1px",
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
