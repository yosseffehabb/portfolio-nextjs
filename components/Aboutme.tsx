"use client";

import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section
      className="flex min-h-screen items-center justify-center bg-charcoal py-20"
      id="about"
    >
      <div className="container max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h1 className="mb-4 text-4xl font-bold text-wine">About Me</h1>
            <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-wine"></div>
          </motion.div>

          {/* Main Content Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-slate-gray/90 shadow-elegant hover:shadow-glow relative overflow-hidden rounded-2xl border border-wine/30 bg-slategray shadow-lg backdrop-blur-sm transition-all duration-500"
          >
            <div className="bg-gradient-subtle absolute inset-0 opacity-50" />

            <div className="relative z-10 flex flex-col items-center gap-8 p-8 lg:flex-row lg:p-12">
              {/* Profile Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="shrink-0"
              >
                <div className="group relative">
                  <div className="bg-gradient-primary absolute -inset-1 rounded-2xl opacity-75 blur transition duration-300 group-hover:opacity-100" />
                  <img
                    src="/imgs/me2.jpeg"
                    alt="Yossef Ehab - Frontend Developer"
                    className="relative h-80 w-64 rounded-xl object-cover shadow-lg transition-transform duration-300 group-hover:scale-105 lg:h-96 lg:w-72"
                  />
                </div>
              </motion.div>

              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex-1 text-left"
              >
                <div className="space-y-6">
                  <div>
                    <h2 className="mb-2 text-3xl font-bold text-wine">
                      Yossef Ehab
                    </h2>
                    <p className="text-xl font-medium text-silver/80">
                      Frontend Developer & Tech Enthusiast
                    </p>
                  </div>

                  <div className="h-1 w-16 rounded-full bg-wine" />

                  <div className="space-y-4 leading-relaxed text-silver">
                    <p className="text-lg">
                      I&apos;m a 22-year-old passionate developer who graduated
                      in 2025 after beginning my journey in 2021. My expertise
                      lies in creating beautiful, functional web experiences
                      using modern technologies.
                    </p>

                    <p className="text-lg">
                      I specialize in{" "}
                      <span className="font-semibold text-wine">
                        frontend development
                      </span>{" "}
                      with hands-on experience in Nextjs, React, JavaScript,
                      typeScript, Tailwind CSS, and subabas. I&apos;ve also
                      explored backend technologies like Node.js to build
                      full-stack solutions.
                    </p>

                    <p className="text-lg">
                      One of my proudest achievements is developing a
                      comprehensive medical web and mobile application designed
                      to help users manage their health, particularly related to
                      Virus C. This project features
                      <span className="font-semibold text-wine">
                        {" "}
                        AI integration
                      </span>
                      , secure file uploads, calendar systems, and an
                      intelligent chatbot for health guidance.
                    </p>

                    <p className="text-lg">
                      I&apos;m driven by the opportunity to create{" "}
                      <span className="font-semibold text-wine">
                        real-world solutions
                      </span>{" "}
                      that seamlessly blend usability, clean design, and smart
                      technology to make a meaningful impact.
                    </p>
                  </div>

                  {/* Skills Tags */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap gap-3 pt-4"
                  >
                    {[
                      "Nextjs",
                      "React",
                      "JavaScript",
                      "typeScript",
                      "Tailwind CSS",
                      "API integration",
                      "AI Integration",
                    ].map((skill, index) => (
                      <span
                        key={skill}
                        className="rounded-full border border-wine/30 bg-wine/20 px-4 py-2 text-sm font-medium text-silver transition-all duration-300 hover:bg-forestgreen hover:text-white"
                      >
                        {skill}
                      </span>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
