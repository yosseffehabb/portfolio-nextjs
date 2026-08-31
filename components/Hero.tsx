"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Button } from "../components/ui/button";
import Image from "next/image";
import { useContactModal } from "@/contexts/ContactModalContext";

function Hero() {
  const { openModal } = useContactModal();
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-charcoal pt-16">
      <div className="absolute inset-0">
        <div className="to-sage-100/20 absolute inset-0 bg-linear-to-br from-primary/5" />
        {/* Decorative elements */}
        <div className="absolute right-0 top-1/4 h-[500px] w-[500px] -translate-y-1/2">
          <div className="absolute inset-0 animate-pulse rounded-full bg-wine/20 blur-3xl" />
          <div className="absolute inset-0 animate-pulse rounded-full bg-forestgreen/10 blur-2xl delay-300" />
        </div>
        <div className="absolute bottom-1/4 left-0 h-[300px] w-[300px]">
          <div className="absolute inset-0 animate-pulse rounded-full bg-wine/20 blur-2xl delay-700" />
        </div>
      </div>

      <div className="container relative mx-auto flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          >
            {" "}
            <h1 className="mb-8 w-full text-5xl font-bold tracking-tight text-silver sm:text-6xl lg:text-7xl">
              {/* <span className="text-silver relative z-10 pr-5">Withyou</span>
              ,we will always be with you */}
              Hello , im{" "}
              <span className="relative z-10 pr-5 text-wine">yosseffehabb</span>{" "}
              <span className="">FRONTEND</span> Web Developer
            </h1>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="group w-full bg-wine transition-all duration-300 hover:bg-forestgreen sm:w-auto"
                onClick={openModal}
              >
                Contact Now
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </motion.span>
              </Button>
              <Button
                size="lg"
                className="group box-border w-full border border-silver bg-inherit transition-all duration-300 hover:bg-silver hover:text-wine sm:w-auto"
                asChild
              >
                <a href="#projects">
                  My Projects
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowUpRight className="ml-1 h-4 w-4" />
                  </motion.span>
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="hidden lg:block lg:w-1/2"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-xl bg-wine/20 blur-lg"></div>
            <Image
              src="/imgs/me.jpeg"
              alt="Yossef Fehab"
              className="relative z-10 h-[600px] w-full rounded-lg border-2 border-wine/50 object-cover shadow-xl"
              height={600}
              width={600}
            />
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-forestgreen/20 blur-xl"></div>
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-wine/20 blur-xl"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
