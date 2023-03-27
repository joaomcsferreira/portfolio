import React from "react"

const Header = () => {
  const [active, setActive] = React.useState<boolean>(false)

  return (
    <div className="h-mobile-header w-full top-0 bg-dimGray fixed flex px-4 py-1.5 justify-between font-dm md:h-web-header md:px-16 ">
      <svg className="fill-gainsboro w-auto md:w-32" viewBox="0 0 85 97">
        <path d="M26.0819 68.0675C29.7142 68.0675 32.9179 66.8846 35.6935 64.519C36.4012 63.9043 37.095 63.1172 37.7749 62.158C38.4548 61.1988 39.0275 60.0392 39.4934 58.6794C39.9592 57.3195 40.1918 55.7268 40.1918 53.9015V31.9407C40.1918 30.8603 39.8054 29.9336 39.0325 29.1606C38.2593 28.3876 37.3325 28.0011 36.2523 28.0011C35.1535 28.0011 34.2221 28.3876 33.4582 29.1606C32.6945 29.9336 32.3127 30.8603 32.3127 31.9407V53.9015C32.3127 55.4475 31.9915 56.6816 31.3486 57.6037C30.7061 58.5255 29.9097 59.1869 28.9598 59.5873C28.0098 59.9879 27.0505 60.1881 26.0819 60.1881C25.132 60.1881 24.182 59.9879 23.232 59.5873C22.282 59.1869 21.4857 58.5255 20.8431 57.6037C20.2004 56.6816 19.8791 55.4475 19.8792 53.9015C19.8792 52.8212 19.4973 51.8945 18.7336 51.1215C17.9699 50.3484 17.0386 49.9619 15.9396 49.9619C14.8592 49.9619 13.9325 50.3484 13.1595 51.1215C12.3865 51.8945 12 52.8212 12 53.9015C12 55.7268 12.2328 57.3195 12.6985 58.6794C13.1642 60.0392 13.737 61.1985 14.4169 62.158C15.0968 63.1172 15.7906 63.9043 16.4984 64.519C19.2739 66.8846 22.4683 68.0675 26.0819 68.0675ZM68.088 68.0675H47.7196C46.6208 68.0675 45.6895 67.6856 44.9258 66.9217C44.1619 66.1581 43.7801 65.2267 43.7801 64.1276C43.7801 63.0288 44.1619 62.0975 44.9258 61.3338C45.6895 60.5699 46.6208 60.1881 47.7196 60.1881H60.3764L53.2516 50.3527C52.7673 49.5888 52.5251 48.8159 52.5251 48.0335C52.5251 47.2698 52.7673 46.4969 53.2516 45.7145L64.8753 29.6485C65.7134 28.5495 66.7844 28 68.0883 28C68.8893 28 69.6529 28.2608 70.3795 28.7823C71.4597 29.6019 72 30.6636 72 31.9675C72 32.7685 71.7485 33.5323 71.2456 34.2585L61.3271 48.0615L71.2456 61.8359C71.7485 62.5622 72 63.3165 72 64.099C72 64.6952 71.8604 65.3096 71.5808 65.9432C70.7054 67.3586 69.5408 68.0675 68.088 68.0675ZM47.7194 35.8799C46.6203 35.8799 45.6889 35.4981 44.9253 34.7345C44.1616 33.9708 43.7795 33.0394 43.7795 31.9404C43.7795 30.86 44.1614 29.9333 44.9253 29.1603C45.6889 28.3873 46.6203 28.0008 47.7194 28.0008C48.7996 28.0008 49.7264 28.3873 50.4993 29.1603C51.2725 29.9334 51.6589 30.86 51.6589 31.9404C51.6589 33.0394 51.2725 33.9708 50.4993 34.7345C49.7264 35.4981 48.7996 35.8799 47.7194 35.8799Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48.5842 1.65679C44.8289 -0.552256 40.1711 -0.552271 36.4158 1.65679L5.91577 19.598C2.25049 21.754 0 25.6888 0 29.9412V66.2145C0 70.4668 2.25049 74.4016 5.91574 76.5577L36.4158 94.4989C40.1711 96.7079 44.8289 96.7079 48.5842 94.4989L79.0843 76.5577C82.7495 74.4016 85 70.4668 85 66.2145V29.9412C85 25.6888 82.7495 21.754 79.0843 19.598L48.5842 1.65679ZM48.8855 7.65679C45.1301 5.44774 40.4724 5.44773 36.717 7.65679L11.217 22.6568C7.55176 24.8128 5.30127 28.7476 5.30127 33V63.3909C5.30127 67.6433 7.55176 71.5781 11.217 73.7341L36.717 88.7342C40.4724 90.9432 45.1301 90.9432 48.8855 88.7342L74.3855 73.7342C78.0508 71.5781 80.3013 67.6433 80.3013 63.3909V33C80.3013 28.7476 78.0508 24.8128 74.3855 22.6568L48.8855 7.65679Z"
        />
      </svg>

      <svg
        className="w-10 fill-gainsboro md:hidden"
        viewBox="0 0 28 28"
        onClick={() => setActive((active) => !active)}
      >
        <path d="M4 7C4 6.44771 4.44772 6 5 6H24C24.5523 6 25 6.44771 25 7C25 7.55229 24.5523 8 24 8H5C4.44772 8 4 7.55229 4 7Z" />
        <path d="M4 13.9998C4 13.4475 4.44772 12.9997 5 12.9997L16 13C16.5523 13 17 13.4477 17 14C17 14.5523 16.5523 15 16 15L5 14.9998C4.44772 14.9998 4 14.552 4 13.9998Z" />
        <path d="M5 19.9998C4.44772 19.9998 4 20.4475 4 20.9998C4 21.552 4.44772 21.9997 5 21.9997H22C22.5523 21.9997 23 21.552 23 20.9998C23 20.4475 22.5523 19.9998 22 19.9998H5Z" />
      </svg>

      <div
        className={`${
          active ? "flex" : "hidden"
        } h-full py-36 w-screen fixed top-0 left-0 flex-col items-center justify-around bg-dimGray 
          md:flex md:gap-8 md:py-0 md:flex-row md:justify-center md:items-center md:static md:w-auto`}
      >
        <a
          className="font-medium text-4xl hover:text-tomato md:text-base"
          href="#home"
          onClick={() => setActive((active) => !active)}
        >
          Home
        </a>
        <a
          className="font-medium text-4xl hover:text-tomato md:text-base"
          href="#about"
          onClick={() => setActive((active) => !active)}
        >
          About me
        </a>
        <a
          className="font-medium text-4xl hover:text-tomato md:text-base"
          href="#projects"
          onClick={() => setActive((active) => !active)}
        >
          Projects
        </a>
        <a
          className="font-medium text-4xl hover:text-tomato md:text-base"
          href="#contact"
          onClick={() => setActive((active) => !active)}
        >
          Contact
        </a>

        <svg
          className="fill-gainsboro w-6 absolute top-12 right-6 md:hidden"
          onClick={() => setActive((active) => !active)}
          viewBox="0 0 348.333 348.334"
        >
          <g>
            <path d="M336.559,68.611L231.016,174.165l105.543,105.549c15.699,15.705,15.699,41.145,0,56.85c-7.844,7.844-18.128,11.769-28.407,11.769c-10.296,0-20.581-3.919-28.419-11.769L174.167,231.003L68.609,336.563c-7.843,7.844-18.128,11.769-28.416,11.769c-10.285,0-20.563-3.919-28.413-11.769c-15.699-15.698-15.699-41.139,0-56.85l105.54-105.549L11.774,68.611c-15.699-15.699-15.699-41.145,0-56.844c15.696-15.687,41.127-15.687,56.829,0l105.563,105.554L279.721,11.767c15.705-15.687,41.139-15.687,56.832,0C352.258,27.466,352.258,52.912,336.559,68.611z" />
          </g>
        </svg>
      </div>
    </div>
  )
}

export default Header
