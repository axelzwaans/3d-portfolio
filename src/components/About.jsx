import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import PropTypes from "prop-types";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  ServiceCard.propTypes = {
    index: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  };

  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.75 * index, 0.75)}
        className="w-full orange-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed:450
          }}
          className="bg-[#24305e] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-[#24305e] text-[17px] max-w-3xl leading-[30px]">
        Junior software developer with a diploma in full-stack development.
        Throughout my ten-year career in yachting, I developed excellent
        communication skills and a keen understanding of the importance of
        teamwork and attention to detail. Now, as a software developer, I am
        seeking to join my first development team where I can contribute my
        skills, learn from experienced professionals, and work collaboratively
        to create valuable and innovative software solutions. With a strong
        foundation in HTML, CSS, JavaScript, and Python, I feel well-equipped to
        tackle the challenges of modern software development.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about")
