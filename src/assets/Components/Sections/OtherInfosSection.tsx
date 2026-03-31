import { SoftSkillCard } from "../Cards/SoftSkillsCard";
import { Langages } from "../../../Data/languages";
import { OtherInfos } from "../../../Data/OtherInfos";
import { useLang } from "../Sections/LangContext";
import { sectionHeadersTranslations } from "../../../Data/Translations";

export const OtherInfosSection = () => {
  const { lang } = useLang();
  const t = sectionHeadersTranslations[lang.toLowerCase() as "fr" | "en"];

  return (
    <div className="flex ">
      <div className="basis-1/2">
        <h2 className="underline text-2xl">{t.languagesSpoken}</h2>
        <ul className="md:grid grid-cols-2 ">
          {Langages.map((key) => (
            <li key={key.name}>
              <SoftSkillCard name={key.name} />
            </li>
          ))}
        </ul>
      </div>
      <div className="basis-1/2">
        <h2 className="underline text-2xl">{t.otherInformations}</h2>
        <ul className="md:grid grid-cols-2 ">
          {OtherInfos.map((key) => (
            <li key={key.name}>
              <SoftSkillCard name={key.name} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
