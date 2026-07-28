import { Card } from "@/src/components/ui/Card";
import { SectionHeading } from "./About";
import {
  Server,
  Database,
  Brain,
  Globe,
  Code2,
} from "lucide-react";

const services = [
  {
    title: "Backend Development",
    icon: Server,
    description:
      "Building scalable backend applications using Java, Node.js and Express.",
  },
  {
    title: "REST API Development",
    icon: Globe,
    description:
      "Designing secure and well-structured REST APIs for web applications.",
  },
  {
    title: "AI Integrations",
    icon: Brain,
    description:
      "Integrating Gemini API and Retrieval-Augmented Generation into applications.",
  },
  {
    title: "Database Design",
    icon: Database,
    description:
      "Designing MongoDB databases with efficient schemas and authentication.",
  },
  {
    title: "React Applications",
    icon: Code2,
    description:
      "Developing responsive React applications with TypeScript and Tailwind CSS.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">

        <SectionHeading
          title="What I Can Help With"
          subtitle="Technologies and services I enjoy building."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Card
                key={service.title}
                className="p-6 hover:border-indigo-500 transition"
              >
                <Icon
                  className="text-indigo-400 mb-4"
                  size={34}
                />

                <h3 className="font-bold text-lg mb-3">
                  {service.title}
                </h3>

                <p className="text-slate-400">
                  {service.description}
                </p>
              </Card>
            );
          })}

        </div>
      </div>
    </section>
  );
};