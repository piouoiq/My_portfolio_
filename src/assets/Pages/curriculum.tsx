import Header from "../Components/Header";

import Footer from "../Components/Footer";

export default function Curriculum() {
  return (
    <>
      <Header />
      <main
        className=" font-gruppo font-bold bg-cover text-black"
        style={{ backgroundImage: "url('/Pictures/background.svg')" }}
      >
        <div>
          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            <li>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start mb-10 md:text-end">
                <time className="font-mono italic">Sept. 2025 - June 2026</time>
                <div className="text-lg font-black">
                  Student web developper at Ada Tech School
                </div>
                <p>
                  Learning all the basics of being a developper, from
                  frameworks, librairies, languages <br /> to proper code
                  structuration and ways of working.
                </p>
              </div>
              <hr className="bg-[#ee8f15]" />
            </li>
            <li>
              <hr className="bg-[#ee8f15]" />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end md:mb-10">
                <time className="font-mono italic">2024 -2025</time>
                <div className="text-lg font-black underline">
                  Self-teaching via OpenClassroom
                </div>
                <p>
                  I self tought HTML5, CSS3 and Javascript using the free
                  courses available on OpenClassroom.
                </p>
              </div>
              <hr className="bg-[#ee8f15]" />
            </li>
            <li>
              <hr className="bg-[#ee8f15]" />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start mb-10 md:text-end">
                <time className="font-mono italic">2020 - 2022</time>
                <div className="text-lg font-black underline">
                  University studies on Korean Language
                </div>
                <p>
                  Courses on the language, art, culture and history of Korea.{" "}
                  <br /> I was able to learn all about the richness of this
                  country via our native teachers <br /> and students exchange
                  with a university in Seoul.
                </p>
              </div>
              <hr className="bg-[#ee8f15]" />
            </li>
            <li>
              <hr className="bg-[#ee8f15]" />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end md:mb-10">
                <time className="font-mono italic">2019 - 2020</time>
                <div className="text-lg font-black underline">
                  Korean languages studies in an organisation.{" "}
                </div>
                <p>
                  Learned the basics of Korean language via a local
                  organisation.
                </p>
              </div>
              <hr className="bg-[#ee8f15]" />
            </li>
            <li>
              <hr className="bg-[#ee8f15]" />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start mb-10 md:text-end">
                <time className="font-mono italic">2013 - 2015 </time>;
                <div className="text-lg font-black underline">
                  University studies in languages (English and Italian) .
                </div>
                <p>
                  Language, Litterature and foreign civilisations course with
                  English and Italian as first languages studied.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
