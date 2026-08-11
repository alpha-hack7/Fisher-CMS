import FooterVideo from "../assets/vid.mp4";
import "../css/footer.css";

const Footer = () => {
  return (
    <footer>
      <section className="contact" id="contact">
        <h2>Contact Me</h2>
        <p>Tel: +1 (555) 123-4567</p>
        <p>Email: andambifisher1@gmail.com</p>
        <div className="social-media">
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
      <section className="footer-content">
        <video src={FooterVideo} muted autoPlay loop></video>
      </section>
      <div className="footer-last-message">
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
