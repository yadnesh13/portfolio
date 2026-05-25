function Stats() {
  const stats = [
    {
      number: "1+",
      label: "Years Experience",
    },
    {
      number: "5+",
      label: "AI Systems Delivered",
    },
    {
      number: "80%",
      label: "Manual Effort Reduced",
    },
    {
      number: "Production",
      label: "Enterprise Deployments",
    },
  ];

  return (
    <section className="bg-black text-white px-8 md:px-20 py-16 border-t border-gray-900">
      
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        
        {stats.map((stat, index) => (
          <div
            key={index}
            className="border border-gray-800 rounded-2xl p-6 hover:border-gray-600 hover:-translate-y-1 transition-all duration-300 hover:scale-105"
          >
            <h2 className="text-4xl font-bold mb-2">
              {stat.number}
            </h2>

            <p className="text-gray-400 text-sm md:text-base">
              {stat.label}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}

export default Stats;