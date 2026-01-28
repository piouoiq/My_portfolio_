interface SkillPropsTypes {
  img: string;
  alt: string;
  infoBubble: string;
}

export const SkillCard = ({ img, alt, infoBubble }: SkillPropsTypes) => {
  return (
    <>
      <div className="hover-3d tooltip" data-tip={infoBubble}>
        {/* content */}
        <figure className="w-20 ">
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
