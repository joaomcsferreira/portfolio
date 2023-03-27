import React from "react"

import about from "../assets/images/about.png"

const About = () => {
  return (
    <div id="about" className="p-10 m-auto md:pl-10 md:w-10/12">
      <h3 className="w-full text-center pb-5 md:text-start mx-auto text-lg text-slateBlue font-bold">
        About
      </h3>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <p className="text-justify indent-8 py-2">
            I am passionate about creating beautiful interfaces that make the
            user experience more enjoyable and intuitive. But before I start
            showing you my work, let me tell you a little bit about myself.
          </p>

          <p className="text-justify indent-8 py-2">
            When I am not working on development, I love immersing myself in
            captivating stories and ideas by reading books. I believe that
            reading is one of the best ways to broaden our minds and gain a
            deeper understanding of the world. I also have a passion for digital
            illustrations and spend countless hours refining my skills and
            crafting captivating compositions.
          </p>

          <p className="text-justify indent-8 py-2">
            Speaking of programming, coding is one of my great passions. I love
            the challenge of writing clean and efficient code that solves
            problems in an elegant and creative way.
          </p>

          <p className="text-justify indent-8 py-2">
            Finally, I hope that this little glimpse into myself can help you
            understand a little more about what motivates and inspires me.
          </p>
        </div>
        <div className="flex w-full ml-5">
          <img src={about} alt="" />
        </div>
      </div>
    </div>
  )
}

export default About
