import { motion } from "motion/react";

const futureItems = [
  {
    title: "Capstone Project",
    description:
      "My final internship project will be showcased here with architecture, implementation details, and deployment.",
  },
  {
    title: "Technical Blogs",
    description:
      "I will share articles about backend development, AI, APIs, databases, and software engineering.",
  },
  {
    title: "Internship Learnings",
    description:
      "Weekly reflections and practical lessons from my AI Engineering internship journey.",
  },
  {
    title: "Open Source Contributions",
    description:
      "Future contributions to open-source projects and collaborative software development.",
  },
];

export const FutureWork = () => {
  return (
    <section
      id="future"
      className="py-24 bg-slate-900/30"
    >
      <div className="container mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Coming Soon
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto">
            As I continue learning and building, this section will feature
            my internship capstone, technical blogs, open-source work,
            and engineering insights.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">

          {futureItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
              }}
              viewport={{ once: true }}
              className="rounded-xl border border-slate-700 bg-slate-800/40 p-6 hover:border-indigo-500 transition"
            >
              <h3 className="text-2xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-slate-400">
                {item.description}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};