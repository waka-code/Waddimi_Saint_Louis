export function ucPortfolioStyle() {
  const portfolioStyle: React.CSSProperties = {
    display: "grid",
    gap: "30px",
    gridAutoRows: "minmax(100px, auto)",
    overflow: "hidden",
    borderRadius: "10px",
    cursor: "pointer",
    padding: "20px",
  };

  const portfolioGrid: React.CSSProperties = {
    objectFit: "cover",
    borderRadius: "10px",
    padding: "5px 0",
    transition: "all 0.6s ease",
    boxShadow: "0 2px 4px 0 #141414",
    position: "relative",
    border: "2px solid #141414",
    height: "40vh",
    display: "flex",
    alignItems: "center",
  };

  const portfolioImg: React.CSSProperties = {
    width: "100%",
    height: "auto",
    borderRadius: "10px",
    objectFit: "cover",
  };

  const portfolioContainer: React.CSSProperties = { padding: "60px 0 5px 0" };

  const portfolioDiv: React.CSSProperties = {
    borderBottom: "1px solid white",
    padding: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const imgStyle: React.CSSProperties = {borderRadius: "10px", objectFit: "cover"}

  return {
    portfolioStyle,
    portfolioGrid,
    portfolioImg,
    portfolioContainer,
    portfolioDiv,
    imgStyle
  };
}
