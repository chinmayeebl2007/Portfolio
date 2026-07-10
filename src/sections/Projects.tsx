import { motion } from "motion/react";
import { PORTFOLIO_CONTENT } from "@/src/constants/content";
import { SectionHeading } from "./About";
import { Card } from "@/src/components/ui/Card";

const ProjectCard = ({
  project,
  index,
}: {
  project: any;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="p-6 bg-card-bg-light border-white/5 hover:border-indigo-500/50 group h-full flex flex-col">

        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover rounded-xl mb-5"
        />

        <div className="flex justify-between items-start mb-3">
          <h4 className="text-base font-bold group-hover:text-indigo-400 transition-colors">
            {project.title}
          </h4>

          <span className="text-[10px] text-indigo-400 bg-indigo-400/10 px-2 py-1 rounded uppercase font-bold tracking-wider">
            Active Project
          </span>
        </div>

        <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag: string) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-auto">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium transition"
          >
            GitHub
          </a>

          {project.demo !== "#" && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg border border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white text-sm font-medium transition"
            >
              Live Demo
            </a>
          )}
        </div>

      </Card>
    </motion.div>
  );
};

export const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of my recent work focusing on technical execution and user experience."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_CONTENT.projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};