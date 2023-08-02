import React from "react"

import avatar from "../assets/images/avatar.png"

import css3 from "../assets/svgs/css3.svg"
import html5 from "../assets/svgs/html5.svg"
import react from "../assets/svgs/react.svg"
import tailwind from "../assets/svgs/tailwind.svg"
import typescript from "../assets/svgs/typescript.svg"

const Home = () => {
  return (
    <div
      id="home"
      className="w-full bg-bat mt-mobile-header min-h-mobile-page md:mt-web-header md:min-h-web-page md:h-web-page"
    >
      <div className="h-full flex flex-col items-center justify-center py-8 gap-16">
        <div className="flex flex-col items-center gap-10 md:flex-row">
          <img
            src={avatar}
            alt="avatar picture"
            className="w-72 h-72 justify-self-center rounded-full object-cover md:justify-self-start md:flex-1 md:w-[25vw] md:h-[25vw] md:order-2"
          />
          <div className="flex flex-col gap-5 mx-auto justify-center md:order-1">
            <h2 className="text-6xl text-center font-bold md:text-end md:text-[5vw]">
              Frontend Developer
            </h2>

            <p className="text-center text-zinc-400 md:text-end md:text-[1.25vw]">
              Hi, I am João Marcos. A front-end developer based in the Brazil.
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
