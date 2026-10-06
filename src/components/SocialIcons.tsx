import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import { useEffect, useState } from "react";
import HoverLinks from "./HoverLinks";

const SocialIcons = () => {
  const [showIcons, setShowIcons] = useState(false);

  // Contact section visible hone par icons show honge
  useEffect(() => {
    const contact = document.getElementById("contact");

    if (!contact) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowIcons(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(contact);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Social icon cursor-follow animation
  useEffect(() => {
    const social = document.getElementById("social") as HTMLElement;

    if (!social) return;

    const cleanupFunctions: (() => void)[] = [];

    social.querySelectorAll("span").forEach((item) => {
      const elem = item as HTMLElement;
      const link = elem.querySelector("a") as HTMLElement;

      if (!link) return;

      const getRect = () => elem.getBoundingClientRect();

      let rect = getRect();

      let mouseX = rect.width / 2;
      let mouseY = rect.height / 2;

      let currentX = rect.width / 2;
      let currentY = rect.height / 2;

      let animationFrame: number;

      const updatePosition = () => {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        link.style.setProperty("--siLeft", `${currentX}px`);
        link.style.setProperty("--siTop", `${currentY}px`);

        animationFrame = requestAnimationFrame(updatePosition);
      };

      const onMouseMove = (e: MouseEvent) => {
        rect = getRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Poore 50x50 icon area me cursor follow karega
        if (
          x >= 0 &&
          x <= rect.width &&
          y >= 0 &&
          y <= rect.height
        ) {
          mouseX = x;
          mouseY = y;
        } else {
          // Cursor bahar jaate hi center me return
          mouseX = rect.width / 2;
          mouseY = rect.height / 2;
        }
      };

      document.addEventListener("mousemove", onMouseMove);

      updatePosition();

      cleanupFunctions.push(() => {
        document.removeEventListener("mousemove", onMouseMove);
        cancelAnimationFrame(animationFrame);
      });
    });

    return () => {
      cleanupFunctions.forEach((cleanup) => cleanup());
    };
  }, []);

  return (
    <div className="icons-section">
      <div
        className="social-icons"
        data-cursor="icons"
        id="social"
        style={{
          display: showIcons ? "flex" : "none",
        }}
      >
        <span>
          <a
            href="https://github.com/sonuk597733-cyber"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </span>

        <span>
          <a
            href="www.linkedin.com/in/sonukumar-codes"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </span>

        <span>
          <a
            href="https://wa.me/919942536861"
            target="_blank"
            rel="noreferrer"
          >
            <FaXTwitter />
          </a>
        </span>

        <span>
          <a
            href="https://www.instagram.com/sonu_kumar994253"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
        </span>
      </div>

      <a className="resume-button" href="#">
        <HoverLinks text="RESUME" />

        <span>
          <TbNotes />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;