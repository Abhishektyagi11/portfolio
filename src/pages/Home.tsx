import { Code, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { IMAGES } from "../constants/Images";
import { motion } from "framer-motion";

const Home = () => {
    return (
        <div className="bg-light-background text-light-foreground dark:bg-dark-background dark:text-dark-foreground min-h-screen flex items-center justify-center px-6">
            <div className="flex flex-col-reverse lg:flex-row items-center max-w-7xl w-full gap-10">
                {/* Text Section */}
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="flex-1 flex flex-col gap-6"
                >
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        <span className="text-light-primary dark:text-dark-primary">Hi,</span> I'm Abhishek Tyagii
                    </h1>
                    <h2 className="text-xl md:text-2xl font-semibold text-light-primary dark:text-dark-primary">
                        Cloud Devops Engineer
                    </h2>
                    <p className="text-base md:text-lg text-gray-700 dark:text-gray-300">
                        I enjoy solving complex problems. Frequently praised as detail-oriented by my peers,
                        I can be relied upon to help your company achieve its goals by providing sustainable
                        and scalable solutions.
                    </p>
                    {/* Social Icons */}
                    <div className="flex gap-6 pt-2">
                        <motion.a
                            href="www.linkedin.com/in/iabhishektyagii"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            whileHover={{ scale: 1.1, y: -5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Linkedin
                                size={22}
                                className="text-light-foreground dark:text-dark-foreground hover:text-light-primary dark:hover:text-dark-primary transition-colors duration-300"
                            />
                        </motion.a>

                        <motion.a
                            href="https://github.com/Abhishektyagi11"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            whileHover={{ scale: 1.1, y: -5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Github
                                size={22}
                                className="text-light-foreground dark:text-dark-foreground hover:text-light-primary dark:hover:text-dark-primary transition-colors duration-300"
                            />
                        </motion.a>

                        <motion.a
                            href="https://x.com/iabhishektyagii"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Twitter"
                            whileHover={{ scale: 1.1, y: -5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Twitter
                                size={22}
                                className="text-light-foreground dark:text-dark-foreground hover:text-light-primary dark:hover:text-dark-primary transition-colors duration-300"
                            />
                        </motion.a>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 mt-2">
                        {/* Get in Touch Button */}
                        <button className="flex items-center gap-2 px-6 py-2 rounded-md bg-light-primary text-white dark:bg-dark-primary hover:opacity-90 transition w-full md:w-auto">
                            <Mail size={18} />
                            Get in Touch
                        </button>

                        {/* See My Work Button */}
                        <button className="flex items-center gap-2 px-6 py-2 rounded-md border border-light-primary dark:border-dark-primary text-light-primary hover:bg-light-primary hover:text-white dark:hover:bg-dark-primary transition w-full md:w-auto dark:text-white">
                            <Code size={18} />
                            See My Work
                        </button>
                    </div>



                </motion.div>

                {/* Image Section */}
                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="flex-1 flex items-center justify-center"
                >
                    <img
                        src={IMAGES.home}
                        alt="Abhinav illustration"
                        className="max-w-sm w-full rounded-xl"
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default Home;
