"use client";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaAngular,
  FaPython,
  FaJava,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

//about data

const about = {
  title: "About Me",
  description:
    "A passionate software developer with over 4 years of experience, I excel in creating dynamic and efficient solutions. With a strong foundation in both frontend and backend technologies, I am committed to continuous learning and innovation. I am bilingual, fluent in Spanish and English, and always open to new freelance opportunities.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Carlos Alvarado",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+51 910 710 130)",
    },
    {
      fieldName: "Experience",
      fieldValue: "+4 Years",
    },
    {
      fieldName: "Email",
      fieldValue: "carlos.alvarado78@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "Spanish, English",
    },
  ],
};
// Experience Data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "Throughout my career, I have had the opportunity to work in a variety of roles and projects that have strengthened my technical skills and my ability to adapt to new challenges. Here's a look at some of the key roles I've held: ",
  items: [
    {
      company: "UVP",
      position: "Full Stack Developer, Mobile Developer",
      duration: "December 2023- May 2024",
      description:
        "At UVP, I worked on web and mobile application development, using the latest technologies and industry practices to create robust and scalable solutions.",
    },
    {
      company: "E-commerce Startup",
      position: "Freelance Web Developer",
      duration: "2022- 2023",
    },
    {
      company: "Tech Academy",
      position: "Teaching Assistant",
      duration: "2021-2022",
    },
  ],
};

// Education Data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "A comprehensive journey through various educational experiences, from specialized diplomas and professional courses to extensive bootcamps. Each step has equipped me with the knowledge and skills essential for excelling in the tech industry. ",
  items: [
    {
      institution: "Tech School",
      degree: "Diploma in SQL",
      duration: "2023",
    },
    {
      institution: "Programming Course",
      degree: "Frontend Developer",
      duration: "2023",
    },
    {
      institution: "Online Course Platform",
      degree: "Full Stack Web Developer Bootcamp",
      duration: "2022",
    },
    {
      institution: "IDAT",
      degree: "Computer Cience",
      duration: "2021",
    },
    {
      institution: "SENATI",
      degree: "Software Development",
      duration: "2020",
    },
    {
      institution: "Tech Institute",
      degree: "Computer Science",
      duration: "December 2013",
    },
  ],
};

// Skills Data
const skills = {
  title: "My Skills",
  description:
    "A diverse set of skills spanning front-end and back-end technologies. From crafting responsive web interfaces with HTML5 and CSS3 to building robust applications with JavaScript frameworks and server-side development, my expertise covers all aspects of modern web development.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "Css 3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaNodeJs />,
      name: "Nodejs",
    },
    {
      icon: <FaReact />,
      name: "Reactjs",
    },
    {
      icon: <FaAngular />,
      name: "Angular",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Talwind.css",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* doc */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* doc */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px] ">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>

                {/* Separador */}
                <div className="border-t border-b-2 border-accent mx-auto xl:mx-0 w-full max-w-[620px]"></div>

                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
