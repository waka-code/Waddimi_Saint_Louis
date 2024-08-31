export const ucHeaderStyles = () => {
  const navStyle: React.CSSProperties = {
    backgroundColor: "transparent",
    color: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    transition: "0.5s",
    maxWidth: "100%",
    position: "relative",
  };

  const ulStyle: React.CSSProperties = {
    listStyle: "none",
    display: "flex",
    gap: "50px",
  };

  const ulScroolYStyle: React.CSSProperties = {
    position: "fixed",
    maxWidth: "60%",
    top: 0,
    zIndex: 1000,
    transition: "0.5s",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50px",
    padding: "10px",
    color: "white",
  };

  const liStyle: React.CSSProperties = {
    cursor: "pointer",
    padding: "5px 15px",
    fontSize: "20px",
    color: "white",
  };

  return {
    navStyle,
    liStyle,
    ulStyle,
    ulScroolYStyle
  };
};
