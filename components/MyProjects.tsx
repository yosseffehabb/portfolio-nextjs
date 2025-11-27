"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  images: string[];
  featured?: boolean;
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "Medical Health Management App",
    description:
      "Comprehensive web and mobile application for health management, specifically for Virus C patients.",
    longDescription:
      "A full-stack medical application featuring AI integration, secure file uploads, calendar system, and intelligent chatbot for health guidance. Built with modern technologies to provide users with comprehensive health management tools.",
    technologies: [
      "React",
      "Node.js",
      "AI Integration",
      "mySQL",
      "Mobile Development",
    ],
    images: [
      "/imgs/withu/landing.PNG",
      "/imgs/withu/login.PNG",
      "/imgs/withu/signup.PNG",
      "/imgs/withu/dashboard.PNG",
      "/imgs/withu/submit.PNG",
      "/imgs/withu/calendar.PNG",
      "/imgs/withu/profile.PNG",
      "/imgs/withu/chatbot.PNG",
      "/imgs/withu/stats.PNG",
    ],
    featured: true,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "2",
    title: "WorldWise",
    description:
      "Interactive travel tracking app that maps your journeys across the world.",
    longDescription:
      "WorldWise is a web application designed to help travelers log and visualize their adventures on an interactive world map. Users can record cities they've visited, add travel dates, and include personal notes about each location.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Leaflet.js"],
    images: [
      "/imgs/worldwise/Capture1.PNG",
      "/imgs/worldwise/Capture2.PNG",
      "/imgs/worldwise/Capture3.PNG",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "3",
    title: "Popcorn",
    description:
      "Interactive movie tracking app with search, rating, and watchlist management.",
    longDescription:
      "A dynamic movie discovery and tracking platform built using React. Features include real-time search, detailed movie information display, user rating functionality, and personal watchlist management with runtime statistics.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "OMDb API"],
    images: [
      "/imgs/Popcorn/Capture.PNG",
      "/imgs/Popcorn/Capture1.PNG",
      "/imgs/Popcorn/Capture2.PNG",
      "/imgs/Popcorn/Capture3.PNG",
    ],
    featured: true,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "4",
    title: "React Quiz App",
    description:
      "Challenging quiz application with timer, scoring, and high score tracking.",
    longDescription:
      "A responsive and engaging quiz app built with React. Features multiple difficulty levels, timed questions, progress tracking, and persistent high scores.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Zustand"],
    images: [
      "/imgs/ReactQuiz/Capture.PNG",
      "/imgs/ReactQuiz/Capture1.PNG",
      "/imgs/ReactQuiz/Capture2.PNG",
      "/imgs/ReactQuiz/Capture3.PNG",
      "/imgs/ReactQuiz/Capture4.PNG",
    ],
    featured: true,
    liveUrl: "#",
    githubUrl: "#",
  },
];

const MyProjects: React.FC = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const currentProject = projects[currentProjectIndex];
  const imageCount = currentProject.images.length;

  // Declare all navigation functions FIRST
  const goToProject = useCallback((index: number) => {
    setCurrentProjectIndex(index);
    setCurrentImageIndex(0);
  }, []);

  const goToPreviousProject = useCallback(() => {
    setCurrentProjectIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
    setCurrentImageIndex(0);
  }, []);

  const goToNextProject = useCallback(() => {
    setCurrentProjectIndex((prev) =>
      prev === projects.length - 1 ? 0 : prev + 1
    );
    setCurrentImageIndex(0);
  }, []);

  const goToPreviousImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev === 0 ? imageCount - 1 : prev - 1));
  }, [imageCount]);

  const goToNextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev === imageCount - 1 ? 0 : prev + 1));
  }, [imageCount]);

  // Touch swipe handler
  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      const touchDown = e.touches[0].clientX;

      const handleTouchMove = (moveEvent: TouchEvent) => {
        const diff = touchDown - moveEvent.touches[0].clientX;
        if (Math.abs(diff) > 50) {
          if (diff > 0) goToNextImage();
          else goToPreviousImage();
        }
      };

      document.addEventListener("touchmove", handleTouchMove, { once: true });
      document.addEventListener(
        "touchend",
        () => document.removeEventListener("touchmove", handleTouchMove),
        { once: true }
      );
    },
    [goToNextImage, goToPreviousImage]
  );

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.shiftKey ? goToPreviousProject() : goToPreviousImage();
      }
      if (e.key === "ArrowRight") {
        e.shiftKey ? goToNextProject() : goToNextImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToPreviousProject, goToNextProject, goToPreviousImage, goToNextImage]);

  // Preload images
  useEffect(() => {
    currentProject.images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [currentProject.images]);

  return (
    <section className="bg-charcoal py-20" id="projects">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-5xl font-bold text-wine lg:text-6xl">
            Featured Projects
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-silver">
            A showcase of my recent work, featuring innovative solutions and
            cutting-edge technologies.
          </p>
          <div className="mx-auto mt-8 h-1 w-20 rounded-full bg-wine" />
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-slate-gray/90 shadow-elegant hover:shadow-glow relative overflow-hidden rounded-2xl border border-wine/30 backdrop-blur-sm">
            <div className="bg-gradient-card absolute inset-0 opacity-40" />

            {/* Top Navigation */}
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-wine/20 px-6 py-5">
              <div className="flex items-center gap-4">
                <h3 className="text-lg font-semibold text-silver">Projects</h3>
                <div className="flex space-x-2">
                  {projects.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goToProject(i)}
                      className={`h-2 w-8 rounded-full transition-all ${
                        i === currentProjectIndex
                          ? "bg-wine scale-110"
                          : "bg-silver/30 hover:bg-silver/60"
                      }`}
                      aria-label={`Project ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={goToPreviousProject}
                  className="rounded-full bg-wine/20 p-2.5 text-wine hover:scale-110 hover:bg-wine/30 transition"
                  aria-label="Previous project"
                >
                  <ChevronLeft size={22} />
                </button>
                <span className="text-sm font-medium text-silver/80">
                  {currentProjectIndex + 1} / {projects.length}
                </span>
                <button
                  onClick={goToNextProject}
                  className="rounded-full bg-wine/20 p-2.5 text-wine hover:scale-110 hover:bg-wine/30 transition"
                  aria-label="Next project"
                >
                  <ChevronRight size={22} />
                </button>
              </div>
            </div>

            {/* Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject.id}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 p-6 lg:p-10"
              >
                <div className="grid gap-10 lg:grid-cols-2">
                  {/* Image Carousel */}
                  <div
                    className="relative group cursor-grab active:cursor-grabbing"
                    onTouchStart={handleTouchStart}
                  >
                    <div className="relative overflow-hidden rounded-2xl bg-charcoal/80 shadow-2xl">
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={currentImageIndex}
                          src={currentProject.images[currentImageIndex]}
                          alt={`${currentProject.title} - Screenshot ${
                            currentImageIndex + 1
                          }`}
                          className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-xl"
                          initial={{ opacity: 0, scale: 1.05 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.4 }}
                        />
                      </AnimatePresence>

                      {imageCount > 1 && (
                        <>
                          <button
                            onClick={goToPreviousImage}
                            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-wine/80 p-3 text-white opacity-0 group-hover:opacity-100 transition hover:scale-110"
                            aria-label="Previous image"
                          >
                            <ChevronLeft size={24} />
                          </button>
                          <button
                            onClick={goToNextImage}
                            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-wine/80 p-3 text-white opacity-0 group-hover:opacity-100 transition hover:scale-110"
                            aria-label="Next image"
                          >
                            <ChevronRight size={24} />
                          </button>

                          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                            {currentProject.images.map((_, i) => (
                              <button
                                key={i}
                                onClick={() => setCurrentImageIndex(i)}
                                className={`w-2 h-2 rounded-full transition-all ${
                                  i === currentImageIndex
                                    ? "bg-wine w-8"
                                    : "bg-white/50 hover:bg-white/80"
                                }`}
                                aria-label={`Image ${i + 1}`}
                              />
                            ))}
                          </div>

                          <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm backdrop-blur">
                            {currentImageIndex + 1} / {imageCount}
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="flex flex-col justify-center space-y-6">
                    <div>
                      <h2 className="text-3xl sm:text-4xl font-bold text-wine mb-3">
                        {currentProject.title}
                      </h2>
                      <p className="text-lg text-silver/80 font-medium">
                        {currentProject.description}
                      </p>
                    </div>

                    <div className="h-1 w-20 bg-wine rounded-full" />

                    <p className="text-base sm:text-lg leading-relaxed text-silver">
                      {currentProject.longDescription}
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {currentProject.technologies.map((tech, i) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className="px-4 py-2 bg-wine/20 border border-wine/30 text-silver rounded-full text-sm font-medium hover:bg-forestgreen hover:text-white transition"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-4 pt-4">
                      {currentProject.liveUrl &&
                        currentProject.liveUrl !== "#" && (
                          <a
                            href={currentProject.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-wine hover:bg-forestgreen text-white font-medium px-6 py-3 rounded-lg transition hover:scale-105"
                          >
                            <ExternalLink size={18} />
                            View Live
                          </a>
                        )}
                      {currentProject.githubUrl &&
                        currentProject.githubUrl !== "#" && (
                          <a
                            href={currentProject.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 border border-wine/50 text-wine px-6 py-3 rounded-lg font-medium hover:bg-wine hover:text-white transition hover:scale-105"
                          >
                            <Github size={18} />
                            Source Code
                          </a>
                        )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MyProjects;
