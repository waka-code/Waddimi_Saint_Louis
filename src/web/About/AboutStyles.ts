export function AboutStyles() {
  const styles = {
    descriptionH2: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "150px",
      padding: "60px 0 60px 0",
    },
    aboutMe: {
      container: {
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        margin: "0 0 100px 0",
      },
      description: {
        display: "flex",
        flexDirection: "column" as "column",
        alignItems: "center",
        padding: "20px",
        width: "40%",
        gap: "10px",	
      },
      imgContainer: {
        height: "600px",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 8px 32px 0 #141414",
        position: "relative" as "relative",
      },
      img: {
        width: "450px",
        height: "600px",
        objectFit: "cover" as "cover",
      },
    },
    workExperience: {
      box: {
        padding: "10px",
        borderRadius: "10px",
        boxShadow: "0 8px 32px 0 #141414",
        backgroundColor: "#141414",
        width: "350px",
        height: "250px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column" as "column",
        alignItems: "center",
        transition: "all 0.6s ease",
        cursor: "pointer",
      },
      container: {
        display: "flex",
        padding: "60px",
        justifyContent: "Space-around",
      },
    },
    pictureMe: {
      container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "100px",
      },
      divContainer: {
        display: "grid",
        gridTemplateColumns: "450px 450px",
        gap: "40px",
        borderRadius: "10px",
        padding: "40px",
        backgroundColor: "#141414",
        boxShadow: "0 8px 32px 0 #141414",
      },
      picture: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        padding: "60px",
      },
      div: {
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 8px 32px 0 #141414",
        position: "relative" as "relative",
      },
      img: {
        width: "auto",
        height: "800px",
        objectFit: "cover" as "cover",
      },
    },
  };

  return { styles };
}
