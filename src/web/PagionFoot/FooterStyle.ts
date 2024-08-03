export const ucFooterStyles = () => {
  const divFooter: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px 0 20px 0",
    borderTop: "1px solid white",
  };

  const ulFooterStyle = {
    cursor: "pointer",
    color: "white",
    textDecoration: "none",
    display: "flex",
    padding: "5px",
  };
  
  return {
    divFooter,
    ulFooterStyle,
  };
};
