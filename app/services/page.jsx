"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "I transform your ideas into high quality, customised web solutions. I create websites that not only stand out visually, but also offer impeccable functionality, ensuring an exceptional and seamless user experience.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "I design digital experiences that are intuitive, attractive, and highly effective. I focus on creating user interfaces that are visually pleasing and easy to use, significantly enhancing user interaction and satisfaction.",
    href: "",
  },
  {
    num: "03",
    title: "Mobile Development",
    description:
      "I bring your ideas to the mobile world by developing innovative and efficient mobile applications. I create mobile solutions tailored to your specific needs, providing an exceptional user experience on every device.",
    href: "",
  },
  {
    num: "04",
    title: "SEO",
    description:
      "I enhance your website's visibility on search engines using proven SEO strategies. I improve your ranking in search results, increasing traffic to your site and boosting your potential sales opportunities.",
    href: "",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div
                    className="text-5xl font-extrabold text-outline text-transparent
                  group-hover:text-outline-hover transition-all duration-500"
                  >
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white
                  group-hover:bg-accent transition-all duration-500 
                  flex justify-center items-center hover:-rotate-45"
                  >

                  <BsArrowDownRight className="text-primary text-3xl"/>
                  </Link>
                </div>
                {/* heading */}
                <h2 className="text-[42px] font-bold leading-none text-white
                group-hover:text-accent transition-all duration-500">{service.title}</h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
