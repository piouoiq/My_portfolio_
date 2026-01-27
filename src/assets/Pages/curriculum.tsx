import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { StudyTimeline } from "../Components/StudyTimelineSection";
import { WorkTimeline } from "../Components/workTimelineSection";

export default function Curriculum() {
  return (
    <>
      <Header />
      <main>
        <div
          className=" tabs tabs-box font-gruppo font-bold bg-cover text-black"
          style={{ backgroundImage: "url('/Pictures/background.svg')" }}
        >
          <input
            type="radio"
            name="my_tabs_6"
            className="tab hover:border-black hover:border-3"
            aria-label="My studies"
          />
          <div className="tab-content border-black border-3  p-6">
            <StudyTimeline />
          </div>

          <input
            type="radio"
            name="my_tabs_6"
            className="tab hover:border-black hover:border-3"
            aria-label="My work Experience"
          />
          <div className="tab-content border-black border-3 p-6">
            <WorkTimeline />
          </div>

          <input
            type="radio"
            name="my_tabs_6"
            className="tab hover:border-black hover:border-3"
            aria-label="My skills"
            defaultChecked
          />
          <div className="border-black border-3 tab-content  p-6">
            Tab content 3
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
