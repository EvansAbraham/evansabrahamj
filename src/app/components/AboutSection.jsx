"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Python, Django, Flask</li>
        <li>JavaScript, Node.js, React, Angular</li>
        <li>MySQL, MongoDB</li>
        <li>Postman</li>
        <li>SDLC</li>
        <li>Agile Methodology</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>SSM Institute of Engineering and Technology</li>
        <li>Keren Matriculation Higher Secondary School</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Data Science Using Python</li>
        <li>Angular Course Completion Certification</li>
        <li>Node Js Course Completion Certification</li>
        <li>MongoDB Essentials Course Completion Certification</li>
        <li>Postman API Fundamentals Student Expert certification</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/assets/AboutImg.jpeg"
          alt="Image"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="mb-4 text-4xl font-bold text-white">About Me</h2>
          <p className="text-base lg:text-lg">
            Aspiring Software Developer eager to contribute to cutting-edge
            software solutions. Proficient in Python and JavaScript, I am
            committed to crafting efficient and functional software. With a keen
            eye for detail and problem-solving skills, I look forward to
            embracing challenges and collaborating effectively to deliver
            high-quality, innovative, and scalable software products.
          </p>
          <div className="mt-8 flex flex-row justify-start">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
