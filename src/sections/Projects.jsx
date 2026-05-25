import Reveal from "../components/Reveal";

function Projects() {
  const projects = [
    {
      title: "AyurGenix AI",
      subtitle: "AI-Powered Ayurvedic Advisory System",
      description:
        "Full-stack AI healthcare platform combining LLM reasoning, ensemble ML models, and personalized treatment recommendation workflows. Built with Django, PostgreSQL, and Generative AI pipelines.",
      highlights: [
        "Achieved 88% treatment mapping accuracy.",
        "Published research at ICETCSE-2025.",
        "Integrated AI-driven medical recommendation workflows.",
        "Built complete backend and database architecture.",
      ],
      tech: [
        "Python",
        "Django",
        "PostgreSQL",
        "LLMs",
        "Machine Learning",
      ],
      github: "https://github.com/yadnesh13",
    },

    {
      title: "PDF MasterMind",
      subtitle: "LLM-Powered Document Intelligence System",
      description:
        "Conversational AI assistant for querying and summarizing large PDF documents using transformer-based retrieval pipelines and LangChain orchestration.",
      highlights: [
        "Implemented semantic document retrieval workflows.",
        "Enabled conversational querying over large PDFs.",
        "Integrated LLM-powered summarization pipelines.",
      ],
      tech: [
        "LangChain",
        "LLMs",
        "Python",
        "Vector Search",
        "NLP",
      ],
      github: "https://github.com/yadnesh13",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-black text-white px-8 md:px-20 py-24"
    >

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-20">
          <p className="text-gray-500 uppercase tracking-[0.2em] mb-4 text-sm">
            Projects
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Featured Work
          </h2>
        </div>

        {/* Project Cards */}
        <div className="grid gap-10">

          {projects.map((project, index) => (
            <Reveal key={index}>
              <div className="border border-gray-900 rounded-3xl p-8 hover:border-gray-700 hover:-translate-y-1 transition duration-300">

                {/* Title */}
                <div className="mb-6">
                  <h3 className="text-3xl font-bold mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-500 text-lg">
                    {project.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-4xl">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="mb-8">
                  <h4 className="text-white font-semibold mb-4">
                    Key Highlights
                  </h4>

                  <ul className="space-y-3">
                    {project.highlights.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-gray-400 flex items-start gap-3"
                      >
                        <span className="text-white mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="border border-gray-800 px-4 py-2 rounded-full text-sm text-gray-300 hover:border-white hover:text-white transition duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* GitHub Button */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-gray-700 px-6 py-3 rounded-xl hover:border-white hover:text-white transition duration-300 text-center"
                  >
                    View Project
                  </a>

                </div>

              </div>
            </Reveal>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;