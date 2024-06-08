export const ucFooterStyles = () => {
  const divFooter: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px 0 20px 0",
    borderTop: "1px solid white",
  };

  const ulFooterStyle = {
    cursor: "pointer",
  };
  
  return {
    divFooter,
    ulFooterStyle,
  };
};
