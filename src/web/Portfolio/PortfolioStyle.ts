export function ucPortfolioStyle() {
  const portfolioStyle: React.CSSProperties = {
    display: "grid",
    gap: "30px",
    gridAutoRows: "minmax(100px, auto)",
    overflow: "hidden",
    borderRadius: "10px",
    cursor: "pointer",
  };

  const portfolioGrid: React.CSSProperties = {
    objectFit: "cover",
    borderRadius: "10px",
    padding: "5px 0",
    transition: "all 0.6s ease",
    boxShadow: "0 8px 32px 0 #141414",
    position: "relative",
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

  return {
    portfolioStyle,
    portfolioGrid,
    portfolioImg,
    portfolioContainer,
    portfolioDiv,
  };
}
