import { WORK } from "../constants/Work";
import Slider from "react-slick";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Work = () => {
    return (
        <div className="px-4 py-10 bg-light-background dark:bg-dark-background">
            {WORK.map((item, index) => (
                <motion.div
                    key={index}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto p-6 mb-10 bg-white dark:bg-gray-800 rounded-lg shadow-md"
                >
                    {/* Project Header */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row items-center gap-6 mb-4"
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-28 h-28 object-contain rounded-lg"
                        />
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{item.name}</h2>
                            <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
                        </div>
                    </motion.div>

                    {/* Tags */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                        viewport={{ once: true }}
                        className="flex flex-wrap gap-2 mb-4"
                    >
                        {item.tags.map((tag, tagIndex) => (
                            <span
                                key={tagIndex}
                                className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-800 dark:text-blue-100"
                            >
                                {tag}
                            </span>
                        ))}
                    </motion.div>

                    {/* Screenshots */}
                    {item.images.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="mb-4"
                        >
                            <Slider
                                dots={true}
                                infinite={true}
                                speed={500}
                                slidesToShow={3}
                                slidesToScroll={1}
                                autoplay={true}
                                autoplaySpeed={2000}
                                arrows={false}
                                responsive={[
                                    {
                                        breakpoint: 768,
                                        settings: {
                                            slidesToShow: 1,
                                        },
                                    },
                                    {
                                        breakpoint: 1024,
                                        settings: {
                                            slidesToShow: 2,
                                        },
                                    },
                                ]}
                            >
                                {item.images.map((imgUrl, imgIndex) => (
                                    <div key={imgIndex} className="px-2">
                                        <div className="aspect-[4/3] overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
                                            <img
                                                src={imgUrl}
                                                alt={`Screenshot ${imgIndex + 1}`}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </motion.div>
                    )}

                    {/* Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.4 }}
                        viewport={{ once: true }}
                        className="flex gap-4 mt-4"
                    >
                        {item.link && (
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:underline"
                            >
                                <ExternalLink size={16} /> Visit Site
                            </a>
                        )}
                        <a
                            href={item.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:underline"
                        >
                            <Github size={16} /> GitHub Repo
                        </a>
                    </motion.div>
                </motion.div>
            ))}
        </div>
    );
};

export default Work;
