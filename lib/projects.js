// lib/projects.js
export const projects = [
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

// Optional helper — handy for the detail page
export function getProjectById(id) {
  return projects.find((p) => p.id === id);
}
