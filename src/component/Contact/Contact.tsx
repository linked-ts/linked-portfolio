import React from 'react';

const Contact = () => {
  return (
    <section className="flex items-center justify-center min-h-screen relative text-white">
      <div className="max-w-xl text-center px-8 py-12 bg-black bg-opacity-70 rounded-md shadow-lg backdrop-blur-md">
        <h3 className="text-sm tracking-widest text-indigo-400 uppercase mb-2 font-mono font-bold">
          CONTACT NOW
        </h3>
        <h2 className="text-3xl md:text-4xl font-normal mb-4 font-mono">
          What are you waiting for?
        </h2>
        <p className="text-lg md:text-xl text-gray-400 mb-6 font-mono">
          If you are interested in purchasing your own website, please visit
          the following link and email me by clicking the button below.
        </p>
        <button className="px-6 py-3 md:px-8 md:py-4 bg-purple-500 text-black font-semibold rounded-md shadow-md transition duration-300 ease-in-out hover:bg-purple-600 hover:text-white font-mono">
          <a href="https://t.me/lov_vy">GET YOURS NOW</a>
        </button>
      </div>
    </section>
  );
};

export default Contact;
