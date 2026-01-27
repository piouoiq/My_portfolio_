interface SkillPropsTypes {
  img: string;
  alt: string;
}

export const SkillCard = ({ img, alt }: SkillPropsTypes) => {
  return (
    <>
      <div className="hover-3d">
        {/* content */}
        <figure className="w-20 rounded-2xl">
          <img src={img} alt={alt} />
        </figure>
        {/* 8 empty divs needed for the 3D effect */}
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};
