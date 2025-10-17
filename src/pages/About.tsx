import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const About = () => {
    const pageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Scroll to top when component mounts
        pageRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, []);


    const educations = [
        {
            name: 'Matriculation',
            date: '2017',
            description: 'Completed high school with a focus on science and mathematics.',
            score: '9.2 CGPA',
        },
        {
            name: 'Intermediate',
            date: '2019',
            description: 'Studied Physics, Chemistry, and Mathematics.',
            score: '70.6%',
        },
        {
            name: 'B.Tech',
            date: '2019 - 2023',
            description: 'Graduated with a degree in Computer Science.',
            score: '8.9 CGPA',
        },
    ];

    return (
        <div ref={pageRef} className="bg-light-background dark:bg-dark-background py-10 px-5 min-h-screen">
            {/* Intro */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto text-center mb-6"
            >
                <h1 className="text-2xl md:text-3xl font-semibold text-light-foreground dark:text-dark-foreground">
                    I’m an <span className="text-light-primary dark:text-dark-primary">experienced Software Engineer</span> with 2 years of expertise in
                    <br className="hidden sm:block" />
                    <span className="inline-block mt-1">
                        Full Stack and Mobile App Development.
                    </span>
                </h1>
            </motion.div>

            {/* Heading */}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-center text-light-foreground dark:text-dark-foreground mb-10"
            >
                Education Timeline
            </motion.h2>

            {/* Green timeline line color */}
            <style>
                {`
                    .vertical-timeline::before {
                        background: #22c55e;
                    }
                `}
            </style>

            {/* Timeline */}
            <VerticalTimeline>
                {educations.map((edu, index) => (
                    <VerticalTimelineElement
                        key={index}
                        className="vertical-timeline-element--education"
                        contentStyle={{
                            background: 'rgba(34, 197, 94, 0.1)',
                            color: '#1f2937',
                            backdropFilter: 'blur(6px)',
                        }}
                        contentArrowStyle={{ borderRight: '7px solid rgba(34, 197, 94, 0.4)' }}
                        date={edu.date}
                        dateClassName="text-light-primary dark:text-dark-primary font-semibold"
                        iconStyle={{
                            background: '#22c55e',
                            color: '#fff',
                        }}
                        icon={<GraduationCap />}
                    >
                        <h3 className="text-lg font-semibold text-light-foreground dark:text-dark-foreground">
                            {edu.name}
                        </h3>
                        <h4 className="text-sm font-medium text-gray-600 dark:text-gray-300">
                            {edu.score}
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-200">{edu.description}</p>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </div>
    );
};

export default About;
