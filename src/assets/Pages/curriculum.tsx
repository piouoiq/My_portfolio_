import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { StudyTimeline } from "../Components/Sections/StudyTimelineSection";
import { WorkTimeline } from "../Components/Sections/workTimelineSection";
import { SkillSection } from "../Components/Sections/SkillSection";

export default function Curriculum() {
  return (
    <>
      <Header />
      <main
        className="bg-cover"
        style={{ backgroundImage: "url('/Pictures/background.svg')" }}
      >
        <div className=" bg-orange-200 tabs tabs-box font-gruppo font-bold text-black">
          <input
            type="radio"
            name="my_tabs_6"
            className="tab text-black hover:border-black hover:border-3"
            aria-label="My studies"
          />
          <div className="tab-content  border-black border-3  p-6">
            <StudyTimeline />
          </div>

          <input
            type="radio"
            name="my_tabs_6"
            className="tab text-black hover:border-black hover:border-3"
            aria-label="My work Experience"
          />
          <div className="tab-content border-black border-3 p-6">
            <WorkTimeline />
          </div>

          <input
            type="radio"
            name="my_tabs_6"
            className="tab text-black hover:border-black hover:border-3"
            aria-label="My skills"
            defaultChecked
          />
          <div className="border-black border-3 tab-content p-6">
            <SkillSection />
          </div>
          <input
            type="radio"
            name="my_tabs_6"
            className="tab text-black hover:border-black hover:border-3"
            aria-label="Other infos"
          />
          <div className="border-black border-3 tab-content p-6">
            <p>To be added : languages, hobbies, pitch</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
