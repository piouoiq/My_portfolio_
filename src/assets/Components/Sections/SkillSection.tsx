import { Skills } from "../../../Data/Skills";
import { SoftSkills } from "../../../Data/softSkills";
import { SoftSkillCard } from "../Cards/SoftSkillsCard";
import { SkillCard } from "../Cards/technology card";

export const SkillSection = () => {
  return (
    <div className="flex ">
      <div className="basis-1/2">
        <h2 className="underline text-2xl">Hard skills:</h2>
        <ul className="md:grid grid-cols-4 ">
          {Skills.map((key) => (
            <li key={key.img}>
              <SkillCard
                img={key.img}
                alt={key.alt}
                infoBubble={key.infoBubble}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="basis-1/2">
        <h2 className="underline text-2xl">Soft skills:</h2>
        <ul className="md:grid grid-cols-2 ">
          {SoftSkills.map((key) => (
            <li key={key.name}>
              <SoftSkillCard name={key.name} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
