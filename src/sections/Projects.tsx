import { motion } from "motion/react";
import { useState } from "react";
import {
  Github,
  ExternalLink,
  CheckCircle2,
  ImageIcon,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { PORTFOLIO_CONTENT } from "@/src/constants/content";
import { SectionHeading } from "./About";
import { Card } from "@/src/components/ui/Card";

type GalleryState = {
  images: string[];
  title: string;
};

type ProjectCardProps = {
  project: any;
  index: number;
  openGallery: (images: string[], title: string) => void;
};

const ProjectCard = ({
  project,
  index,
  openGallery,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.15,
        duration: 0.5,
      }}
      whileHover={{ y: -8 }}
    >
      <Card className="overflow-hidden bg-card-bg-light border border-white/5 hover:border-indigo-500/40 transition-all duration-300 h-full flex flex-col group">

        {/* Cover Image */}

        <div className="overflow-hidden bg-slate-900">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-contain p-4 transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-6 flex flex-col flex-grow">

          {/* Title */}

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

          {/* Technologies */}

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
                    className="text-emerald-400 flex-shrink-0"
                  />

                  <span>{item}</span>

                </li>

              ))}

            </ul>

          </div>

          {/* Gallery Button */}

          {project.gallery && (

            <button
              onClick={() =>
                openGallery(project.gallery, project.title)
              }
              className="mb-4 flex items-center justify-center gap-2 rounded-lg border border-indigo-500 py-3 text-sm font-semibold text-indigo-300 transition hover:bg-indigo-600 hover:text-white"
            >
              <ImageIcon size={18} />

              View Gallery ({project.gallery.length})

            </button>

          )}

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

const GalleryModal = ({
  gallery,
  currentImage,
  closeGallery,
  previousImage,
  nextImage,
}: {
  gallery: GalleryState | null;
  currentImage: number;
  closeGallery: () => void;
  previousImage: () => void;
  nextImage: () => void;
}) => {

  if (!gallery) return null;

  return (

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={closeGallery}
      className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-6"
    >

      {/* Close */}

      <button
        onClick={closeGallery}
        className="absolute top-6 right-6 text-white hover:text-indigo-400 transition"
      >
        <X size={36} />
      </button>

      {/* Previous */}

      <button
        onClick={(e) => {
          e.stopPropagation();
          previousImage();
        }}
        className="absolute left-6 text-white hover:text-indigo-400 transition"
      >
        <ChevronLeft size={48} />
      </button>

      {/* Image */}

      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-6xl h-[85vh] flex items-center justify-center"
      >

        <motion.img
  key={currentImage}
  src={gallery.images[currentImage]}
  alt={gallery.title}
  loading="eager"
  draggable={false}
  initial={{ opacity: 0, scale: 0.97 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.25 }}
  className="max-w-full max-h-full object-contain rounded-xl shadow-2xl select-none"
/>

      </div>

      {/* Next */}

      <button
        onClick={(e) => {
          e.stopPropagation();
          nextImage();
        }}
        className="absolute right-6 text-white hover:text-indigo-400 transition"
      >
        <ChevronRight size={48} />
      </button>

      {/* Counter */}

      <div className="absolute bottom-8 text-white text-lg font-medium">

        {currentImage + 1} / {gallery.images.length}

      </div>

    </motion.div>

  );

};
export const Projects = () => {
  const [gallery, setGallery] = useState<GalleryState | null>(null);
  const [currentImage, setCurrentImage] = useState(0);

  const openGallery = (images: string[], title: string) => {
    setGallery({
      images,
      title,
    });
    setCurrentImage(0);
    document.body.style.overflow = "hidden";
  };

  const closeGallery = () => {
    setGallery(null);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    if (!gallery) return;

    setCurrentImage((prev) =>
      prev === gallery.images.length - 1 ? 0 : prev + 1
    );
  };

  const previousImage = () => {
    if (!gallery) return;

    setCurrentImage((prev) =>
      prev === 0 ? gallery.images.length - 1 : prev - 1
    );
  };

  return (
    <>
      <section
        id="projects"
        className="py-24"
      >
        <div className="container mx-auto px-6">

          <SectionHeading
            title="Featured Projects"
            subtitle="A collection of projects showcasing my experience in backend development, AI-powered applications, and full-stack engineering."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {PORTFOLIO_CONTENT.projects.map(
              (project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  openGallery={openGallery}
                />
              )
            )}

          </div>

        </div>
      </section>

      <GalleryModal
        gallery={gallery}
        currentImage={currentImage}
        closeGallery={closeGallery}
        previousImage={previousImage}
        nextImage={nextImage}
      />
    </>
  );
};