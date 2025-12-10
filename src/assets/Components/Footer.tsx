export default function Footer() {
  return (
    <footer className="bg-[#ee8f15] p-4 text-center  position-sticky bottom-0">
      <h4>Contact me:</h4>
      <a
        href="https://www.linkedin.com/in/melissa-largilliere/"
        target="_blank"
      >
        <img
          className="w-5 inline mr-2"
          src="src/assets/Pictures/linkedin.svg"
          alt="LinkedIn logo"
        />
      </a>
      <a href="https://github.com/piouoiq" target="_blank">
        <img
          className="w-5 inline "
          src="src/assets/Pictures/github.svg"
          alt="github logo"
        />
      </a>
      <p>Email: melargilliere@gmail.com</p>

      <p>
        <img
          src="src/assets/Pictures/copyright-svgrepo-com.svg"
          alt="Copyright Symbol"
          className="inline w-2.5 h-4 mr-1"
        />{" "}
        2025 Melissa Largilliere. All rights reserved.
      </p>
    </footer>
  );
}
