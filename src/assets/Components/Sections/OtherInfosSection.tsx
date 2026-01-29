import { SoftSkillCard } from "../Cards/SoftSkillsCard";
import { Langages } from "../../../Data/languages";
import { OtherInfos } from "../../../Data/OtherInfos";

export const OtherInfosSection = () => {
  return (
    <div className="flex ">
      <div className="basis-1/2">
        <h2 className="underline text-2xl">Languages spoken:</h2>
        <ul className="md:grid grid-cols-2 ">
          {Langages.map((key) => (
            <li key={key.name}>
              <SoftSkillCard name={key.name} />
            </li>
          ))}
        </ul>
      </div>
      <div className="basis-1/2">
        <h2 className="underline text-2xl">Other Informations about me: </h2>
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
