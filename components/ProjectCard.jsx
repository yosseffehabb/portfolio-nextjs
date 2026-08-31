import { Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project }) {
  const image = project.images?.[0];

  return (
    <div className="group relative flex flex-col h-full rounded-xl overflow-hidden bg-slategray/50 border border-forestgreen/50 hover:border-wine/70 transition-colors duration-300">
      {/* ── IMAGE SECTION ───────────────────────────────────────────────── */}
      <div className="relative w-full" style={{ aspectRatio: "16 / 10" }}>
        {image ? (
          <div className="w-full h-full bg-charcoal">
            <Image
              src={image}
              alt={project.title}
              fill
              sizes="(max-width: 640px) 78vw, (max-width: 1024px) 40vw, 300px"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-slategray/60">
            <span className="text-silver/50 text-xs">No preview</span>
          </div>
        )}

        {project.featured && (
          <span className="absolute top-2 left-2 sm:top-3 sm:left-3 z-10 bg-wine text-silver text-[9px] sm:text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-md shadow">
            Featured
          </span>
        )}
      </div>

      {/* ── BODY ────────────────────────────────────────────────────────── */}
      <div className="flex flex-col flex-1 p-3 sm:p-4 gap-2 ">
        <h3 className="font-bold text-sm sm:text-base leading-tight text-silver">
          {project.title}
        </h3>
        <p className="text-xs sm:text-sm text-silver/70 leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {project.technologies?.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-1">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-[10px] sm:text-[11px] font-medium px-2 py-0.5 rounded-md bg-slategray/70 border border-wine/40 text-silver"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <Link
          href={`/projects/${project.id}`}
          className="mt-2 flex items-center justify-center gap-1.5 bg-wine text-silver text-xs sm:text-sm font-semibold px-3 py-2 rounded-md hover:bg-forestgreen hover:text-silver transition-colors"
        >
          <Eye className="w-4 h-4" />
          View Project
        </Link>
      </div>
    </div>
  );
}
