import type { SoftSkillsTypes } from "../../../Types/SoftSkillsTypes";

export const SoftSkillCard = ({ name }: SoftSkillsTypes) => {
  return (
    <>
      <p className="p-5">- {name}</p>
    </>
  );
};
