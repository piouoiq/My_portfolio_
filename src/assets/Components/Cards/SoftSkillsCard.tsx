import type { SoftSkillsTypes } from "../../../Types/SoftSkillsTypes";
import { useLang } from "../Sections/LangContext";
import { softSkillsTranslations } from "../../../Data/Translations";

export const SoftSkillCard = ({ name }: SoftSkillsTypes) => {
  const { lang } = useLang();
  const label =
    softSkillsTranslations[lang.toLowerCase() as "fr" | "en"][
      name as keyof (typeof softSkillsTranslations)["fr"]
    ];

  return (
    <>
      <p className="p-5">- {label}</p>
    </>
  );
};
