import React from 'react';
import aboutImg from '../../assets/aboutMe.svg'
import pricingImg from '../../assets/pricingButton.svg'
import './About.css'

const About = () => {
    return (
        <div className='about w-full min-h-screen flex gap-10 items-center justify-center'>
            <div className="col1">
                <img src={aboutImg} alt="" />
            </div>
            <div className="col2">
                <h2 className="text-5xl text-white">
                    About me
                </h2>
                <p className="aboutSubtitle py-5 text-lg text-[#7C7A85]">
                Hey there! I've been a <span className='text-purple-500'>front-end</span> developer for 3 years. <br />
                I love turning ideas into websites that look great on <br /> any device - whether you're browsing on your phone, <br /> tablet, or computer. <br />

                <p>Got a web project in mind? Let's chat and create something awesome together!</p>
                </p>

                <div className="aboutBtns flex items-center gap-5 md:gap-10 mt-10 text-lg">
                    <button className="aboutBtn1 px-6 py-3 bg-white/10 text-white font-semibold rounded-md
                    shadow-md backdrop-blur-sm transition-all duration-300 hover:bg-white/20 
                    border border-[#FAFAFA] focus:outline-none focus:ring-2 focus:ring-white/50">
                        Contact
                    </button>
                    <button className="aboutBtn2 flex px-5 py-3 items-center text-purple-500 font-semibold
                    space-x-2 transition-colors duration-300 hover:text-purple-400 
                    focus:outline-none focus:ring-2 focus:ring-purple-500/50">
                        <img src={pricingImg} alt="" />
                        Pricing
                    </button>

                </div>
            </div>
        </div>
    );
};

export default About;