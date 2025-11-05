import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
export default function MainContent() {
  const logos = [
    {
      name: "billboard",
      src: "https://cdn-o.suno.com/splash-page/logo-cloud/Billboard_logo.svg",
    },
    {
      name: "Forbes",
      src: "https://cdn-o.suno.com/splash-page/logo-cloud/Forbes_logo.svg",
    },
    {
      name: "Wired",
      src: "https://cdn-o.suno.com/splash-page/logo-cloud/Wired_logo.svg",
    },
    {
      name: "Complex",
      src: "https://cdn-o.suno.com/splash-page/logo-cloud/COMPLEX_Magazine_logo.svg",
    },
    {
      name: "Rolling",
      src: "https://cdn-o.suno.com/splash-page/logo-cloud/Rolling_Stone_logo.svg",
    },
    {
      name: "Variety",
      src: "https://cdn-o.suno.com/splash-page/logo-cloud/Variety_logo.svg",
    },
  ];

  return (
    <div className="relative flex flex-col items-center text-center md:mx-auto mx-1 justify-center h-screen">
      <div
        className="absolute right-0 cursor-pointer tilt scroll- shadow-2xl top-2/4 hidden w-40 md:w-48 lg:block lg:w-52"
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
          opacity: 1,
          transform:
            "translateX(-3.34331px) translateY(4.94339px) translateZ(50px) translateY(-50%) scale(1.15) rotateZ(6.09938deg)",
          filter:
            "blur(1.1px) brightness(0.5) drop-shadow(rgba(0, 0, 0, 0.5) 0px 25px 50px)",
          transition: "filter 0.5s ease-out",
        }}
      >
        <div className="relative h-full w-full origin-top overflow-hidden rounded-3 transition-transform duration-300 hover:scale-[102%] md:h-[311px]">
          <img
            alt="Everything’s Fine"
            data-src="https://cdn2.suno.ai/video_upload_926b4db7-fd04-4099-928b-f23e99350787_video_upload_926b4db7-fd04-4099-928b-f23e99350787_cover_snapshot_0s_1760711725_image_large.jpeg"
            className="h-full w-full object-cover"
            src="https://cdn2.suno.ai/video_upload_926b4db7-fd04-4099-928b-f23e99350787_video_upload_926b4db7-fd04-4099-928b-f23e99350787_cover_snapshot_0s_1760711725_image.jpeg?width=360"
          ></img>

          <div className="absolute right-3 bottom-3 left-3.5 z-10">
            <div className="mb-1 text-[14px] leading-4 font-medium text-white text-shadow-lg">
              Everything’s Fine
            </div>
            <div className="flex items-center gap-1.5">
              <img
                alt="Staabsworth"
                data-src="https://cdn1.suno.ai/3fdd506c.webp"
                className="h-5 w-5 rounded-full"
                loading="lazy"
                src="https://cdn1.suno.ai/3fdd506c.webp"
              />
              <div className="text-[11px] leading-3.5 font-medium text-white/80 text-shadow-lg">
                Staabsworth
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute left-0 cursor-pointer shadow-2xl top-2/4 hidden w-40 md:w-48 lg:block lg:w-52"
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
          opacity: 1,
          transform:
            "translateX(-3.34331px) translateY(4.94339px) translateZ(50px) translateY(-50%) scale(1.15) rotateZ(-6.09938deg)",
          filter:
            "blur(1.1px) brightness(0.5) drop-shadow(rgba(0, 0, 0, 0.5) 0px 25px 50px)",
          transition: "filter 0.5s ease-out",
        }}
      >
        <div className="relative h-full tilt-animation w-full origin-top overflow-hidden rounded-3 transition-transform duration-300 hover:scale-[102%] md:h-[311px]">
          <img
            alt="Everything’s Fine"
            data-src="https://cdn2.suno.ai/5da32f76-9a9b-4267-a8c3-af6d41ec98a6.jpeg?width=360"
            className="h-full w-full object-cover"
            loading="lazy"
            src="https://cdn2.suno.ai/5da32f76-9a9b-4267-a8c3-af6d41ec98a6.jpeg?width=360"
          ></img>

          <div className="absolute right-3 bottom-3 left-3.5 z-10">
            <div className="mb-1 text-[14px] leading-4 font-medium text-white text-shadow-lg">
              Everything’s Fine
            </div>
            <div className="flex items-center gap-1.5">
              <img
                alt="Staabsworth"
                data-src="https://cdn2.suno.ai/5da32f76-9a9b-4267-a8c3-af6d41ec98a6.jpeg?width=360"
                className="h-5 w-5 rounded-full"
                loading="lazy"
                src="https://cdn2.suno.ai/5da32f76-9a9b-4267-a8c3-af6d41ec98a6.jpeg?width=360"
              />
              <div className="text-[11px] leading-3.5 font-medium text-white/80 text-shadow-lg">
                Staabsworth
              </div>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        className="z-20 text-center justify-center md:w-3xl w-xs"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl px-5 font-inter text-[48px] leading-11 font-medium tracking-[-0.96px] text-white md:px-0 md:text-7xl md:leading-[72px] max-w-[854px] h-auto md:h-[150px] "
        >
          <TypeAnimation
            sequence={[
              "Make a country song about Jess being late",
              1000,
              "Make a house song about quitting your job",
              1000,
              "Make a jazz song about watering my plants",
              1000,
            ]}
            speed={20}
            repeat={Infinity}
            style={{ fontSize: "", color: "white" }}
          />
        </h1>
        <p className="mx-auto max-w-[310px] pt-3 text-center font-inter text-[16px] leading-6 font-light text-white md:max-w-[410px] md:px-5 pb-6">
          Start with a simple prompt or dive into our pro editing tools, your
          next track is just a step away.
        </p>

        {/* Input box */}
        <div className="flex justify-self-center flex-row items-center rounded-[100px] border-[0.377px] border-white/10 bg-dumbo-50/10 p-1 pl-2.5 md:p-[3.77px] md:pt-[3.77px] md:pl-2.5 shadow-[#d47e1c43] shadow-2xs w-full max-w-xl ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="h-5 w-5 text-white/20"
          >
            <g>
              <path d="M10.139 10.577c.316-.77 1.406-.77 1.722 0l.89 2.165c.095.23.277.412.507.507l2.165.89c.77.316.77 1.406 0 1.722l-2.165.89a.93.93 0 0 0-.507.507l-.89 2.165c-.316.77-1.406.77-1.722 0l-.89-2.165a.93.93 0 0 0-.507-.507l-2.165-.89c-.77-.316-.77-1.406 0-1.722l2.165-.89a.93.93 0 0 0 .507-.507zm6.422-6.14a.705.705 0 0 1 1.304 0l.673 1.637c.072.174.21.312.384.384l1.638.674a.704.704 0 0 1 0 1.303l-1.638.673a.7.7 0 0 0-.384.384l-.673 1.638a.705.705 0 0 1-1.303 0l-.673-1.638a.7.7 0 0 0-.384-.384l-1.639-.673a.704.704 0 0 1 0-1.303l1.639-.674a.7.7 0 0 0 .384-.384zM4.861 7.26a.42.42 0 0 1 .776 0l.4.973a.42.42 0 0 0 .228.229l.973.4a.42.42 0 0 1 0 .775l-.973.4a.42.42 0 0 0-.228.228l-.4.973a.42.42 0 0 1-.776 0l-.4-.973a.42.42 0 0 0-.228-.228l-.973-.4a.42.42 0 0 1 0-.776l.973-.4a.42.42 0 0 0 .228-.228z"></path>
            </g>
          </svg>
          <input
            type="text"
            placeholder="Type any idea you have"
            className="flex-1 bg-transparent outline-none text-white placeholder-white/70 px-3 py-2"
          />
          <button className="mt-0.5 sm:mt-0 sm:ml-3 ml-0 md:px-6 px-4 py-2 bg-linear-to-r from-pink-500 to-orange-400 rounded-full text-white font-semibold hover:opacity-90 transition">
            Create
          </button>
        </div>

        <button className="sm:flex hidden justify-self-center mt-10 text-sm text-white/80 border border-white/20 rounded-full px-5 py-2 hover:bg-white/10 transition">
          I’m a musician
        </button>
      </motion.div>
      <div
        className=" absolute sm:bottom-10 bottom-6 left-0 text-white  flex gap-6 w-full text-sm"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, transparent 20%, black 35%, black 65%, transparent 80%, transparent 100%)",
        }}
      >
        <div className="scrolling-animation">
          {logos.map((logo, index) => (
            <span key={index} className="inline-block px-3 md:px-6">
              <span className="flex h-12 w-24 items-center justify-center grayscale transition-all duration-300 hover:grayscale-0 md:h-16 md:w-32">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-auto max-h-8 w-auto max-w-full object-contain md:max-h-10"
                />
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
