import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import NavImage from "./../../assets/gem.png";
import "./../css/navigation.css";

const Navigation_bar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);
  const [open, setOpen] = useState(false);
  const links = [
    {
      id: 1,
      name: "Home",
      link: "/#home",
    },
    {
      id: 2,
      name: "About",
      link: "/#about",
    },
    {
      id: 3,
      name: "Videos",
      link: "/car-videos",
    },
    {
      id: 4,
      name: "Contact Me",
      link: "/#contact",
    },
    {
      id: 5,
      name: "Login",
      link: "/login",
    },
  ];
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 700);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      {isMobile ? (
        <div
          className="is-mobile"
          data-open={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX size={25} /> : <FiMenu size={25} />}
          <nav
            className="navigation"
            style={{
              backgroundImage: NavImage,
              backgroundRepeat: "no-repeat",
              objectFit: "cover",
            }}
          >
            {links.map((link) => (
              <a key={link.id} href={link.link} className="nav-link">
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      ) : (
        <nav className="navigation">
          {links.map((link) => (
            <a key={link.id} href={link.link} className="nav-link">
              {link.name}
            </a>
          ))}
        </nav>
      )}
    </>
  );
};

export default Navigation_bar;
