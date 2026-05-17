const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="text-center px-6 max-w-2xl">
        {/* Badge */}
        <p className="text-sm text-gray-500 mb-3 tracking-widest">
          🚀 AVAILABLE FOR FRONTEND ROLES
        </p>

        {/* Name */}
        <h1 className="text-5xl md:text-4xl font-extrabold leading-tight">
          Hi, I’m <span className="text-blue-600">Harish Kadam</span>
        </h1>

        {/* Role */}
        <p className="text-lg md:text-xl text-gray-600 mt-4">
          Frontend Developer | React.js Developer | MERN Enthusiast
        </p>

        {/* Description */}
        <p className="text-gray-500 mt-4">
          I build responsive, scalable, and user-friendly web applications using
          modern frontend technologies.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 hover:scale-105 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 hover:scale-105 transition"
          >
            Contact Me
          </a>
        </div>

        {/* Optional Social Proof */}
        <div className="mt-10 text-sm text-gray-400 ">
          React • JavaScript • API Integration • Git • Responsive Design
        </div>
      </div>
    </section>
  );
};

export default Hero;
