import FooterVideo from "../../assets/vid.mp4";

const Footer = () => {
  return (
    <footer>
      <section className="text-left" id="contact">
        <h2>Contact Me</h2>
        <p className="ml-6">Tel: +254 742 462 872</p>
        <p className="ml-6">Email: andambifisher1@gmail.com</p>
        <div className="mt-4 flex justify-center gap-4">
          <a
            href="https://www.instagram.com/andambi_fisher/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.instagram.com/andambi_fisher/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.instagram.com/andambi_fisher/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.instagram.com/andambi_fisher/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </section>
      <section className="bg-[#aaa] mt-8 h-75 w-full md:h-100">
        <video
          className="w-full h-full object-cover"
          src={FooterVideo}
          muted
          autoPlay
          loop
        ></video>
      </section>
      <div className="text-center">
        <p>
          Thank you for visiting my site! I'm passionate about cars and love
          sharing that passion with fellow enthusiasts.{" "}
        </p>
        <small>© 2025 Andambi Fisher. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
