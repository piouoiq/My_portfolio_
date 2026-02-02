import Footer from "../Components/Footer";
import Header from "../Components/Header";

export default function NotFound() {
  return (
    <>
      <Header />
      <main
        className="bg-cover"
        style={{ backgroundImage: "url('/Pictures/background.svg')" }}
      >
        <div className="text-center pt-6 text-4xl font-gruppo font-bold text-black mb-10">
          <img
            className="mx-auto w-96 rounded-full border-8 border-[#ee8f15]"
            src="/Pictures/shocked_cat_GIF.gif"
            alt="gif of a shocked cat with its mouth open"
          />
          <div className="p-4 ">
            <h1>Error 404 : Page Not Found</h1>
            <span>Oops, seems like you got lost!</span>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
