import Header from "../Components/Header";

import Footer from "../Components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main
        className=" font-gruppo font-bold bg-cover text-black"
        style={{ backgroundImage: "url('/Pictures/background.svg')" }}
      >
        <div
          className="grid grid-cols-2 px-4 py-4
        "
        >
          <h1 className="text-4xl  underline">About me:</h1>
        </div>
        <div className="grid grid-cols-2  md:grid-cols-3 px-4 gap-5 text-center items-center text-2xl md:text-4xl md:">
          <img
            className="px-8 w-full md:w-sm rounded-[59%_41%_54%_46%/72%_20%_80%_28%]"
            src="/Pictures/Avatar.png"
            alt="Melissa's photograph"
          />
          <p>
            Hi ! I'm Melissa, a student developer. I'm currently learning
            everything needed to become a dev. I can't wait to work on
            innovative and meaningful projects.
          </p>
          <p>
            On this portfolio you'll find some of my current ones but also some
            I did in the past.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
