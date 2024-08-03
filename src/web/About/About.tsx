import { AboutStyles } from "./AboutStyles";
import Waddy from "../../assets/img/waddy.png";
import { ucTestData } from "../mockup/mockup";
import { Cards } from "../../designs/Cards";
import { CardsWorkExperience } from "../../designs/CardsWorkExperience";
import { ucTranslation } from "../../Translation/resources";
import { AboutStyle, JobDetails, ImageStyleProps } from "../Types/Types";
import WhatsApp from "../../assets/svg/WhatsApp.svg";

type WorkExperienceProps = {
  Novosit: JobDetails;
  Upwork: JobDetails;
  Digitador: JobDetails;
};

const ProfessionalJourney = () => {
  const { styles } = AboutStyles();
  const { jobDescriptions, workExperience, imageFiles } = ucTestData();

  return (
    <div
      style={{
        marginTop: "100px",
      }}
    >
      {/* <div data-aos="fade-down">
        <span style={styles.descriptionH2}>{resources.IamLouis}</span>
      </div> */}
      <PersonalProfileSection {...styles.aboutMe} />
      <WorkExperience
        workExperience={workExperience}
        {...styles.workExperience}
      />
      <ProfileShowcase
        jobDescriptions={jobDescriptions}
        imageFiles={imageFiles}
        {...styles.pictureMe}
      />
    </div>
  );
};

export default ProfessionalJourney;
const PersonalProfileSection = ({
  container,
  description,
  imgContainer,
  img,
}: AboutStyle) => {
  const { resources } = ucTranslation();

  return (
    <div style={container}>
      <div style={imgContainer} data-aos="fade-right">
        <img src={Waddy} alt="waddy" style={img} />
        <div className="PictureMeDescription">
          <span>Waddimi Saint Louis</span>
          <span>{resources.systemEngineer} - Fullstack Developer</span>
        </div>
      </div>
      <div style={description} data-aos="fade-left">
        <div>
          <h2 style={{ display: "flex", flexWrap: "wrap", width: "500px" }}>
            <span
              style={{
                fontSize: "15px",
                marginBottom: "10px",
                color: "#BA9797",
              }}
            >
              Hi, Welcome
            </span>
            {resources.iAmAPassionate}
          </h2>
          <span
            style={{
              display: "flex",
              flexWrap: "wrap",
              width: "500px",
            }}
          >
            {resources.twoYears}
          </span>
        </div>
        <div
          style={{
            width: "75%",
          }}
        >
          <button
            style={{
              height: "40px",
              width: "50%",
              cursor: "pointer",
              fontWeight: "bold",
              letterSpacing: "4px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
             <img
              src={WhatsApp}
              alt="whatsapp"
              style={{
                width: "20px",
                height: "20px",
                marginLeft: "10px",
              }}
            />
            <span>CONTACT US</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const WorkExperience = ({
  box,
  workExperience,
  container,
}: {
  box: React.CSSProperties;
  container: React.CSSProperties;
  workExperience: WorkExperienceProps;
}) => {
  return (
    <div style={{...container, display:"flex", flexDirection:"column", background:"#333333"}}>
     <div style={{
      paddingLeft:"110px",
     }}> <h2
     style={{
       fontSize:"2.5rem",
     }}>My <span style={{
        color:"#BA9797",
        fontSize:"2.5rem",
        fontWeight:"bold",
      }}>Experience</span></h2>
      </div>
       <div style={container}>
      <CardsWorkExperience
        jobDescriptions={{}}
        aboutWorkExperienceStyle={box}
        isAboutSection={true}
        workExperienceDetails={workExperience}
      />
    </div>
    </div>
  );
};

const ProfileShowcase = ({
  jobDescriptions,
  imageFiles,
  container,
  divContainer,
  div,
  img,
  picture,
}: ImageStyleProps) => {
  return (
    <div>
      <div style={container}>
        <div style={divContainer}>
          <CardsWorkExperience
            jobDescriptions={jobDescriptions}
            aboutWorkExperienceStyle={undefined}
            isAboutSection={false}
            workExperienceDetails={undefined}
          />
        </div>
      </div>

      <div style={picture}>
        <Cards
          cardImageStyle={picture}
          imageMetadata={imageFiles}
          imageContainerStyle={div}
          imageStyle={img}
        />
      </div>
    </div>
  );
};
