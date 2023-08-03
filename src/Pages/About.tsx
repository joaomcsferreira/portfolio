import React from "react"

import { useTranslation } from "react-i18next"

import about from "../assets/images/about.png"

const About = () => {
  const { t } = useTranslation()

  return (
    <div id="about" className="p-10 m-auto md:pl-10 md:w-10/12">
      <h3 className="w-full text-center pb-5 md:text-start mx-auto text-lg text-slateBlue font-bold">
        {t("header.about")}
      </h3>

      <div className="grid md:grid-cols-2 gap-10 md:text-[2vh] 2xl:gap-24">
        <div>
          <p className="text-justify indent-8 py-2">
            {t("about.firstParagraph")}
          </p>

          <p className="text-justify indent-8 py-2">
            {t("about.secondParagraph")}
          </p>

          <p className="text-justify indent-8 py-2">
            {t("about.thirdParagraph")}
          </p>

          <p className="text-justify indent-8 py-2">
            {t("about.fourthParagraph")}
          </p>
        </div>
        <div className="flex w-full">
          <img src={about} alt="" className="h-auto object-contain" />
        </div>
      </div>
    </div>
  )
}

export default About
