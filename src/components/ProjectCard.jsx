const ProjectCard = ({ project }) => {
  return (
    <div className="p-4 shadow rounded-lg">
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p className="text-sm mt-2">{project.desc}</p>

      <div className="mt-2">
        {project.tech.map((t, i) => (
          <span key={i} className="text-xs mr-2 bg-gray-200 px-2 py-1 rounded">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-4 flex gap-3">
        <a href={project.live} className="text-blue-500">
          Live
        </a>
        <a href={project.github} className="text-blue-500">
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
