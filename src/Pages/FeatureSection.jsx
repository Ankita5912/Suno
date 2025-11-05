import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const features = [
  {
    title: "10 Free songs, daily",
    description:
      "Turn any moment into customized music instantly — from your commute to inside jokes. Express what words can’t. Free forever, no subscription needed.",
    image: "https://cdn-o.suno.com/splash-page/highlights/highlight%204.png", // replace with your icon
  },
  {
    title: "Free AI music generator",
    description:
      "Discover what’s possible when anyone can make music. Access the market-leading AI song generator to explore millions of songs—remixes, jokes, and raw emotion.",
    image: "https://cdn-o.suno.com/splash-page/highlights/highlight%205-v2.png", // replace with your image
  },
  {
    title: "Share it with the world",
    description:
      "Make music that matters to you, then share it with people who’ll feel it too. From your inner circle to millions of music fans, your next track can go far.",
    image: "https://cdn-o.suno.com/splash-page/highlights/highlight%206.png", // replace with your icon
  },
  {
    title: "Experience the modern song maker",
    description:
      "Start, edit, remix—your way. Upload or record your own audio, rewrite lyrics, reorder sections, and reimagine your sound with powerful creative tools.",
    image: "https://cdn-o.suno.com/splash-page/highlights/highlight%201.png", // replace with your icon
  },
  {
    title: "Create everyday. Keep it all.",
    description:
      "Make up to 500 custom songs a month, with full commercial rights on the Pro plan. Get inspired, break genre boundaries, and own what you generate—no strings attached.",
    image: "https://cdn-o.suno.com/splash-page/highlights/highlight%202.png", // replace with your icon
  },
  {
    title: "Extract stems. Drop into your DAW.",
    description:
      "Export up to 12 time-aligned WAV stems and use them seamlessly in Ableton, Logic, or any DAW. Clean, structured, and ready for pro workflows.",
    image: "https://cdn-o.suno.com/splash-page/highlights/highlight%203.png", // replace with your icon
  },
];

export default function FeaturesSection() {
  const ref = useRef(null);
  const cardRef = useRef(null);
  const cardInView = useInView(cardRef, { once: true });
  const isInView = useInView(ref, { once: true });

  return (
    <section className="text-white w-full bg-background-primary px-4 mb-30">
      <div className="mx-auto max-w-[1200px] justify-center">
        <motion.h2
          className="font-inter mb-[72px] font-medium text-foreground-primary  select-none whitespace-pre-wrap text-[35px] leading-[35px] lg:text-[72px] lg:leading-16 max-w-[760px]"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          ref={ref}
        >
          Everything you need to make music your way
        </motion.h2>

        <div className="grid grid-cols-1 xl:grid-cols-3 sm:grid-cols-2 w-full items-center justify-items-center overflow-scroll mb-12 gap-10 justify-self-center">
          {features.map((item, index) => (
            <motion.div
              key={index}
              className="flex h-[460px] w-[376px] max-w-[90vw] min-w-[280px] flex-col items-start rounded-3xl border border-white/10 bg-[#ffffff0a] p-8"
              initial={{ opacity: 0, x: -20 }}
              animate={cardInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              ref={cardRef}
            >
              <div className="mb-4 w-full">
                <h3 className="mb-4 font-inter text-5 leading-6 font-medium text-white">
                  {item.title}
                </h3>
                <p className="mb-6 font-inter text-sm leading-6 font-medium text-white/70">
                  {item.description}
                </p>
              </div>
              <img
                src={item.image}
                alt={item.title}
                className="rounded-xl object-contain h-[180px] w-[348px]"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
