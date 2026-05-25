import Reveal from "../components/Reveal";

function Experience() {
  const experiences = [
    {
      title: "Associate Machine Learning Engineer",
      company: "Oneture Technologies",
      period: "Oct 2025 – Present",
      description:
        "Building production-grade AI systems involving hybrid search, multimodal AI pipelines, AWS cloud infrastructure, industrial monitoring platforms, and intelligent data engineering workflows.",
      highlights: [
        "Built OpenSearch-based hybrid retrieval systems combining BM25, semantic search, and Learning-to-Rank pipelines.",
        "Developed multimodal Vision Language Model pipelines using AWS Bedrock for large-scale e-commerce automation.",
        "Worked on industrial Digital Twin systems for wind energy monitoring and predictive analytics readiness.",
        "Designed scalable AWS RDS database architecture and ingestion pipelines for enterprise forecasting platforms.",
      ],
      tech: [
        "AWS",
        "OpenSearch",
        "LLMs",
        "VLMs",
        "SageMaker",
        "Grafana",
        "Python",
      ],
    },

    {
      title: "Machine Learning Intern",
      company: "Oneture Technologies",
      period: "2025",
      description:
        "Worked across enterprise AI initiatives involving computer vision, cloud deployment, search systems, and scalable ML workflows.",
      highlights: [
        "Contributed to production AI deployments for real enterprise use-cases.",
        "Built automation-focused ML systems reducing manual operational effort.",
        "Collaborated across cloud, backend, and AI engineering tasks.",
      ],
      tech: [
        "Python",
        "AWS",
        "Computer Vision",
        "Generative AI",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="bg-black text-white px-8 md:px-20 py-24"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-20">
          <p className="text-gray-500 uppercase tracking-[0.2em] mb-4 text-sm">
            Experience
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Professional Journey
          </h2>
        </div>

        {/* Timeline */}
        <div className="space-y-12">

          {experiences.map((exp, index) => (
            <Reveal key={index}>
              <div className="border border-gray-900 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] rounded-3xl p-8 hover:border-gray-700 hover:-translate-y-1 transition-all duration-300 hover:scale-105">

                {/* Top */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">

                  <div>
                    <h3 className="text-2xl font-bold mb-2">
                      {exp.title}
                    </h3>

                    <p className="text-gray-400">
                      {exp.company}
                    </p>
                  </div>

                  <p className="text-gray-500 mt-4 md:mt-0">
                    {exp.period}
                  </p>

                </div>

                {/* Description */}
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-3 mb-8">
                  {exp.highlights.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-gray-400 flex items-start gap-3"
                    >
                      <span className="text-white mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3">
                  {exp.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="border border-gray-800 px-4 py-2 rounded-full text-sm text-gray-300 hover:border-white hover:text-white transition-all duration-300 hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </Reveal>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;