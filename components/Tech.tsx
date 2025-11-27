"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

interface TechItem {
  name: string;
  icon: string;
}

const techStack: TechItem[] = [
  { name: "HTML5", icon: "logos:html-5" },
  { name: "CSS3", icon: "logos:css-3" },
  { name: "JavaScript", icon: "logos:javascript" },
  { name: "React", icon: "logos:react" },
  { name: "TypeScript", icon: "logos:typescript-icon" },
  { name: "Next.js", icon: "logos:nextjs-icon" },
  { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
  { name: "Git", icon: "logos:git-icon" },
  { name: "GitHub", icon: "logos:github-icon" },
  { name: "VS Code", icon: "logos:visual-studio-code" },
  { name: "Figma", icon: "logos:figma" },
  { name: "supabase", icon: "logos:supabase" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 12,
    },
  },
};

const Tech: React.FC = () => {
  return (
    <section
      className="flex items-center justify-center bg-charcoal py-20 md:py-28"
      id="tech"
    >
      <div className="container px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-wine md:text-5xl lg:text-6xl">
            Tech Stack
          </h2>
          <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-wine"></div>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-silver md:text-xl">
            The powerful technologies and tools that drive my development
            workflow
          </p>
        </motion.div>

        {/* Tech Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto grid max-w-7xl grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
        >
          {techStack.map((tech) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              whileHover={{
                y: -12,
                scale: 1.08,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="group"
            >
              <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-wine/20 bg-slategray/50 p-6 backdrop-blur-md transition-all duration-500 hover:border-forestgreen/60 hover:bg-slategray/80 hover:shadow-2xl hover:shadow-forestgreen/20">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="mb-4 flex items-center justify-center rounded-full bg-wine/10 p-4 transition-all duration-500 group-hover:bg-forestgreen/20 group-hover:shadow-lg"
                >
                  <Icon
                    icon={tech.icon}
                    className="h-12 w-12 text-wine transition-all duration-500 group-hover:scale-125 group-hover:text-forestgreen md:h-14 md:w-14"
                  />
                </motion.div>

                <p className="text-center text-sm font-semibold text-silver transition-colors duration-300 group-hover:text-forestgreen md:text-base">
                  {tech.name}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-sm italic text-silver/60 md:text-base">
            Always learning • Exploring new tools • Staying up to date with
            modern web technologies
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Tech;
