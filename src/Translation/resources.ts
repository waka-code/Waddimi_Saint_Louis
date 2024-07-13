import { useTranslation } from "react-i18next";

export function ucTranslation() {
  const { t } = useTranslation();
  const resources = {
    systemEngineer: t("systemEngineer"),
    hiIamLouis: t("hiIamLouis"),
    viwCv: t("viwCv"),
    downloadCv: t("downloadCv"),
    welcomeAWakacode: t("welcomeAWakacode"),
    inProgress: t("inProgress"),
    listOfOngoingProjects: t("listOfOngoingProjects"),
    description: t("description"),
    viewCode: t("viewCode"),
    IamLouis: t("IamLouis"),
    aboutMe: t("aboutMe"),
    home: t("home"),
    portfolio: t("portfolio"),
    skills: t("skills"),
    iAmAPassionate: t("iAmAPassionate"),
    twoYears: t("twoYears"),
    typist: t("typist"),
    softSkillsAndTools: t("softSkillsAndTools"),
    wakaCode: t("wakaCode"),	
    codingWithAwareness: t("codingWithAwareness"),
    AlwaysCode: t("AlwaysCode"),
    theThreeUnexpectedVirtuesOfaProgrammer: t("theThreeUnexpectedVirtuesOfaProgrammer"),	
    mostOfYouAreFamiliar: t("mostOfYouAreFamiliar"),	
    theImportanceOfMeasurement: t("theImportanceOfMeasurement"),
    measurementIsTheFirst: t("measurementIsTheFirst"),	
    theArtOfDebugging: t("theArtOfDebugging"),	
    debugging: t("debugging"),
    unavailable: t("unavailable"),	
  };
  return { resources };
}
