const Skills = () => {
  const skills = [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "TailwindCSS",
    "Redux",
    "Node.js",
    "Git",
    "Responsive Design",
    "Cross-Browser Compatibility",
  ];

  return (
    <section id="skills" className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold mb-6">Skills</h2>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span key={index} className="px-4 py-2 bg-white shadow rounded">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
