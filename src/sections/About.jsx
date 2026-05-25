import Reveal from "../components/Reveal";

function About() {
  return (
    <section
        id="about"
        className="bg-black text-white px-8 md:px-20 py-24"
        >
      
      <Reveal>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">

        {/* Left Side */}
        <div>
          <p className="text-gray-500 uppercase tracking-[0.2em] mb-4 text-sm">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
            Building AI systems that move beyond prototypes into production.
          </h2>
        </div>

        {/* Right Side */}
        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
          
          <p>
            I am an Applied AI / ML Engineer focused on building scalable,
            production-grade AI systems across Generative AI, Computer Vision,
            Hybrid Search, and cloud-native ML infrastructure.
          </p>

          <p>
            My experience spans enterprise AI deployments involving OpenSearch,
            AWS Bedrock, SageMaker pipelines, multimodal extraction systems,
            industrial monitoring platforms, and intelligent data engineering
            workflows.
          </p>

          <p>
            I enjoy translating ambiguous business requirements into reliable
            technical systems that can operate at real-world scale. My work
            emphasizes practical deployment, system design, automation,
            performance, and measurable business impact.
          </p>

        </div>

      </div>
      </Reveal>

    </section>
  );
}

export default About;