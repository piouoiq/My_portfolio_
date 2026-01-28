import { Skills } from "../../Data/Skills";
import { SkillCard } from "./technology card";

export const SkillSection = () => {
  return (
    <div className="flex ">
      <div className="basis-1/2">
        <ul className="grid grid-cols-4 ">
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
        <p>soft skills</p>
      </div>
    </div>
  );
};
