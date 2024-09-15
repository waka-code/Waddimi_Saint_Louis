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
    // padding: "2  0 10px 0",
    transition: "all 0.6s ease",
    boxShadow: "0 2px 4px 0 #141414",
    position: "relative",
    border: "2px solid #141414",
    // height: "100%",
    display: "flex",
    alignItems: "center",
  };

  const portfolioImg: React.CSSProperties = {
    width: "100%",
    borderRadius: "10px",
    height: "100%",
    objectFit: "cover",
  };

   const portfolioDiv: React.CSSProperties = {
    borderBottom: "1px solid white",
    padding: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const imgStyle: React.CSSProperties = {
    borderRadius: "10px",
    objectFit: "cover",
    width: "100%",
    height: "auto",
  };

  return {
    portfolioStyle,
    portfolioGrid,
    portfolioImg,
    portfolioDiv,
    imgStyle,
  };
}
