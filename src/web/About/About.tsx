import { AboutStyles } from "./AboutStyles";
import Waddy from "../../assets/img/waddy.png";
import { ucTestData } from "../mockup/mockup";
import { Cards } from "../../designs/Cards";
import { CardsWorkExperience } from "../../designs/CardsWorkExperience";
import { ucTranslation } from "../../Translation/resources";
import { JobDetails, ImageStyleProps } from "../Types/Types";
import WhatsApp from "../../assets/svg/WhatsApp.svg";

type WorkExperienceProps = {
  Novosit: JobDetails;
  Upwork: JobDetails;
  Digitador: JobDetails;
};

const ProfessionalJourney = () => {
  const { styles } = AboutStyles();
  const { jobDescriptions, workExperience, imageFiles, whatsapp } = ucTestData();

  return (
    <div
      style={{
        marginTop: "100px",
      }}
    >
      <PersonalProfileSection {...styles.aboutMe} whatsapp={whatsapp}/>
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
  whatsapp
}: {
  container: React.CSSProperties;
  description: React.CSSProperties;
  imgContainer: React.CSSProperties;
  img: React.CSSProperties;
  whatsapp: string;
}) => {
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
              {resources.hi}
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
            width: "100%",
            marginLeft: "100px",
          }}
        >
          <button
            aria-label={resources.contactUs}
            onClick={() => window.open(whatsapp, '_blank')}
            style={{
              height: "40px",
              width: "60%",
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
              }}
            />
            <span>{resources.contactUs}</span>
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
  const { resources } = ucTranslation();

  return (
    <div
      style={{
        ...container,
        display: "flex",
        flexDirection: "column",
        background: "#333333",
      }}
    >
      <div
        style={{
          paddingLeft: "80px",
        }}
      >
        {" "}
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            letterSpacing: "5px",
          }}
        >
          {resources.my}{" "}
          <span
            style={{
              color: "#BA9797",
            }}
          >
            {resources.experience}
          </span>
        </h2>
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
  const { resources } = ucTranslation();

  return (
    <div>
      <div style={container}>
        <div style={{ ...divContainer, position: "relative" }}>
          <div
            style={{
              position: "absolute",
              left: "-100px",
              top: "30px",
              background: "#333333",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <span
              style={{
                fontWeight: "bold",
                letterSpacing: "5px",
                fontSize: "1.5rem",
              }}
            >
              {resources.phrasesOfTheDay}
            </span>
          </div>
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
