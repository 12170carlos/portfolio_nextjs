"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "Furniture Store Website",
    description:
      "I developed a sleek, user-friendly website for a furniture store, using web technologies without any framework to create a visually appealing and highly functional online presence. The site features an intuitive design that makes it easy for customers to navigate and purchase furniture.",
    stack: [{ name: "html5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "fullstack",
    title: "project 2",
    description:
      "I built a robust e-commerce platform designed to handle high traffic and provide a seamless shopping experience. The platform includes features such as product listings, shopping cart and secure payment integration, ensuring a smooth and secure transaction process for users",
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }, { name: "Node.js" }],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "fullstack",
    title: "project 3",
    description:
      "I created a personal portfolio website to showcase my client's skills and projects. This interactive and responsive site highlights career path, projects and expertise, giving potential employers and clients a complete view of my capabilities. ",
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }, { name: "Node.js" }],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "fullstack",
    title: "project Eztinerary",
    description:
      "App that we made as a final student project, where I managed to develop part of the front end, such as: user login, UI of the map section and part of the backend implementations. ",
    stack: [{ name: "HTML5" }, { name: "Css3" }, { name: "Node.js" }, {name: "React"}, {name: "Redux"}, {name: "MaterialUI"},{name: "Express"}, {name: "MongoDB"}],
    image: "/assets/work/thumb5.png",
    live: "",
    github: "",
  },
  {
    num: "05",
    category: "Mobile app",
    title: "Food Delivery",
    description:
      "mobile application for food delivery and others, where I developed the frontend of the delivery man app, plus some additional modules in the backend. ",
    stack: [{ name: "HTML5" }, { name: "Css3" }, { name: "PHP" }, {name: "Angular"}, {name: "Ionic"}, {name: "Node.js"},{name: "Android"}, {name: "PostgresDB"}],
    image: "/assets/work/thumb6.png",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project satte based on current slice index
    setProject(projects[currentIndex]);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"} }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>

              {/* project description */}
              <p className="text-white/60">{project.description}</p>

              {/* stock */}
              <ul className="flex flex-wrap gap-4 break-words">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* button */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github profect button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((projet, index) => {
                return (
                  <SwiperSlide key={index} className="w-full ">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 h-full w-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div>
                        <Image
                          src={project.image}
                          alt=""
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns  containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
