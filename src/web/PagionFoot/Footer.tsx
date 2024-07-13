import { ucFooterStyles } from "./FooterStyle";
import { ucTestData } from "../mockup/mockup";

export const Footer = () => {
  const { divFooter, ulFooterStyle } = ucFooterStyles();
  const { social } = ucTestData();

  return (
    <div style={divFooter}>
      <div>2024 Waddimi Saint Louis - wakaCode</div>
      <div>
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
      </div>
    </div>
  );
};
