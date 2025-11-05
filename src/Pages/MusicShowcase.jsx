import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaThumbsUp,FaPlay } from "react-icons/fa";
export default function MusicShowcase() {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const boxInView =useInView(ref, { once: true });

  const songs = [
    {
      id: 1,
      title: "Something is going down",
      artist: "XAVI",
      image: "https://cdn2.suno.ai/6ac66ed1-da65-4715-986b-eec035c18d95.jpeg?width=360",
      plays: "32K",
      likes: "1.0K",
    },
    {
      id: 2,
      title: "Parental Burnout",
      artist: "The Beat Bastards",
      image: "https://cdn2.suno.ai/image_5a40e16b-0c5a-40ce-90ac-50b1f8e39d0e.jpeg?width=360",
      plays: "22K",
      likes: "721",
    },
    {
      id: 3,
      title: "passing by",
      artist: "bleeder",
      image: "https://cdn2.suno.ai/ba1cfca8-c38f-44fa-b766-23c9a93e525f.jpeg?width=360",
      plays: "7.3K",
      likes: "510",
    },
    {
      id: 4,
      title: "Delapidated (Cover)",
      artist: "DeeBeetttZZ",
      image: "https://cdn2.suno.ai/image_756dd139-4cba-4e40-b29c-03ace1c69673.jpeg?width=360",
      plays: "44K",
      likes: "1.0K",
    },
    {
      id: 5,
      title: "Delapidated (Cover)",
      artist: "DeeBeetttZZ",
      image: "https://cdn2.suno.ai/image_756dd139-4cba-4e40-b29c-03ace1c69673.jpeg?width=360",
      plays: "44K",
      likes: "1.0K",
    },
    {
      id: 6,
      title: "Delapidated (Cover)",
      artist: "DeeBeetttZZ",
      image: "https://cdn2.suno.ai/image_756dd139-4cba-4e40-b29c-03ace1c69673.jpeg?width=360",
      plays: "44K",
      likes: "1.0K",
    },
  ];

  return (
    <section className="text-white py-20 px-10 ">
      <motion.div ref={ref} className="text-center mb-16" 
        initial={{ opacity: 0, y: 50 }}
        animate={boxInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}>
        <h1 className="font-inter text-center font-medium text-foreground-primary whitespace-pre-wrap text-[35px] leading-[35px] lg:text-[72px] lg:leading-16 max-w-xl mx-auto">
          Mind blowing{" "}
          <div className="justify-self-center mr-10 w-fit"> song quality</div>
        </h1>
        <p className="mt-4 text-center text-4 text-foreground-primary text-white/70 max-w-[615px] mx-auto font-inter text-[16px] leading-6 md:text-[16px]">
          Whether you have a melody in your head, lyrics you've written, or just
          a feeling you want to hear—Suno makes high-quality music creation
          accessible to all.
        </p>
      </motion.div>

      <motion.div ref={ref} className=" mt-10 flex flex-row mb-0 w-fit  md:mt-[60px] md:mb-[150px] overflow-x-scroll overflow-auto gap-10 h-[380px]" style={{scrollbarWidth: "none"}} initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }} >
        {songs.map((song) => (
          <div
            key={song.id}
            className="font-inter rounded-xl overflow-hidden md:w-57 w-45  hover:scale-101 transition-transform duration-300"
          >
            <div className="relative h-[280px] w-full origin-top overflow-hidden rounded-xl transition-transform duration-300 hover:scale-[102%] md:h-[311px]">
              <img
                src={song.image}
                alt={song.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute top-[13px] left-[13px]"></div>
              <div className="absolute bottom-[13px] left-[14.5px] flex flex-row gap-1">
                <span className="bg-black/40 px-1 py-1 text-xs rounded-md flex items-center gap-1">
                  <FaPlay className='text-white'/> {song.plays}
                </span>
                <span className="bg-black/40 px-1 py-1 rounded-md flex items-center text-xs gap-1">
                  <FaThumbsUp className='text-white'/> {song.likes}
                </span>
              </div>
            </div>

            <div className="mt-[15px] overflow-hidden text-[15.581px] leading-[15.581px] font-medium text-ellipsis whitespace-nowrap text-white">
              {song.title}
            </div>
            <div className="mt-2.5 flex items-center gap-1">
              <img className=" h-6 flex-[0_0_24px] rounded-full"/>
              <p className="flex-1 text-[11.685px] leading-[15.581px] font-medium">{song.artist}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
