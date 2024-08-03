import {
  JobDescription,
  JobDetails,
  WorkExperienceProps,
} from "../web/Types/Types";

const WorkExperienceItem: React.FC<{
  aboutWorkExperienceStyle: React.CSSProperties | undefined;
  description: JobDescription | JobDetails;
  isAboutSection: boolean;
  key: number;
}> = ({ aboutWorkExperienceStyle, description, isAboutSection, key }) => (
  <div
    key={key}
    className={isAboutSection ? "AboutWorkExperienceBox" : undefined}
    style={aboutWorkExperienceStyle}
  >
    {"jobDuration" in description ? (
      <div style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        padding: "1rem",
      }}>
        <span>{description?.jobDuration}</span>
        <span style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          color:"#BA9797"
        }}>{description.jobTitle}</span>
        <span>{description.stack}</span>
        <p>{description.description}</p>
      </div>
    ) : (
      <div>
        <h3>{description.position}</h3>
        <span>{description?.title}</span>
        <p>{description?.description}</p>
      </div>
    )}
  </div>
);

export function CardsWorkExperience({
  jobDescriptions,
  isAboutSection,
  aboutWorkExperienceStyle,
  workExperienceDetails,
}: WorkExperienceProps) {
  const desciption = isAboutSection ? workExperienceDetails : jobDescriptions;
  return (
    <>
      {desciption &&
        Object.keys(desciption).map((key, idx) => (
          <WorkExperienceItem
            key={idx}
            description={desciption[key as keyof typeof desciption]}
            isAboutSection={isAboutSection}
            aboutWorkExperienceStyle={aboutWorkExperienceStyle}
          />
        ))}
    </>
  );
}
