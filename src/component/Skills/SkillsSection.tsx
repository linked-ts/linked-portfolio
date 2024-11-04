import React from 'react';
import { FaGithub, FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs } from 'react-icons/fa';
import { motion } from 'framer-motion';
import styles from './Skills.module.scss'

type SkillProps = {
  name: string;
  icon: JSX.Element;
  progress: number;
};

const skillsData: SkillProps[] = [
  { name: 'GitHub', icon: <FaGithub />, progress: 90 },
  { name: 'HTML', icon: <FaHtml5 />, progress: 95 },
  { name: 'CSS', icon: <FaCss3Alt />, progress: 90 },
  { name: 'JavaScript', icon: <FaJsSquare />, progress: 85 },
  { name: 'React', icon: <FaReact />, progress: 80 },
  { name: 'Node.js', icon: <FaNodeJs />, progress: 70 },
];

const Skill = ({ name, icon, progress }: SkillProps) => {
  return (
    <motion.div
      className="flex flex-col items-center text-white m-4 h-80"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="relative w-24 h-24 rounded-full bg-gray-800 flex items-center justify-center shadow-lg">
        <svg className="absolute top-0 left-0 w-full h-full transform rotate-90">
          <circle
            cx="50%"
            cy="50%"
            r="38%"
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth="10"
            fill="none"
          />
          <circle
            cx="50%"
            cy="50%"
            r="38%"
            stroke="#8b5cf6"
            strokeWidth="10"
            fill="none"
            strokeDasharray="240"
            strokeDashoffset={240 - (240 * progress) / 100}
            className="transition-all duration-700 ease-out"
          />
        </svg>
        <div className="text-3xl text-purple-500">{icon}</div>
      </div>
      <p className="mt-2 font-semibold"
      style={{fontFamily: 'Roboto Mono', fontWeight: 400}}>{name}</p>
      <p className="text-gray-400"
      style={{fontFamily: 'Roboto Mono', fontWeight: 400}}>{progress}%</p>
    </motion.div>
  );
};

const SkillsSection = () => {
  return (
    <section className="text-white py-10">
      <motion.div
        className="flex flex-wrap justify-center gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {skillsData.map((skill, index) => (
          <Skill key={skill.name} {...skill} />
        ))}
      </motion.div>
    </section>
  );
};

export default SkillsSection;
