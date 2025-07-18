"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion } from "framer-motion";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="flex flex-wrap gap-8">
        <div>
          <h4 className="font-semibold mb-2">Languages</h4>
          <ul className="list-disc pl-2">
            <li>C</li>
            <li>C++</li>
            <li>Java</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>Python</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Technologies/Frameworks</h4>
          <ul className="list-disc pl-2">
            <li>React.js</li>
            <li>Node.js</li>
            <li>MySQL</li>
            <li>SpringBoot</li>
            <li>Next.js</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Tools</h4>
          <ul className="list-disc pl-2">
            <li>VS Code</li>
            <li>IntelliJIDEA</li>
            <li>Git</li>
            <li>GitHub</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2 space-y-4">
        <li>
          <div className="flex flex-col">
            <span>Ryan International School, Nashik, Maharashtra</span>
            <span className="mt-1">
              <span>April 2010 – March 2020</span>
              <span className="ml-7">84.64%</span>
            </span>
          </div>
        </li>
        <li>
          <div className="flex flex-col">
            <span>Sri Chaitanya Junior College, Hyderabad, Telanga</span>
            <span className="mt-1">
              <span>June 2020 – April 2022</span>
              <span className="ml-7">92.00%</span>
            </span>
          </div>
        </li>
        <li>
          <div className="flex flex-col">
            <span>K. K. Wagh Institute of Engineering Education and Reseach, Nashik, Maharashtra</span>
            <span className="mt-1">
              <span>July 2023 – Present</span>
              <span className="ml-10">CGPA: 9</span>
            </span>
          </div>
        </li>
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
    <section className="w-full min-h-screen bg-black text-white" id="about">
      <div className="w-full pt-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mx-auto md:grid md:grid-cols-2 gap-8 items-center py-16 px-4 sm:px-8 xl:px-16 max-w-[100%]"
        >
          <Image src="/images/about-image.png" width={500} height={500} alt="image" />
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-base lg:text-lg">
              I am a self-driven tech enthusiast passionate about web development, problem solving, and building real-world solutions.
              I enjoy exploring AI and have strong skills in project management, data structures, and algorithms.
              I have experience working with C, C++, Java, Python, HTML, CSS, JavaScript, React, Next.js, Node.js, MySQL and Git. 
              I am a quick learner and I am always looking to expand my knowledge and skill set. I am a team player and
              I am excited to work with others to create amazing applications.
            </p>
            <div className="flex flex-row justify-start mt-8">
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
            </div>
            <div className="mt-8">
              {TAB_DATA.find((t) => t.id === tab).content}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;