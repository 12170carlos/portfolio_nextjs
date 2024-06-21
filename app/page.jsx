"use client";
import { useState } from "react";
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Link from "next/link";

const Home = () => {
  const [showOptions, setShowOptions] = useState(false);

  function toogleOption() {
    setShowOptions(!showOptions);
  }

  function handleOptionClick() {
    setShowOptions(false);
  }

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I&#39;m <br />{" "}
              <span className="text-accent">Carlos Alvarado</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I am passionate about developing APPs from database, through back
              and front end. My passion for technology has only grown, and I
              continuously strive to improve and face new challenges.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                onClick={toogleOption}
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Donwload CV</span>
                <FiDownload className="text-xl" />
              </Button>
              {showOptions && (
                <div className="flex flex-col items-start mt-2">
                  <a
                    href="/cvCarlosAlvarado(Eng).pdf"
                    download="cvCarlosAlvarado(Eng).pdf"
                    onClick={handleOptionClick}
                    className="flex items-center gap-2 px-4 py-2"
                  >
                    <Button variant="outline">English version</Button>
                  </a>

                  <a
                    href="/cvCarlosAlvarado.pdf"
                    download="cvCarlosAlvarado.pdf"
                    onClick={handleOptionClick}
                    className="flex items-center gap-2 px-4 py-2 mt-2"
                  >
                    <Button variant="outline">Spanish version</Button>
                  </a>
                </div>
              )}
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex
                justify-center items-center text-accent text-base hover:bg-accent
                hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* foto */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0 ">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
