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
        <p>{location}</p>
      </div>
      <div className="timeline-end">
        <div className="text-lg font-black underline">{title}</div>
        <p>{description}</p>
      </div>
    </>
  );
};
