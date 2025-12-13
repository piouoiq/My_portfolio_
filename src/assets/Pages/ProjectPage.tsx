import Header from "../Components/Header";

import Footer from "../Components/Footer";

export default function projectPage() {
  return (
    <>
      <Header />
      <main
        className=" font-gruppo font-bold bg-cover text-black"
        style={{ backgroundImage: "url('src/assets/Pictures/background.svg')" }}
      >
        <div className="grid grid-cols-2 px-4">
          <h1 className="text-4xl  underline">Projects:</h1>
        </div>
        <div className="px-4 text-2xl md:text-4xl">
          <p>Projects will be added soon. Stay tuned!</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
