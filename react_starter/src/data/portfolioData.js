/**
 * Portfolio Data Configuration
 *
 * This is the heart of your portfolio! All your personal information,
 * projects, and skills are stored here as JavaScript data.
 *
 * By changing data here, your entire portfolio updates automatically! Try it out while the development server is running.
 */

// Import your avatar image
import avatar from "../assets/avatar.png";

// TODO: Add a image for the personal section and project placeholders
export const portfolioData = {
  // Personal Information
  personal: {
    name: "Kaeden Bryer",
    title: "Full Stack Developer",
    // Path to your avatar / headshot image
    // For a placeholder you can use this - https://placehold.co/600x400/34A853/FFFFFF?text=Your+Name
    avatar: avatar,
    bio: "I'm a passionate developer who loves building beautiful, functional web applications. I specialize in modern JavaScript frameworks and creating seamless user experiences.",
    email: "kaedenbrye@gmail.com",
    portfolio: "https://kaedenbryer.com",
    // Social links
    // TODO: Feel free to add more social links if needed
    // Create components similar to those in `src/components/Icons/` & update how they're used in place like `Footer.jsx`, `Header.jsx`, and other places you want to display your social icons
    social: {
      github: "https://github.com/kaeden-bryer",
      linkedin: "https://linkedin.com/in/kaeden-bryer",
      twitter: "https://twitter.com/kaeden-bryer",
    },
  },

  // Skills - Add or remove as needed!
  skills: [
    { name: "React", level: "advanced", category: "frontend" },
    { name: "JavaScript", level: "advanced", category: "language" },
    { name: "TypeScript", level: "advanced", category: "language" },
    { name: "Vue.js", level: "intermediate", category: "language" },
    { name: "Svelte", level: "beginner", category: "language" },
    { name: "Angular", level: "beginner", category: "language" },
    { name: "PHP", level: "intermediate", category: "language" },
    { name: "Python", level: "intermediate", category: "language" },
    { name: "Tailwind CSS", level: "intermediate", category: "frontend" },
    { name: "Node.js", level: "intermediate", category: "backend" },
    { name: "Express.js", level: "intermediate", category: "backend" },
    { name: "Git", level: "intermediate", category: "tools" },
    { name: "REST APIs", level: "intermediate", category: "backend" },
  ],

  // Projects - Each project becomes a card!
  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack online store with cart functionality, payment integration, and admin dashboard.",
      image: "/placeholder-project.jpg",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "https://github.com/yourusername/ecommerce",
      liveUrl: "https://your-ecommerce-demo.com",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task tracker with real-time updates, drag-and-drop interface, and team features.",
      image: "/placeholder-project.jpg",
      tags: ["React", "Firebase", "Tailwind CSS"],
      githubUrl: "https://github.com/yourusername/task-app",
      liveUrl: "https://your-task-app.com",
      featured: true,
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "Beautiful weather app with 7-day forecasts, location search, and animated weather icons.",
      image: "/placeholder-project.jpg",
      tags: ["React", "OpenWeather API", "CSS"],
      githubUrl: "https://github.com/yourusername/weather-app",
      liveUrl: "https://your-weather-app.com",
      featured: false,
    },
  ],
};

export default portfolioData;
