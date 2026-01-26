interface timelinePropsTypes {
  date: string;
  title: string;
  location: string;
  description: string;
}

export const TimelineCard = ({
  date,
  title,
  location,
  description,
}: timelinePropsTypes) => {
  return (
    <>
      <div className="timeline-start mb-10 md:text-end">
        <time className="font-mono italic">{date}</time>
        <div className="text-lg font-black">{title}</div>
        <p>{location}</p>
        <p>{description}</p>
      </div>
    </>
  );
};
