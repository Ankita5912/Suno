import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaStar, FaApple, FaGooglePlay } from 'react-icons/fa6';

export default function HeroSection() {

  const ref = useRef(null);
  const boxInView =useInView(ref, { once: true });

  return (
    <section className="relative flex flex-col  mb-20 h-[900px] items-center justify-center text-center text-white py-32 px-6 overflow-hidden bg-[#101012]" >
      {/* Gradient Background */}
      <div className="absolute inset-0 z-0 overflow-hidden"></div>
      <img
        src="https://cdn-o.suno.com/Aura-1-Hero-Web.jpg"
        alt="Aura Background"
        className="absolute inset-0 w-full h-full object-center 0"
      />
      <div className="absolute z-30 inset-0 bg-[radial-gradient(circle_at_center,rgba(255,100,0,0.1)_10%,rgba(16,16,18,0.90)_70%)] mix-blend-overlay"
      />
     
      {/* Heading */}

      <motion.div className="relative z-10 md:mx-auto flex h-full max-w-3xl flex-col items-center justify-center  sm:px-4 py-16 text-center text-white opacity-95" ref={ref} initial={{ opacity: 0, y: 50 }}
        animate={boxInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}>
        <h1 className="mb-4 z-20 font-inter text-[80px] leading-[0.9] font-medium tracking-[-3.68px] text-foreground-primary md:mb-10 md:text-[140px] md:leading-[0.87] __web-inspector-hide-shortcut__">
          The #1 AI music app
        </h1>
        <p class="mb-10 text-[15px] font-inter leading-6 text-white/70 md:text-base">
          Where you can discover, create and share from anywhere because music
          has no boundaries.
        </p>

        {/* Rating Cards */}
        <div className=" justify-center gap-3 flex md:flex-row flex-col place-items-center">
          {/* iOS Card */}
          <div className="flex h-full md:w-80 w-75 flex-col rounded-[20px] border border-white/20 bg-[#0000001a] md:p-6 p-3 text-left">
            <div className="mb-10 flex items-center gap-4 md:mb-[72px]">
              <p className="text-2xl font-medium text-white items-center flex"> <FaApple className="inline mr-2" />Top 10 music app</p>
            </div>
            <div className="mb-3 flex font-medium font-inter text-4xl items-center">
              4.9 <FaStar className="text-yellow-400 ml-2 text-2xl" />
            </div>
            <p className="text-base text-white/70 mb-2">363k+ reviews</p>
            <button className="flex font-inter font-medium text-center  transition duration-75 5 select-none cursor-pointer px-8 text-[17px] leading-6 rounded-full hover:bg-overlay-on-light w-full border-0 bg-white py-3 text-black hover:bg-white/90">
              <FaApple className="inline mr-2" />
              <span className="relative flex flex-row items-center justify-center gap-2">Download on iPhone</span>
            </button>
          </div>

          {/* Android Card */}
          <div className="flex h-full md:w-80 w-75 flex-col rounded-[20px] border border-white/20 bg-[#0000001a] md:p-6 text-left p-3">
            <div className="flex items-center mb-10  gap-4 md:mb-[72px]">
              <FaGooglePlay className="text-2xl" />
              <p className='text-2xl font-medium text-white items-center flex'>Top 10 music app</p>
            </div>
            <div className="mb-3 flex font-medium font-inter text-4xl items-center">
              4.8 <FaStar className="text-yellow-400 ml-2 text-2xl" />
            </div>
            <p className="text-base text-white/70 mb-2">653k+ reviews</p>
            <button className="flex items-center font-inter font-medium text-center  transition duration-75 5 select-none cursor-pointer px-8 text-[17px] leading-6 rounded-full hover:bg-overlay-on-light w-full border-0 bg-white py-3 text-black hover:bg-white/90">
              <FaGooglePlay className="inline mr-2" />
              Download on Android
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
