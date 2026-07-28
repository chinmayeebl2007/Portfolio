import { motion } from "motion/react";
import { Brain, Database, Bot, Code } from "lucide-react";

const items = [
  {
    icon: Bot,
    title: "AI Engineering Internship",
    description:
      "Building AI agents, workflows, and practical AI applications during the FlyRank Internship.",
  },
  {
    icon: Brain,
    title: "AI Agents & MCP",
    description:
      "Learning autonomous AI agents, Model Context Protocol (MCP), and tool integrations.",
  },
  {
    icon: Database,
    title: "Backend Engineering",
    description:
      "Strengthening backend skills with Node.js, Express.js, PostgreSQL, and REST APIs.",
  },
  {
    icon: Code,
    title: "System Design",
    description:
      "Exploring scalable software architecture and backend system design principles.",
  },
];

export const CurrentlyWorking = () => {
  return (
    <section id="currently-working" className="py-24">
      <div className="container mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            Currently Working On
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto">
            I'm continuously improving my skills through real-world projects,
            internships, and hands-on backend and AI development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">

          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-xl border border-slate-700 bg-slate-800/40 p-6 hover:border-indigo-500 transition"
              >
                <Icon className="text-indigo-400 mb-4" size={30} />

                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>

                <p className="text-slate-400">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};