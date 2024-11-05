import { FaGithub, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';

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
        <div className="w-full min-h-full flex flex-col items-center justify-center md:mt-44 text-white p-6 lg:p-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
                    >
                        <div className="text-4xl text-purple-500 mb-2">{skill.icon}</div>
                        <span className="text-lg font-semibold">{skill.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
