import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/projects";
import { motion, AnimatePresence } from "framer-motion";

function MyProjectsV2() {
  return (
    <div className="bg-charcoal py-3.5" id="projects">
      {/* Header */}
      <div
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
      </div>
      <div
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide items-stretch px-4 sm:px-6 lg:justify-center "
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="snap-center shrink-0 w-[78vw] xs:w-[68vw] sm:w-[280px] md:w-[300px]"
          >
            <ProjectCard project={project} />
          </div>
        ))}
        {/* trailing spacer so the last card can snap fully into view */}
        <div className="shrink-0 w-1 sm:hidden" aria-hidden="true" />
      </div>
    </div>
  );
}

export default MyProjectsV2;
