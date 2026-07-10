import { motion } from "motion/react";
import { Send, MapPin, Mail, Phone, ExternalLink, Github, Linkedin } from "lucide-react";
import { PORTFOLIO_CONTENT } from "@/src/constants/content";
import { SectionHeading } from "./About";
import { Card } from "@/src/components/ui/Card";
import { Button } from "@/src/components/ui/Button";

const TimelineItem = ({ item, index }: { item: any; index: number; key?: any }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="relative pl-8 md:pl-0 mb-12 last:mb-0"
  >
    {/* Line */}
    <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-white/10 md:left-1/2 md:-translate-x-1/2" />
    
    {/* Dot */}
    <div className="absolute left-[-5px] top-2 w-3 h-3 rounded-full bg-indigo-500 border-2 border-[#030303] z-10 md:left-1/2 md:-translate-x-1/2" />

    <div className={`md:flex items-center justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
      <div className="md:w-5/12" />
      <div className="md:w-5/12">
        <Card className="p-6 h-full">
          <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">{item.period}</span>
          <h3 className="text-xl font-display font-bold mt-1">{item.role}</h3>
          <p className="text-white/70 font-medium mb-3">{item.company}</p>
          <p className="text-sm text-white/50">{item.description}</p>
        </Card>
      </div>
    </div>
  </motion.div>
);

export const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-white/[0.02]">
      <div className="container mx-auto px-6 text-center md:text-left">
        <SectionHeading
          title="Career Journey"
          subtitle="My professional evolution in the world of technology and design."
        />

        <div className="relative mt-12">
          {PORTFOLIO_CONTENT.experience.map((item, i) => (
            <TimelineItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <SectionHeading
              title="Get In Touch"
              subtitle="Have a project in mind or just want to say hi? Feel free to reach out!"
            />
            
            <div className="space-y-8 mt-12">
              {[
                { icon: Mail, label: "Email", value: PORTFOLIO_CONTENT.email, href: `mailto:${PORTFOLIO_CONTENT.email}` },
                { icon: MapPin, label: "Location", value: PORTFOLIO_CONTENT.location, href: "#" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="flex items-center gap-6 group"
                >
                  <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center border border-white/10 group-hover:border-indigo-500/50 group-hover:bg-indigo-500/10 transition-all">
                    <item.icon className="text-white/50 group-hover:text-indigo-400 transition-colors" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white/40 uppercase tracking-widest">{item.label}</div>
                    <div className="text-lg font-semibold text-white/80 group-hover:text-white transition-colors">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-12 flex gap-4">
               {[
                { icon: Github, href: PORTFOLIO_CONTENT.github },
                { icon: Linkedin, href: PORTFOLIO_CONTENT.linkedin },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl glass border border-white/10 hover:border-indigo-500/50 hover:-translate-y-1 transition-all"
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>

          <Card className="p-8 border-white/5 bg-card-bg">
            <form className="space-y-4">
              <div className="bg-card-bg-light border border-white/5 rounded-lg px-3 py-2">
                <label className="text-[9px] uppercase text-slate-500 font-bold block mb-1">Email</label>
                <input
                  type="email"
                  className="bg-transparent text-sm w-full outline-none placeholder:opacity-30 p-1"
                  placeholder="alex@dev.sh"
                />
              </div>
              <div className="bg-card-bg-light border border-white/5 rounded-lg px-3 py-2">
                <label className="text-[9px] uppercase text-slate-500 font-bold block mb-1">Message</label>
                <textarea
                  className="bg-transparent text-sm w-full outline-none resize-none placeholder:opacity-30 h-24 p-1"
                  placeholder="Let's build something..."
                ></textarea>
              </div>
              <Button className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-[10px] font-bold rounded-lg uppercase tracking-widest border-none h-auto" variant="primary">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};
