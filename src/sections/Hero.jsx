import { motion } from "framer-motion";

function Hero() {
  const scrollToProjects = () => {
    const target = document.getElementById("projects");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen bg-black text-white flex items-center px-8 md:px-20 pt-24">

      <div className="max-w-5xl mx-auto w-full">

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gray-400 text-lg mb-4 tracking-wide"
        >
          Applied AI / ML Engineer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-black leading-tight mb-6 tracking-tight"
        >
          <span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            Yadnesh Bhanushali
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mb-10"
        >
          Building production-grade AI systems across Generative AI,
          Hybrid Search, Computer Vision, and Cloud Infrastructure.
          Currently working on scalable AI platforms involving OpenSearch,
          AWS Bedrock, SageMaker, multimodal pipelines, and industrial
          monitoring systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="flex flex-wrap gap-4 mb-10"
        >

          <button onClick={scrollToProjects} className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition duration-300">
            View Projects
          </button>

          <a
            href="/Yadnesh_Resume.pdf"
            download
            className="border border-gray-600 px-6 py-3 rounded-xl hover:border-white hover:text-white transition duration-300"
          >
            Download Resume
          </a>

        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="flex flex-wrap gap-3 text-sm"
        >
          {[
            "AWS",
            "LLMs",
            "VLMs",
            "OpenSearch",
            "Computer Vision",
            "Generative AI",
          ].map((item) => (
            <span
              key={item}
              className="border border-gray-700 px-4 py-2 rounded-full text-gray-300 hover:border-white hover:text-white transition duration-300"
            >
              {item}
            </span>
          ))}
        </motion.div>

      </div>

    </section>
  );
}

export default Hero;