import React from "react";

import { useTranslation } from "react-i18next";

import spotifyPreview from "../assets/images/spotify-new.png";
import pokedexPreview from "../assets/images/pokedex.png";
import pinterestPreview from "../assets/images/pinterest.png";
import colorWizardryPreview from "../assets/images/ColorWizardry.png";

import tailwindLogo from "../assets/svgs/tailwind.svg";
import reactLogo from "../assets/svgs/react.svg";
import styledComponentsLogo from "../assets/svgs/styledComponents.svg";
import html5Logo from "../assets/svgs/html5.svg";
import nextjsLogo from "../assets/svgs/nextjs.svg";

const projects = [
  {
    name: "pinterest",
    image: pinterestPreview,
    links: {
      github: "https://github.com/joaomcsferreira/pinterest-clone",
      demo: "https://pinterest-clone-joaoferreira.vercel.app/",
    },
    technologies: [
      { name: "ReactJs", image: reactLogo },
      { name: "Styled Components", image: styledComponentsLogo },
    ],
  },
  {
    name: "pokedex",
    image: pokedexPreview,
    links: {
      github: "https://github.com/joaomcsferreira/pokedex",
      demo: "https://pokedex-joaoferreira.vercel.app/",
    },
    technologies: [
      { name: "ReactJs", image: reactLogo },
      { name: "Styled Components", image: styledComponentsLogo },
    ],
  },
  {
    name: "spotify",
    image: spotifyPreview,
    links: {
      github: "https://github.com/joaomcsferreira/spotify-web-player.git",
      demo: "https://spotify-joaoferreira.vercel.app/",
    },
    technologies: [
      { name: "TailwindCSS", image: tailwindLogo },
      { name: "HTML5", image: html5Logo },
    ],
  },
  {
    name: "colorWizardry",
    image: colorWizardryPreview,
    links: {
      github: "https://github.com/joaomcsferreira/color-wizardry",
      demo: "https://color-wizardry.vercel.app/",
    },
    technologies: [
      { name: "NextJS", image: nextjsLogo },
      { name: "TailwindCSS", image: tailwindLogo },
    ],
  },
];

const Projects = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-bat">
      <div id="projects" className="p-5 m-auto md:pl-10 md:w-10/12">
        <h3 className="w-full text-center pb-5 md:text-start mx-auto text-lg text-slateBlue font-bold">
          {t("header.projects")}
        </h3>

        <div className="grid gap-10">
          <>
            {projects.map((project) => (
              <div
                key={project.name}
                className="grid gap-3 relative rounded-lg pb-6 md:grid-cols-projects"
              >
                <h1 className="text-4xl font-bold text-gainsboro md:col-span-2 2xl:text-[1.5vw]">
                  {t(`projects.${project.name}.title`)}
                </h1>
                <a
                  href={project.links.demo}
                  target="_blank"
                  className="hover:drop-shadow-white"
                >
                  <img
                    src={project.image}
                    alt={`${project.name} preview`}
                    className="rounded-lg border-8 border-white self-center shadow-lg shadow-black/30"
                  />
                </a>
                <div className="flex flex-col gap-10 text-center justify-self-end w-full p-5 2xl:text-[1.25vw]">
                  <p>{t(`projects.${project.name}.description`)}</p>
                  <div className="flex gap-5 justify-center">
                    <a href={project.links.github} target="_blank">
                      <svg
                        className="fill-gainsboro h-14 cursor-pointer md:h-10 hover:fill-white"
                        viewBox="0 0 30 30"
                      >
                        <path d="M15 0C6.7125 0 0 6.7125 0 15C0 21.6375 4.29375 27.2438 10.2562 29.2313C11.0062 29.3625 11.2875 28.9125 11.2875 28.5188C11.2875 28.1625 11.2688 26.9813 11.2688 25.725C7.5 26.4188 6.525 24.8062 6.225 23.9625C6.05625 23.5312 5.325 22.2 4.6875 21.8437C4.1625 21.5625 3.4125 20.8687 4.66875 20.85C5.85 20.8312 6.69375 21.9375 6.975 22.3875C8.325 24.6562 10.4813 24.0188 11.3438 23.625C11.475 22.65 11.8687 21.9937 12.3 21.6187C8.9625 21.2437 5.475 19.95 5.475 14.2125C5.475 12.5812 6.05625 11.2312 7.0125 10.1812C6.8625 9.80625 6.3375 8.26875 7.1625 6.20625C7.1625 6.20625 8.41875 5.8125 11.2875 7.74375C12.4875 7.40625 13.7625 7.2375 15.0375 7.2375C16.3125 7.2375 17.5875 7.40625 18.7875 7.74375C21.6563 5.79375 22.9125 6.20625 22.9125 6.20625C23.7375 8.26875 23.2125 9.80625 23.0625 10.1812C24.0188 11.2312 24.6 12.5625 24.6 14.2125C24.6 19.9687 21.0938 21.2437 17.7563 21.6187C18.3 22.0875 18.7688 22.9875 18.7688 24.3938C18.7688 26.4 18.75 28.0125 18.75 28.5188C18.75 28.9125 19.0313 29.3813 19.7813 29.2313C25.7063 27.2438 30 21.6187 30 15C30 6.7125 23.2875 0 15 0Z" />
                      </svg>
                    </a>

                    <a href={project.links.demo} target="_blank">
                      <svg
                        className="fill-gainsboro h-14 cursor-pointer md:h-10 hover:fill-white"
                        viewBox="0 0 30 14"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1 0C0.447715 0 0 0.447716 0 1V13C0 13.5523 0.447716 14 1 14H29C29.5523 14 30 13.5523 30 13V1C30 0.447715 29.5523 0 29 0H1ZM5.192 2.588H2.936V11H5.432C7.128 11 7.976 10.2 7.976 8.6V5.312C7.976 4.488 7.736 3.828 7.256 3.332C6.784 2.836 6.096 2.588 5.192 2.588ZM6.32 4.232C6.544 4.432 6.656 4.752 6.656 5.192V8.72C6.656 9.168 6.528 9.46 6.272 9.596C6.016 9.724 5.672 9.788 5.24 9.788H4.256V3.92H5.312C5.768 3.92 6.104 4.024 6.32 4.232ZM13.2838 2.6H9.27584V11H13.2598V9.8H10.5958V7.304H11.8678L12.2398 6.044H10.5958V3.92H13.2838V2.6ZM18.562 11L19.966 6.56V11H21.286V2.6H19.966L18.058 8.156L16.174 2.6H14.854V11H16.174V6.572L17.554 11H18.562ZM27.302 10.568C27.798 10.184 28.046 9.588 28.046 8.78V4.928C28.046 4.144 27.826 3.528 27.386 3.08C26.954 2.632 26.342 2.408 25.55 2.408C24.758 2.408 24.134 2.62 23.678 3.044C23.23 3.468 23.006 4.092 23.006 4.916V8.78C23.006 9.332 23.126 9.784 23.366 10.136C23.614 10.488 23.93 10.744 24.314 10.904C24.698 11.056 25.106 11.132 25.538 11.132C26.226 11.132 26.814 10.944 27.302 10.568ZM26.642 4.532C26.698 4.748 26.726 5.024 26.726 5.36V8.528C26.726 8.904 26.618 9.208 26.402 9.44C26.194 9.672 25.902 9.788 25.526 9.788C25.118 9.788 24.814 9.68 24.614 9.464C24.422 9.24 24.326 8.936 24.326 8.552V5.348C24.326 5.004 24.354 4.728 24.41 4.52C24.466 4.304 24.582 4.136 24.758 4.016C24.934 3.896 25.19 3.836 25.526 3.836C25.862 3.836 26.118 3.9 26.294 4.028C26.47 4.148 26.586 4.316 26.642 4.532Z"
                        />
                      </svg>
                    </a>
                  </div>

                  <div className="flex flex-col items-center gap-5 justify-center">
                    {project.technologies.map((technology) => (
                      <div
                        key={technology.name}
                        className="flex gap-5 items-center p-3 rounded-md bg-dimGray border-[1px] border-black/30"
                      >
                        <img
                          src={technology.image}
                          alt={`${technology.name} logo`}
                          className="2xl:w-[3vw]"
                        />
                        <p className="text-xl font-bold 2xl:text-[1vw]">
                          {technology.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="w-[75vw] absolute bottom-0 justify-self-center h-[0.250rem] bg-gainsboro/30 rounded-full"></div>
              </div>
            ))}
          </>
        </div>
      </div>
    </div>
  );
};

export default Projects;
