import { useEffect, useRef, useState } from "react";
import NavLinks from "./NavBarLinks";
import "./navbar.css";
import { FaBars, FaCode, FaGithub, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  {
    id: 1,
    url: "https://www.twitter.com",
    icon: <FaGithub />,
  },
  /*   {
    id: 2,
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
  }, */
  {
    id: 3,
    url: "https://www.twitter.com",
    icon: <FaLinkedin />,
  },
];

export const NavBar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const linksContainerRef = useRef(null);

  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <FaCode />
          <a href="/">Portafolio</a>
          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>

        <div ref={linksContainerRef} className="links-container">
          <ul ref={linksRef} className="links">
            <NavLinks />
          </ul>
        </div>

        {/*  <ul className="social-icons">
          {socialLinks.map((item) => (
            <li key={item.id}>
              <a href={item.url}>{item.icon}</a>
            </li>
          ))}
        </ul> */}
      </div>
    </nav>
  );
};
