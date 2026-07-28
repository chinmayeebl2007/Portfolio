import { motion } from "motion/react";
import { Github, ExternalLink, CheckCircle2 } from "lucide-react";
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      whileHover={{ y: -8 }}
    >
      <Card className="overflow-hidden bg-card-bg-light border border-white/5 hover:border-indigo-500/40 transition-all duration-300 h-full flex flex-col group">

        {/* Project Image */}
        <div className="overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-56 object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-6 flex flex-col flex-grow">

          {/* Title + Status */}
          <div className="flex justify-between items-start mb-4">

            <h3 className="text-xl font-bold group-hover:text-indigo-400 transition-colors">
              {project.title}
            </h3>

            <span className="text-[10px] uppercase tracking-wider bg-indigo-500/10 text-indigo-300 px-3 py-1 rounded-full font-semibold">
              {project.status}
            </span>

          </div>

          {/* Description */}
          <p className="text-slate-400 leading-relaxed mb-5">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="mb-6">

            <h4 className="text-sm font-semibold text-white mb-3">
              Technologies
            </h4>

            <div className="flex flex-wrap gap-2">

              {project.technologies.map((tech: string) => (
                <span
                  key={tech}
                  className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300"
                >
                  {tech}
                </span>
              ))}

            </div>

          </div>

          {/* Features */}
          <div className="mb-6">

            <h4 className="text-sm font-semibold text-white mb-3">
              Key Features
            </h4>

            <ul className="space-y-2">

              {project.highlights.map((item: string) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-slate-300"
                >
                  <CheckCircle2
                    size={16}
                    className="text-emerald-400"
                  />

                  {item}
                </li>
              ))}

            </ul>

          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-auto">

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-indigo-600 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              <Github size={16} />
              GitHub
            </a>

            {project.demo !== "#" && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 rounded-lg border border-indigo-500 py-2.5 text-sm font-semibold text-indigo-300 transition hover:bg-indigo-600 hover:text-white"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}

          </div>

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
          subtitle="A collection of projects showcasing my experience in backend development, AI-powered applications, and full-stack engineering."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">

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