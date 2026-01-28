export default function Footer() {
  return (
    <footer className=" text-black text-xl font-gruppo font-bold bg-[#ee8f15] p-4 text-center static bottom-0">
      <h4 className="underline">Contact me:</h4>
      <div>
        <a
          href="https://www.linkedin.com/in/melissa-largilliere/"
          target="_blank"
        >
          <img
            className="w-5 inline mr-2"
            src="/Pictures/linkedin.svg"
            alt="LinkedIn logo"
          />
        </a>
        <a href="https://github.com/piouoiq" target="_blank">
          <img
            className="w-5 inline "
            src="/Pictures/github.svg"
            alt="github logo"
          />
        </a>
      </div>
      <div>
        <button
          className="cursor-pointer"
          onClick={() =>
            (window.location.href = "mailto:melargilliere@gmail.com")
          }
        >
          Email: melargilliere@gmail.com
        </button>

        <p>
          <img
            src="/Pictures/copyright-svgrepo-com.svg"
            alt="Copyright Symbol"
            className="inline w-3.5 h-4 mr-1"
          />
          2025 Melissa Largilliere. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
