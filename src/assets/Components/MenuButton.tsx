import { useNavigate } from "react-router";
import { MenuButtonTranslations } from "../Translations/Translations";
import { useLang } from "./Sections/LangContext";

export function MenuButton() {
  const { lang } = useLang();
  const t = MenuButtonTranslations[lang.toLowerCase() as "fr" | "en"];

  const nav = useNavigate();
  const navigate = () => {
    nav("/");
  };

  const navcv = useNavigate();
  const navigatecv = () => {
    navcv("/Curriculum");
  };
  const navProject = useNavigate();
  const navigateProject = () => {
    navProject("/ProjectPage");
  };

  return (
    <>
      <div className="dropdown dropdown-hover dropdown-end">
        <div tabIndex={0} role="button" className="btn bg-primary m-1 text-lg ">
          {t.menu}
        </div>
        <ul
          tabIndex={-1}
          className="dropdown-content menu bg-primary rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li>
            <a
              onClick={navigate}
              className=" hover:bg-black hover:text-white text-md md:text-xl border-0"
            >
              <img
                src="/Pictures/house.svg"
                alt={t.altHome}
                className="size-[1.2em] hover:text-white"
              />
              {t.home}
            </a>
          </li>

          <li>
            <a
              onClick={navigateProject}
              className=" hover:bg-black hover:text-white md:text-xl border-0 "
            >
              <img
                src="/Pictures/folder-code.svg"
                alt={t.altSeeProjects}
                className="size-[1.2em] "
              />
              {t.seeProjects}
            </a>
          </li>
          <li>
            <a
              onClick={navigatecv}
              className=" hover:bg-black hover:text-white text-md md:text-xl border-0"
            >
              <img
                src="/Pictures/file-user.svg"
                alt={t.altCurriculum}
                className="size-[1.2em] "
              />
              {t.curriculum}
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
