import { motion } from "framer-motion";
import { SKILLS } from "../constants/Skills";
import { IMAGES } from "../constants/Images";

const Skills = () => {
    return (
        <div className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center bg-light-background dark:bg-dark-background px-4 py-10 gap-6 lg:gap-10 xl:gap-16">

            {/* Skill Cards */}
            <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 max-w-5xl w-full lg:w-3/4 justify-items-center"
            >
                {SKILLS.map((skill, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        whileHover={{ scale: 1.1 }}
                        className="w-24 h-24 sm:w-28 sm:h-28 flex flex-col items-center justify-center
                            rounded-xl bg-white/30 dark:bg-gray-800/30
                            backdrop-blur-md border border-white/20 dark:border-gray-600/20
                            shadow-md cursor-pointer"
                    >
                        <img
                            src={skill.icon}
                            alt={`Skill ${index + 1}`}
                            className="w-10 h-10 sm:w-12 sm:h-12 mb-2"
                        />
                        <span className="text-[12px] sm:text-[12px] text-gray-800 dark:text-gray-200 font-medium text-center">
                            {skill.name}
                        </span>
                    </motion.div>
                ))}
            </motion.div>

            {/* Animated Image */}
            <motion.img
                src={IMAGES.skills}
                alt="skills"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="w-60 sm:w-72 md:w-80 lg:w-1/2 max-w-md"
            />

        </div>
    );
};

export default Skills;
