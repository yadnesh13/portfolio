function Hero() {
    const techStack = [
        "Computer Vision",
        "Generative AI",
    ];

  return (
    <section className="min-h-screen bg-black text-white flex items-center px-8 md:px-20 pt-32 pb-20">
      <div className="max-w-6xl mx-auto w-full">

        {/* Intro */}
        <p className="text-gray-400 text-lg md:text-xl mb-8 tracking-wide">
          Applied AI / ML Engineer
        </p>

        {/* Main Heading */}
        <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tight mb-10 bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
          Yadnesh Bhanushali
        </h1>

        {/* Description */}
        <p className="text-gray-300 text-xl md:text-2xl leading-relaxed max-w-4xl mb-12">
          Building production-grade AI systems across Generative AI,
          Hybrid Search, Computer Vision, and Cloud Infrastructure.
          Currently working on scalable AI platforms involving OpenSearch,
          AWS Bedrock, SageMaker, multimodal pipelines, and industrial
          monitoring systems.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-5 mb-16">

          <a
            href="#projects"
            className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition-all duration-300"
          >
            View Projects
          </a>

          <a
            href="/Yadnesh_Resume.pdf"
            download
            className="border border-gray-700 px-8 py-4 rounded-2xl hover:border-white hover:text-white hover:scale-105 transition-all duration-300"
          >
            Download Resume
          </a>

        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-4">

          {techStack.map((tech, index) => (
            <span
              key={index}
              className="border border-gray-800 hover:border-gray-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] px-6 py-3 rounded-full text-gray-300 hover:text-white transition-all duration-300"
            >
              {tech}
            </span>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Hero;