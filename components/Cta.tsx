"use client";

import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import { useContactModal } from "@/contexts/ContactModalContext";

const Cta: React.FC = () => {
  const { openModal } = useContactModal();
  return (
    <section
      className="bg-charcoal py-20 md:py-28 overflow-hidden"
      id="contact"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative mx-auto max-w-4xl text-center"
        >
          {/* Background Glow Effect */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-wine/10 blur-3xl" />
          </div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-6 text-4xl font-bold tracking-tight text-wine sm:text-5xl md:text-6xl"
          >
            Let&apos;s Build Something Amazing
          </motion.h2>

          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="mx-auto mb-8 h-1 w-32 origin-center rounded-full bg-gradient-to-r from-transparent via-wine to-transparent"
          />

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-silver md:text-xl"
          >
            I&apos;m currently open to new opportunities and exciting projects.
            Whether you have a question or just want to say hi — my inbox is
            always open.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center"
          >
            {/* Download CV Button */}
            <motion.a
              href="/YOSSEF-EHAB-MOHAMED-FlowCV-Resume-20251126.pdf"
              download="YOSSEF-EHAB-MOHAMED-Resume.pdf"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(190, 24, 93, 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="group inline-flex items-center gap-3 rounded-xl bg-wine px-8 py-5 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:bg-forestgreen hover:shadow-2xl hover:shadow-forestgreen/30"
            >
              <Download
                size={22}
                className="transition-transform group-hover:translate-y-0.5"
              />
              Download CV
              <span className="ml-2 transition-transform group-hover:translate-x-1">
                <ArrowRight size={18} />
              </span>
            </motion.a>

            {/* Contact Me Button */}
            <motion.button
              onClick={openModal}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 rounded-xl border-2 border-wine/50 bg-transparent px-8 py-5 text-lg font-bold text-wine transition-all duration-300 hover:border-wine hover:bg-wine/10 hover:text-white"
            >
              Get In Touch
              <ArrowRight
                size={20}
                className="transition-transform group-hover:translate-x-1"
              />
            </motion.button>
          </motion.div>

          {/* Trust Indicator */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-sm text-silver/60"
          >
            Available for freelance • Full-time • Collaboration
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Cta;
