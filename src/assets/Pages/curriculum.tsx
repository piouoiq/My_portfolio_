import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { StudyTimeline } from "../Components/Sections/StudyTimelineSection";
import { WorkTimeline } from "../Components/Sections/workTimelineSection";
import { SkillSection } from "../Components/Sections/SkillSection";
import { OtherInfosSection } from "../Components/Sections/OtherInfosSection";
import { useLang } from "../Components/Sections/LangContext";
import { curriculumSectionTabTranslations } from "../Translations/Translations";

export default function Curriculum() {
  const { lang } = useLang();
  const t = curriculumSectionTabTranslations[lang.toLowerCase() as "fr" | "en"];

  return (
    <body
      style={{
        backgroundImage: "url('/Pictures/pexels-steve-28399146.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Header />
      <main>
        <div className=" bg-primary tabs tabs-box  font-bold text-black w-full md:w-6/7 mx-auto m-10">
          <input
            type="radio"
            name="my_tabs_6"
            className="tab text-black hover:border-black hover:border-3"
            aria-label={t.education}
          />
          <div className="tab-content  border-black border-3  p-6">
            <StudyTimeline />
          </div>

          <input
            type="radio"
            name="my_tabs_6"
            className="tab text-black hover:border-black hover:border-3"
            aria-label={t.experience}
          />
          <div className="tab-content border-black border-3 p-6">
            <WorkTimeline />
          </div>

          <input
            type="radio"
            name="my_tabs_6"
            className="tab text-black hover:border-black hover:border-3"
            aria-label={t.skills}
            defaultChecked
          />
          <div className="border-black border-3 tab-content p-6">
            <SkillSection />
          </div>
          <input
            type="radio"
            name="my_tabs_6"
            className="tab text-black hover:border-black hover:border-3"
            aria-label={t.other}
          />
          <div className="border-black border-3 tab-content p-6">
            <OtherInfosSection />
          </div>
        </div>
      </main>
      <Footer />
    </body>
  );
}
