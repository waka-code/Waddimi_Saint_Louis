import { JobDescription, JobDetails, WorkExperienceProps } from "../web/Types/Types";


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
    <h3>
      {"jobTitle" in description ? description.jobTitle : description.position}
    </h3>
    <span>{"jobTitle" in description ? key : description?.title}</span>
    <p>
      {"jobDuration" in description
        ? description?.jobDuration
        : description?.description}
    </p>
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
