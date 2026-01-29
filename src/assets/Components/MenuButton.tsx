import { useNavigate } from "react-router";

export function MenuButton() {
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
        <div tabIndex={0} role="button" className="btn m-1 text-lg">
          Menu
        </div>
        <ul
          tabIndex={-1}
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li>
            <a
              onClick={navigate}
              className=" hover:bg-black hover:text-white text-md md:text-xl border-0"
            >
              <img
                src="/Pictures/house.svg"
                alt="home icon"
                className="size-[1.2em] hover:text-white"
              />
              Home
            </a>
          </li>

          <li>
            <a
              onClick={navigateProject}
              className=" hover:bg-black hover:text-white md:text-xl border-0 "
            >
              <img
                src="/Pictures/folder-code.svg"
                alt="folder code icon"
                className="size-[1.2em] "
              />
              See projects
            </a>
          </li>
          <li>
            <a
              onClick={navigatecv}
              className=" hover:bg-black hover:text-white text-md md:text-xl border-0"
            >
              <img
                src="/Pictures/file-user.svg"
                alt="resume file icon"
                className="size-[1.2em] "
              />
              Resume
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
