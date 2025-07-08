"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website – Personal Branding Platform",
    description: "Developed a dynamic, responsive personal portfolio website to showcase projects, skills, and experience. Built with React.js and Next.js for fast performance, SEO optimization, and smooth routing. Designed an intuitive UI highlighting professional achievements and enabling contact through integrated forms. Stack used – React.js, Next.js, Visual Studio Code",
    image: "/images/projects/P.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Ankit-khandelwal04/Portfolio",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "CSI-KKWIEER – Role-Based Access Website",
    description: "Full-stack MERN app with role-based access for admins and users, dynamic event/gallery management and live event registration, data visualization dashboards and fully responsive design. Stack: ReactJs, NodeJs, ExpressJs, MongoDB",
    image: "/images/projects/C.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Ankit-khandelwal04/CSI-KKWIEER-Committee-Portal",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "NexusRoam",
    description: "NexusRoam is a city exploration platform that helps tourists and locals discover cities with ease. From hotels 🏨 and restaurants 🍽️ to tourist attractions 🗺️ and transport tips 🚖 – it's your go-to city guide! Tech Stack: Frontend: React + Vite (Developed using VS Code), Backend: Java, JDBC ODBC, J2EE, AJAX, XML (Developed using IntelliJ IDEA), Database: MySQL",
    image: "/images/projects/N.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Ankit-khandelwal04/NexusRoam",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
