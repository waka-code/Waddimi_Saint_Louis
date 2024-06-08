import { useNavigate } from "react-router-dom";
import { ucFooterStyles } from "./FooterStyle";
import { ucTestData } from "../mockup/mockup";

export const Footer = () => {
  const navigate = useNavigate();
  const { divFooter, ulFooterStyle } = ucFooterStyles();
  const { social } = ucTestData();

  return (
    <div style={divFooter}>
      <div>2024 Waddimi Saint Louis - wakaCode</div>
      <div>
        <h3>Elsewhere</h3>
        {social.map((i, idx) => {
          return (
            <ul
              className="ulFooterStyle"
              style={ulFooterStyle}
              key={idx}
              onClick={() => navigate(i.url)}
            >
              {i.name}
            </ul>
          );
        })}
      </div>
    </div>
  );
};
