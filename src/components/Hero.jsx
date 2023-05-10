import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";


const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[30px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#f76c6c]" />
          <div className="w-1 sm:h-80 h-40 orange-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm <span className="text-[#f76c6c]">Axel</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-custom-text`}>
            Full-Stack Software Developer <br className="sm:block hidden" />{" "}
            with specialization in Advanced Front-End
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-24 bottom-48 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-[#a8d0e6] flex justify-center items-start p-2">
            <motion.dev
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-[#a8d0e6] mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
