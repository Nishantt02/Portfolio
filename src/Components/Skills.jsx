// src/components/Skills/Skills.jsx
import React from "react";
import Tilt from "react-parallax-tilt";
import { SkillsInfo } from "../Constant";

const Skills = () => (
  <section
    id="skills"
    className="py-16 px-[8vw] font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
      <p className="text-gray-400 mt-4 text-lg font-semibold">
        A collection of my technical skills and expertise honed through various projects and experiences.
      </p>
    </div>

    {/* Skill Categories Grid: 2 columns on md+ screens, 1 on mobile */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="bg-gray-900 backdrop-blur-md px-6 py-6 rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-300 mb-6 text-center">
            {category.title}
          </h3>

          <Tilt
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center justify-center text-center border-2 border-gray-700 bg-gray-800 rounded-2xl px-3 py-4 hover:border-[#8245ec] transition-all"
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-10 h-10 mb-2 object-contain"
                  />
                  <span className="text-gray-200 text-sm font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </Tilt>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
