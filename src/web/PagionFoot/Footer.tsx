import { ucFooterStyles } from "./FooterStyle";
import { ucTestData } from "../mockup/mockup";

export const Footer = () => {
  const { divFooter } = ucFooterStyles();
  // const { social } = ucTestData();

  return (
    <div style={divFooter}>
      <span style={{
        color: "white",
        fontWeight: "bold",
        letterSpacing: "3px",
        fontSize: "18px",
      }}>2024 Waddimi Saint Louis - wakaCode</span>
      {/* <div>
        <h3>Elsewhere</h3>
        {social.map((i) => {
          return (
            <a
              href={i.url}
              target="_blank"
              rel="noreferrer"
              style={ulFooterStyle}
            >
              {i.name}
            </a>
          );
        })}
      </div> */}
    </div>
  );
};
