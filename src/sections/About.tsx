import { motion } from "motion/react";
import { PORTFOLIO_CONTENT } from "@/src/constants/content";
import { Card } from "@/src/components/ui/Card";
import { Code2, Brain, Database, Wrench } from "lucide-react";

export const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-12">
    <h2 className="text-3xl font-bold mb-2">{title}</h2>
    {subtitle && (
      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
        {subtitle}
      </p>
    )}
  </div>
);

const SkillCategory = ({ title, skills, icon: Icon, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
  >
    <Card className="h-full border-white/5 bg-card-bg">
      <div className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
        <Icon size={14} className="text-indigo-400" />
        {title}
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill: string) => (
          <span
            key={skill}
            className="px-2 py-1 bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[10px] rounded"
          >
            {skill}
          </span>
        ))}
      </div>
    </Card>
  </motion.div>
);

export const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="My Toolkit"
          subtitle="A comprehensive list of technologies and tools I use to bring ideas to life."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SkillCategory
            title="Frontend"
            skills={PORTFOLIO_CONTENT.skills.frontend}
            icon={Code2}
            delay={0.1}
          />
          <SkillCategory
            title="Backend"
            skills={PORTFOLIO_CONTENT.skills.backend}
            icon={Database}
            delay={0.2}
          />
          <SkillCategory
            title="AI / ML"
            skills={PORTFOLIO_CONTENT.skills.ai}
            icon={Brain}
            delay={0.3}
          />
          <SkillCategory
            title="Tools"
            skills={PORTFOLIO_CONTENT.skills.tools}
            icon={Wrench}
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};

export const About = () => {
  return (
    <section id="about" className="py-24 bg-white/[0.02]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start"
          >
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-3xl overflow-hidden border-2 border-indigo-500/30 p-2 bg-[#0a0a1a] relative group shadow-2xl shadow-indigo-500/10">
              <div className="w-full h-full bg-gradient-to-br from-indigo-500/10 to-transparent rounded-2xl flex items-center justify-center transition-all duration-700 group-hover:scale-105 group-hover:bg-indigo-500/20">
                <div className="relative">
                  <svg className="w-24 h-24 md:w-36 md:h-36 text-indigo-400 opacity-60 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
                  </svg>
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-4 border border-dashed border-indigo-500/20 rounded-full"
                  />
                </div>
              </div>
              {/* Decorative accent */}
              <div className="absolute inset-4 border border-white/5 rounded-2xl pointer-events-none" />
            </div>
          </motion.div>

          <div>
            <SectionHeading title="About Me" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6 text-lg text-white/70"
            >
             <p>
  Hi, I’m Chinmayee — a passionate developer focused on creating modern, user-friendly web applications. I enjoy turning ideas into clean, interactive, and meaningful digital experiences.
</p>

<p>
  I’m especially interested in frontend development and AI-powered applications. From smart platforms to real-world problem-solving projects, I love building solutions that are both visually appealing and impactful.
</p>
              
              <div className="grid grid-cols-2 gap-6 pt-6">
                {PORTFOLIO_CONTENT.stats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-3xl font-display font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-white/40">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
