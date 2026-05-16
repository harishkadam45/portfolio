const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center pt-20"
    >
      <h1 className="text-4xl font-bold">Hi, I'm Harish Kadam</h1>
      <p className="text-lg mt-2">
        Frontend Developer | React Developer | FullStack Developer
      </p>

      <div className="mt-4 space-x-4">
        <a href="#projects" className="bg-black text-white px-4 py-2 rounded">
          View Projects
        </a>
        <a href="#contact" className="border px-4 py-2 rounded">
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Hero;
