import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { StudyTimeline } from "../Components/StudyTimelineSection";
import { WorkTimeline } from "../Components/workTimelineSection";

export default function Curriculum() {
  return (
    <>
      <Header />
      <main
        className=" font-gruppo font-bold bg-cover text-black"
        style={{ backgroundImage: "url('/Pictures/background.svg')" }}
      >
        <div className="flex">
          <div>
            <StudyTimeline />
          </div>
          <div>
            <WorkTimeline />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
