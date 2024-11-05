import React from 'react';
import aboutImg from '../../assets/aboutMe.svg';
import pricingImg from '../../assets/pricingButton.svg';
import './About.css'

const About = () => {
    return (
        <div className="about w-full min-h-screen flex flex-col lg:flex-row gap-10 items-center justify-center">
            <div className="col1 w-full lg:w-1/2 flex justify-center lg:justify-end mb-6 lg:mb-0">
                <img src={aboutImg} alt="About Me" className="w-2/3 lg:w-2/3" />
            </div>
            <div className="col2 w-full lg:w-1/2 text-center lg:text-left">
                <h2 className="text-5xl text-white font-bold">
                    About me
                </h2>
                <p className="aboutSubtitle py-4 md:py-5 text-sm md:text-base lg:text-lg text-[#7C7A85]">
                    Hey there! I've been a <span className="text-purple-500">front-end</span> developer for 3 years.
                    <br />
                    I love turning ideas into websites that look great on any <br /> device - whether you're browsing on br your phone, tablet, or computer.
                    <br />
                    Got a web project in mind? Let's chat and create something awesome together!
                </p>
                <div className="aboutBtns flex md:flex-r    ow items-center justify-center lg:justify-start gap-4 md:gap-5 mt-6 lg:mt-10">
                    <button className="aboutBtn1 px-6 py-3 bg-white/10 text-white font-semibold rounded-md shadow-md backdrop-blur-sm transition duration-300 hover:bg-white/20 border border-[#FAFAFA] focus:outline-none focus:ring-2 focus:ring-white/50">
                        <a href="https://t.me/lov_vy">Contact</a>
                    </button>
                    <button className="aboutBtn2 flex px-5 py-3 items-center text-purple-500 font-semibold space-x-2 transition duration-300 hover:text-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50">
                        <img src={pricingImg} alt="Pricing icon" className="w-5 h-5" />
                        <span><a href="https://t.me/lov_vy">Pricing</a></span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default About;
