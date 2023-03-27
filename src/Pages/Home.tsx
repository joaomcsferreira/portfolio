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
      className="min-h-fit w-full mt-[15vh] bg-bat py-10 grid md:h-web-page md:mt-[10vh]"
    >
      <div className="grid gap-x-10 gap-y-5 md:grid-cols-2 md:px-10">
        <img
          src={avatar}
          alt="avatar picture"
          className="w-72 h-72 justify-self-center rounded-full object-cover md:justify-self-start md:flex-1 md:w-96 md:h-96"
        />
        <div className="flex flex-col w-10/12 gap-5 mx-auto justify-center md:col-start-1 md:row-start-1">
          <h2 className="text-6xl text-center font-bold md:text-end">
            Frontend Developer
          </h2>

          <p className="text-center text-zinc-400 md:text-end">
            Hi, I am João Marcos. A front-end developer based in the Brazil.
          </p>
        </div>

        <div className="flex flex-col text-center gap-5 md:flex-row justify-center md:col-span-2 md:items-center px-4">
          <h3 className="text-2xl font-bold md:text-xl">Stacks:</h3>

          <div className="flex flex-wrap justify-center gap-6">
            <div className="w-40 h-40 bg-dimGray rounded-full border-[1px] border-black/30 flex justify-center md:w-20 md:h-20">
              <img src={css3} alt="" className="w-20 md:w-10" />
            </div>
            <div className="w-40 h-40 bg-dimGray rounded-full border-[1px] border-black/30 flex justify-center md:w-20 md:h-20">
              <img src={html5} alt="" className="w-20 md:w-10" />
            </div>
            <div className="w-40 h-40 bg-dimGray rounded-full border-[1px] border-black/30 flex justify-center md:w-20 md:h-20">
              <img src={react} alt="" className="w-20 md:w-10" />
            </div>
            <div className="w-40 h-40 bg-dimGray rounded-full border-[1px] border-black/30 flex justify-center md:w-20 md:h-20">
              <img src={typescript} alt="" className="w-20 md:w-10" />
            </div>
            <div className="w-40 h-40 bg-dimGray rounded-full border-[1px] border-black/30 flex justify-center md:w-20 md:h-20">
              <img src={tailwind} alt="" className="w-20 md:w-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
