export type CardStyleProps = {
  cardImageStyle: React.CSSProperties;
  imageMetadata: {
    [key: string]: string;
  };
  imageContainerStyle: React.CSSProperties;
  imageStyle: React.CSSProperties;
};

export type JobDescription = {
  position: string;
  title: string;
  description: string;
};

export type JobDetails = {
  jobTitle: string;
  jobDuration: string;
  stack: string;
  description: string;
};

export type WorkExperienceProps = {
  jobDescriptions: Record<string, JobDescription>;
  isAboutSection: boolean;
  aboutWorkExperienceStyle: React.CSSProperties | undefined;
  workExperienceDetails: Record<string, JobDetails> | undefined;
};

export type JobDescriptionSet = {
  firstJob: JobDescription;
  secondJob: JobDescription;
  thirdJob: JobDescription;
  fourthJob: JobDescription;
};

export type ImageStyleProps = {
  jobDescriptions: JobDescriptionSet;
  imageFiles: {
    imageFile00: string;
    imageFile01: string;
  };
  container: React.CSSProperties;
  divContainer: React.CSSProperties;
  div: React.CSSProperties;
  img: React.CSSProperties;
  picture: React.CSSProperties;
};

// export type AboutStyle = {
//   container: React.CSSProperties;
//   description: React.CSSProperties;
//   imgContainer: React.CSSProperties;
//   img: React.CSSProperties;
// };
