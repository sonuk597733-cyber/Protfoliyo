import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

export let smoother: ScrollSmoother;

const Navbar = () => {
  useEffect(() => {
    // Agar pehle se smoother bana hua hai to remove karo
    if (smoother) {
      smoother.kill();
    }

    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    smoother.paused(true);

    const links = document.querySelectorAll(".header ul a");

    const handleLinkClick = (e: Event) => {
      if (window.innerWidth > 1024) {
        e.preventDefault();

        const element = e.currentTarget as HTMLAnchorElement;
        const section = element.getAttribute("data-href");

        if (section && smoother) {
          smoother.scrollTo(section, true, "top top");
        }
      }
    };

    links.forEach((link) => {
      link.addEventListener("click", handleLinkClick);
    });

    const handleResize = () => {
      ScrollSmoother.refresh(true);
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    // ScrollTrigger ko ScrollSmoother ke baad refresh karo
    ScrollTrigger.refresh();

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleLinkClick);
      });

      window.removeEventListener("resize", handleResize);

      if (smoother) {
        smoother.kill();
      }
    };
  }, []);

  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          SONU
        </a>

        <a
          href="mailto:example@mail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          sonuk597733@mail.com
        </a>

        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>

          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="PROJECT" />
            </a>
          </li>

          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;