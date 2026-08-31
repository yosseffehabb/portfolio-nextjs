// app/projects/[id]/page.jsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { getProjectById } from "@/lib/projects";

export default function ProjectPage() {
  const params = useParams();
  const project = getProjectById(params.id);
  const [active, setActive] = useState(0);

  if (!project) return notFound();

  const images = project.images || [];
  const hasImages = images.length > 0;

  const prev = () => setActive((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setActive((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="min-h-screen bg-charcoal pt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        {/* ── BACK LINK ────────────────────────────────────────────────── */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1.5 text-silver/70 hover:text-silver text-xs sm:text-sm mb-4 sm:mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to projects
        </Link>

        {/* ── TWO-COLUMN LAYOUT ON LARGE SCREENS ──────────────────────── */}
        <div className="lg:grid lg:grid-cols-5 lg:gap-8">
          {/* ── GALLERY ────────────────────────────────────────────────── */}
          <div className="lg:col-span-3">
            {hasImages ? (
              <div className="w-full">
                <div
                  className="relative w-full rounded-xl overflow-hidden border border-forestgreen/40 bg-shadowteal/40 shadow-lg shadow-black/20"
                  style={{ aspectRatio: "16 / 10" }}
                >
                  <Image
                    src={images[active]}
                    alt={`${project.title} screenshot ${active + 1}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover"
                    priority
                  />

                  {images.length > 1 && (
                    <>
                      <button
                        onClick={prev}
                        aria-label="Previous image"
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-wine over:bg-wine text-silver rounded-full p-2 sm:p-2.5 transition-colors active:scale-95"
                      >
                        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                      </button>
                      <button
                        onClick={next}
                        aria-label="Next image"
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-wine hover:bg-wine text-silver rounded-full p-2 sm:p-2.5 transition-colors active:scale-95"
                      >
                        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                      </button>

                      <span className="absolute bottom-2 right-2 bg-charcoal/70 backdrop-blur-sm text-silver text-[10px] sm:text-xs px-2 py-0.5 rounded-md">
                        {active + 1} / {images.length}
                      </span>
                    </>
                  )}
                </div>

                {images.length > 1 && (
                  <div className="flex gap-2  overflow-x-auto scrollbar-hide pb-1 -mx-1  px-1 mt-10 mb-16">
                    {images.map((img, i) => (
                      <button
                        key={img}
                        onClick={() => setActive(i)}
                        aria-label={`View screenshot ${i + 1}`}
                        className={`relative shrink-0 w-16 h-11 sm:w-20 sm:h-14 rounded-md overflow-hidden border-2 transition-colors ${
                          i === active
                            ? "border-wine"
                            : "border-forestgreen/30 hover:border-forestgreen/70"
                        }`}
                      >
                        <Image
                          src={img}
                          alt={`${project.title} thumbnail ${i + 1}`}
                          fill
                          sizes="100px"
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div className="w-full aspect-video rounded-xl bg-slategray/60 flex items-center justify-center">
                <span className="text-silver/50 text-sm">No preview</span>
              </div>
            )}
          </div>

          {/* ── CONTENT ──────────────────────────────────────────────── */}
          <div className="lg:col-span-2 mt-6 lg:mt-0 flex flex-col gap-4 ">
            <div className="flex items-start justify-between gap-3 flex-wrap">
              <h1 className="text-2xl sm:text-3xl lg:text-2xl xl:text-3xl font-bold text-silver leading-tight pt-10">
                {project.title}
              </h1>
              {project.featured && (
                <span className="bg-wine text-silver text-[10px] sm:text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-md shadow shrink-0">
                  Featured
                </span>
              )}
            </div>

            <p className="text-sm sm:text-base text-silver/70 leading-relaxed">
              {project.longDescription || project.description}
            </p>

            {project.technologies?.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] sm:text-xs font-medium px-3 py-1.5 rounded-md bg-wine border border-forestgreen/40 text-silver"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

            {/* ── ACTIONS ──────────────────────────────────────────────── */}
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row flex-wrap gap-3 mt-2">
              {project.liveUrl && project.liveUrl !== "#" && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 bg-forestgreen text-silver text-sm font-semibold px-4 py-2.5 rounded-md hover:bg-wine transition-colors w-full sm:w-auto"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              )}
              {project.githubUrl && project.githubUrl !== "#" && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 bg-slategray/70 border border-forestgreen/40 text-silver text-sm font-semibold px-4 py-2.5 rounded-md hover:border-wine/70 transition-colors w-full sm:w-auto"
                >
                  <Github className="w-4 h-4" />
                  Source Code
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
