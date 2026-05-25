import Reveal from "../components/Reveal";

function Skills() {
  const skillCategories = [
    {
      title: "AI / Machine Learning",
      skills: [
        "LLMs",
        "VLMs",
        "Generative AI",
        "Computer Vision",
        "Hybrid Search",
        "Learning-to-Rank",
        "Semantic Search",
      ],
    },

    {
      title: "Cloud & Infrastructure",
      skills: [
        "AWS",
        "SageMaker",
        "Bedrock",
        "RDS",
        "S3",
        "IAM",
        "VPC",
      ],
    },

    {
      title: "Backend & Data",
      skills: [
        "Python",
        "Django",
        "PostgreSQL",
        "OpenSearch",
        "SQL",
        "Data Engineering",
      ],
    },

    {
      title: "Tools & Platforms",
      skills: [
        "Grafana",
        "Git",
        "Streamlit",
        "React",
        "Linux",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="bg-black text-white px-8 md:px-20 py-24"
    >

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-20">
          <p className="text-gray-500 uppercase tracking-[0.2em] mb-4 text-sm">
            Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Technologies & Expertise
          </h2>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-8">

          {skillCategories.map((category, index) => (
            <Reveal key={index}>
              <div className="border border-gray-900 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] rounded-3xl p-8 hover:border-gray-700 hover:-translate-y-1 transition-all duration-300 hover:scale-105">

                <h3 className="text-2xl font-bold mb-6">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="border border-gray-800 px-4 py-2 rounded-full text-sm text-gray-300 hover:border-white hover:text-white transition-all duration-300 hover:scale-105"
                    >
                      {skill}
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

export default Skills;