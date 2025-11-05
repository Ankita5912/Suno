import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const creators = [
  {
    username: "@techguyver",
    video: "https://cdn1.suno.ai/Spell+Spell+Spell.mp4",
    thumbnail: "https://cdn1.suno.ai/Spell+Spell+Spell+Thumbnail.png",
  },
  {
    username: "@timbaland",
    video: "https://cdn1.suno.ai/Suno+Timbaland+Cover+Edit+4+(1)+-+Smaller.mp4",
    thumbnail: "https://cdn1.suno.ai/Suno+Timbaland+Cover+Edit+4+(1)+-+Smaller+Thumbnail.png",
  },
  {
    username: "@spellspellspell",
    video: "https://cdn1.suno.ai/Nick+St+Pierre+Covers.mp4",
    thumbnail: "https://cdn1.suno.ai/Nick+St+Pierre+Covers+Thumbnail.png",
  },
  {
    username: "@nickfloats",
    video: "https://cdn1.suno.ai/Miles+Music+Kid+Uses+Suno.mp4",
    thumbnail: "https://cdn1.suno.ai/Miles+Music+Kid+Uses+Suno+Thumbnail.png",
  },
  {
    username: "@milesmusickid",
    video: "https://cdn1.suno.ai/Devan+Ibiza.mp4",
    thumbnail: "https://cdn1.suno.ai/Devan+Ibiza+Thumbnail.png",
  },
];

export default function CreatorShowcase() {
  const ref = useRef(null);
  const cardRef = useRef(null);
  const cardInView = useInView(cardRef, { once: true });
  const isInView = useInView(ref, { once: true });
  return (
    <div className=" text-white px-6 font-inter">
      {/* Section title */}
      <motion.div className="mx-auto max-w-[349px] text-center md:max-w-[744px]" initial={{ opacity: 10, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          ref={ref} style={{opacity: 1, transform: 'none'}}><h1 className="font-inter font-medium text-foreground-primary  select-none whitespace-pre-wrap text-[35px] leading-[35px] lg:text-[72px] lg:leading-16 ">Explore and get inspired</h1><h2 className="mt-4 text-4 text-foreground-primary text-white/70 max-w-[390px] mx-auto text-center text-[15px] leading-6 md:text-[18px]">Join the #1 AI music generator. Create songs, remix tracks, make beats, and share your music with millions — free forever.</h2></motion.div>

      {/* Scrollable container */}
      <motion.div className="mx-auto mt-[50px] max-w-[1254px] flex gap-5" initial={{ opacity: 0, y: 20 }}
          animate={cardInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          ref={cardRef}>
        {creators.map((creator, index) => (
          <div
            key={index}
            className="shrink-0 h-[445px] w-60 rounded-2xl overflow-hidden cursor-pointer transition-transform hover:scale-101"
          >
            {/* Thumbnail */}
            <div className="relative">
              <video src={creator.video} className="h-[410px] w-full rounded-[20px] object-cover" poster={creator.thumbnail} playsinline="" preload="none"></video>
              <div className="absolute top-2 left-2 bg-white/30 rounded-full p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="white"
                  className="w-4 h-4"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 3l14 9-14 9V3z" />
                </svg>
              </div>
            </div>

            {/* Username */}
            <p className="mt-3 cursor-pointer overflow-hidden text-[15.581px] leading-[15.581px] font-medium text-ellipsis whitespace-nowrap text-white">
              {creator.username}
            </p>
          </div>
        ))}
      </motion.div>

      {/* Call to action button */}
      <div className="flex justify-center mt-[60px] mb-10 text-center md:mb-[120px]">
        <button className="bg-linear-to-r from-[#ff0055] to-[#ff9900] text-white px-8 w-2xs py-4 rounded-full font-semibold hover:opacity-90 transition-opacity text-base font-inter" >
          Sign up for free
        </button>
      </div>
    </div>
  );
}
