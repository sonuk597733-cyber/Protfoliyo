import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    name: "ZeroHunger",
    category: "Full Stack Web Application",
    tools: "JavaScript, API, Google Maps, Database",
    image: "/projects/ZeoHunger.jpg",
    link: "https://your-zerohunger-link.com",
  },
  {
    name: "Online Compiler",
    category: "Web Application",
    tools: "HTML, CSS, JavaScript",
    image: "/projects/compiler.png",
    link: "https://sonuk597733-cyber.github.io/htmlcompiler/",
  },
  {
    name: "To-Do List",
    category: "Web Application",
    tools: "HTML, CSS, JavaScript",
    image: "/projects/todo.png",
    link: "https://sonuk597733-cyber.github.io/sonukumar/",
  },
  {
    name: "Personal Portfolio",
    category: "Portfolio Website",
    tools: "React, TypeScript, Three.js, GSAP",
    image: "/projects/sonu.png",
    link: "https://your-portfolio-link.com",
  },
  {
    name: "FluentX",
    category: "Backend Project",
    tools: "Node.js, Express.js, MongoDB, REST API",
    image: "/projects/english.png",
    link: "https://your-backend-link.com",
  },
  {
    name: "UI Project",
    category: "Full Stack Project",
    tools: "HTML5, Bootstrap, CSS3, JavaScript",
    image: "/projects/ui.png",
    link: "https://your-mern-link.com",
  },
];

const Work = () => {
  useGSAP(() => {
    const workFlex = document.querySelector(
      ".work-flex"
    ) as HTMLElement;

    if (!workFlex) return;

    const firstBox = workFlex.querySelector(
      ".work-box"
    ) as HTMLElement;

    if (!firstBox) return;

    const boxWidth = firstBox.getBoundingClientRect().width;

    const totalWidth = boxWidth * projects.length;

    if (totalWidth <= 0) return;

    const animation = gsap.to(workFlex, {
      x: -totalWidth,
      duration: 25,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: (value) => {
          const currentX = parseFloat(value);

          return `${currentX % totalWidth}px`;
        },
      },
    });

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="work-flex">
          {[...projects, ...projects].map((project, index) => (
            <div
              className="work-box"
              key={`${project.name}-${index}`}
            >
              <div className="work-info">
                <div className="work-title">
                  <h3>
                    {String(
                      (index % projects.length) + 1
                    ).padStart(2, "0")}
                  </h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>

                <h4>Tools and features</h4>

                <p>{project.tools}</p>
              </div>

              <WorkImage
                image={project.image}
                alt={project.name}
                link={project.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;