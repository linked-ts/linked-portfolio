import React from 'react';
import { FaGithub, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import styles from './Skills.module.scss';

const skills = [
    { name: 'GitHub', icon: <FaGithub /> },
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3Alt /> },
    { name: 'Javascript', icon: <FaJs /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
];

const Skills = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Skills</h2>
            <div className={styles.skillsList}>
                {skills.map((skill, index) => (
                    <div key={index} className={styles.skill}>
                        {skill.icon}
                        <span>{skill.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
