"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [

    {
      id: 1,
      title: "Angular News Application",
      description: "Web based news application built using Angular and NewsAPI",
      image: "/assets/projects/1.png",
      tag: ["All", "Web"],
      gitUrl: "www.github.com/EvansAbraham/my-news-app",
      previewUrl: "/",
    },
    {
      id: 2,
      title: "Event Organizing Website",
      description: "Event Organizing web application built using NextJS framework Clerk and Stripe",
      image: "/assets/projects/2.png",
      tag: ["All", "Web"],
      gitUrl: "www.github.com/EvansAbraham/cloudus",
      previewUrl: "/",
    },
    {
      id: 3,
      title: "Tags Block",
      description: "Saas Website Builder that is used for  creating custom websites without coding.",
      image: "/assets/projects/3.png",
      tag: ["All", "Web"],
      gitUrl: "www.github.com/EvansAbraham/tagsblock",
      previewUrl: "/",
    },
    {
      id: 4,
      title: "Stroke Prediction model using R",
      description: "Machine Leaning model built using R to predict stroke.",
      image: "/assets/projects/4.png",
      tag: ["All", "DS/DA"],
      gitUrl: "www.github.com/EvansAbraham/R-Notebooks/blob/main/Stroke%20Prediction%20Model%20using%20R/Stroke%20prediction%20model%20using%20R.pdf",
      previewUrl: "/",
    },
    {
      id: 5,
      title: "Time Series Analysis of Power Consumption",
      description: "Performed Time Series Analysis of Power Consumption in India (2019 - 2020) using Python",
      image: "/assets/projects/5.png",
      tag: ["All", "DS/DA"],
      gitUrl: "www.github.com/EvansAbraham/DataScience-Projects/blob/main/Time%20Series%20Forecasting/time_series_forecasting.ipynb",
      previewUrl: "/",
    },
]
const ProjectSection = () => {
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
    <section>
      <h2 id='projects' className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">My Projects</h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="DS/DA"
          isSelected={tag === "DS/DA"}
        />
        </div>
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
  )
}

export default ProjectSection
