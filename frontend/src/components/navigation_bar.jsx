import { useEffect, useState } from "react";
import { Menu, X } from "react-feather";
import NavImage from "./../assets/gem.png";

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
          className="is-mobile fixed top-0 right-0 text-right py-[0.6rem] px-[0.8rem] z-11 bg-[#333] rounded-[10px]"
          data-open={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={25} /> : <Menu size={25} />}
          <nav
            className="navigation absolute -top-50 -right-50 opacity-0 object-cover bg-no-repeat flex flex-col gap-4 transition-all duration-1000"
            style={{
              backgroundImage: `url(${NavImage})`,
            }}
          >
            {links.map((link) => (
              <a className="w-full bg-[#333]" key={link.id} href={link.link}>
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      ) : (
        <nav className="bg-transparent flex justify-end gap-16 pr-8 w-max z-10">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.link}
              className="border-2 border-[#999] py-[0.6rem] px-[0.9rem] rounded-[10px]"
            >
              {link.name}
            </a>
          ))}
        </nav>
      )}
    </>
  );
};

export default Navigation_bar;
