import React from "react"

import avatar from "../assets/images/avatar.png"

import css3 from "../assets/svgs/css3.svg"
import html5 from "../assets/svgs/html5.svg"
import react from "../assets/svgs/react.svg"
import tailwind from "../assets/svgs/tailwind.svg"
import typescript from "../assets/svgs/typescript.svg"

import brazilFlag from "../assets/svgs/brazilFlag.svg"
import UKFlag from "../assets/svgs/UKFlag.svg"

import { useTranslation } from "react-i18next"

const Home = () => {
  const [languageModal, setLanguageModal] = React.useState(false)

  const { t, i18n } = useTranslation()

  const changeLanguage = async (lng: string) => {
    await i18n.changeLanguage(lng)

    setLanguageModal(false)
  }

  return (
    <div
      id="home"
      className="w-full bg-bat mt-mobile-header min-h-mobile-page md:mt-web-header md:min-h-web-page md:h-web-page"
    >
      <div className="absolute p-5 gap-2 group">
        <div
          className=" bg-zinc-700 rounded-full p-2 border-dimGray border-4 group-hover:border-white"
          onClick={() => setLanguageModal((languageModal) => !languageModal)}
        >
          <svg
            className="w-14 h-14 stroke-white cursor-pointer"
            stroke-linejoin="bevel"
          >
            <path
              fill="none"
              stroke-width="3"
              d="M18,4V14M4,14h29M25,14q0,15-18,22m6-14q11,14 18,14m0,19 9-25 9 25m-3-7H33"
            />
            <path d="m15,41-3,3h6zv10m7-3 3,3-3,3zM14.5,51h9" />
          </svg>
        </div>
        {languageModal && (
          <div className="flex flex-col mt-3 gap-2">
            <div
              onClick={() => changeLanguage("pt")}
              className="flex w-16 h-16 rounded-full select-none overflow-hidden border-dimGray border-4 cursor-pointer"
            >
              <img src={brazilFlag} alt="" className="object-cover" />
            </div>
            <div
              onClick={() => changeLanguage("en")}
              className="flex w-16 h-16 rounded-full select-none overflow-hidden border-dimGray border-4 cursor-pointer"
            >
              <img src={UKFlag} alt="" className="object-cover" />
            </div>
          </div>
        )}
      </div>

      <div className="h-full flex flex-col items-center justify-center py-8 gap-16">
        <div className="flex flex-col items-center gap-10 md:flex-row px-3">
          <img
            src={avatar}
            alt="avatar picture"
            className="w-72 h-72 justify-self-center rounded-full object-cover md:justify-self-start md:flex-1 md:w-[25vw] md:h-[25vw] md:order-2"
          />
          <div className="flex flex-col gap-5 mx-auto justify-center md:order-1">
            <h2 className="text-4xl text-center font-bold sm:text-5xl md:text-end md:text-[5vw]">
              {t("home.title")}
            </h2>

            <p className="text-center text-zinc-400 md:text-end md:text-[1.25vw]">
              {t("home.welcome")}
            </p>
          </div>
        </div>

        <div className="flex flex-col text-center gap-5 md:flex-row justify-center md:col-span-2 md:items-center px-4">
          <h3 className="text-2xl font-bold md:text-xl">Stacks:</h3>

          <div className="flex flex-wrap justify-center gap-6">
            <div className="w-40 h-40 bg-dimGray rounded-full border-[1px] border-black/30 flex justify-center md:w-24 md:h-24 2xl:w-[6vw] 2xl:h-[6vw]">
              <img src={css3} alt="" className="p-8 md:p-4 2xl:p-[1vw]" />
            </div>
            <div className="w-40 h-40 bg-dimGray rounded-full border-[1px] border-black/30 flex justify-center md:w-24 md:h-24 2xl:w-[6vw] 2xl:h-[6vw]">
              <img src={html5} alt="" className="p-8 md:p-4 2xl:p-[1vw]" />
            </div>
            <div className="w-40 h-40 bg-dimGray rounded-full border-[1px] border-black/30 flex justify-center md:w-24 md:h-24 2xl:w-[6vw] 2xl:h-[6vw]">
              <img src={react} alt="" className="p-8 md:p-4 2xl:p-[1vw]" />
            </div>
            <div className="w-40 h-40 bg-dimGray rounded-full border-[1px] border-black/30 flex justify-center md:w-24 md:h-24 2xl:w-[6vw] 2xl:h-[6vw]">
              <img src={typescript} alt="" className="p-8 md:p-4 2xl:p-[1vw]" />
            </div>
            <div className="w-40 h-40 bg-dimGray rounded-full border-[1px] border-black/30 flex justify-center md:w-24 md:h-24 2xl:w-[6vw] 2xl:h-[6vw]">
              <img src={tailwind} alt="" className="p-8 md:p-4 2xl:p-[1vw]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
