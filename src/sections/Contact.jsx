function Contact() {
  return (
    <section
      id="contact"
      className="bg-black text-white px-8 md:px-20 py-24"
    >

      <div className="max-w-4xl mx-auto text-center">

        {/* Heading */}
        <p className="text-gray-500 uppercase tracking-[0.2em] mb-4 text-sm">
          Contact
        </p>

        <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
          Let’s build something impactful together.
        </h2>

        <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
          I’m always open to discussing AI engineering, production ML systems,
          cloud architecture, and opportunities involving scalable intelligent systems.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-16">

          <a
            href="mailto:yadneshkb1303@gmail.com"
            className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:bg-gray-200 transition duration-300"
          >
            Send Email
          </a>

          <a
            href="https://linkedin.com/in/yadnesh-bhanushali-554678265"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-700 px-8 py-4 rounded-2xl hover:border-white hover:text-white transition duration-300"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/yadnesh13"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-700 px-8 py-4 rounded-2xl hover:border-white hover:text-white transition duration-300"
          >
            GitHub
          </a>

        </div>

        {/* Bottom Line */}
        <p className="text-gray-600 text-sm">
          Built with React, Tailwind CSS, and a lot of debugging.
        </p>

      </div>

    </section>
  );
}

export default Contact;