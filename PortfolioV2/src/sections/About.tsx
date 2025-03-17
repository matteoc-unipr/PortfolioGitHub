"use client";
import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GitHubIcon from "@/assets/icons/github.svg";
import IotIcon from "@/assets/icons/iot.svg";
import SqlIcon from "@/assets/icons/sql.svg";
import JavaIcon from "@/assets/icons/java.svg";
import PyImage from "@/assets/icons/python.svg";
import CppIcon from "@/assets/icons/cplusplus.svg";
import AiIcon from "@/assets/icons/ai.svg";
import NodeIcon from "@/assets/icons/node.svg";
import TwIcon from "@/assets/icons/tailwind.svg";
import KtIcon from "@/assets/icons/kt.svg";
import AstudioIcon from "@/assets/icons/astudio.svg";
import FigmaIcon from "@/assets/icons/figma.svg";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolboxItems = [
  {
    title: "Android Studio",
    iconType: AstudioIcon,
  },
  {
    title: "Kotlin",
    iconType: KtIcon,
  },
  {
    title: "Tailwind",
    iconType: TwIcon,
  },
  {
    title: "SQL",
    iconType: SqlIcon,
  },
  {
    title: "NodeJs",
    iconType: NodeIcon,
  },
  {
    title: "ML",
    iconType: AiIcon,
  },
  {
    title: "C++",
    iconType: CppIcon,
  },
  {
    title: "Python",
    iconType: PyImage,
  },
  {
    title: "Java",
    iconType: JavaIcon,
  },
  {
    title: "IoT",
    iconType: IotIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Github",
    iconType: GitHubIcon,
  },
  {
    title: "Figma",
    iconType: FigmaIcon,
  },
];

const hobbies = [
  {
    title: "Volunteering",
    emoji: "🚑",
    left: "5%",
    top: "5%",
  },
  {
    title: "Photography",
    emoji: "📷",
    left: "50%",
    top: "5%",
  },
  {
    title: "Hiking",
    emoji: "⛰️",
    left: "35%",
    top: "40%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "10%",
    top: "35%",
  },
  {
    title: "Music",
    emoji: "🎧",
    left: "70%",
    top: "45%",
  },
  {
    title: "Fitness",
    emoji: "🏋️",
    left: "5%",
    top: "65%",
  },
  {
    title: "Exploring",
    emoji: "🗺️",
    left: "45%",
    top: "70%",
  },
];

const timelineSteps = [
  {
    title: "Liceo Scientifico Zappa-Fermi",
    year: "2017-2021",
  },
  {
    title: "Laurea in Ing. Tecnologie Informatiche",
    year: "2021-2024",
  },
  {
    title: "Laurea magistrale in Ing. Informatica",
    year: "2024-Present",
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader title="My Studies" />
              <div className="flex h-full justify-center px-6">
                <div className="relative flex flex-col">
                  <div className="absolute h-full w-0.5 bg-gradient-to-b from-emerald-300 to-sky-400 left-3 -ml-px"></div>
                  {timelineSteps.map((step, index) => (
                    <div
                      key={index}
                      className="mb-3 last:mb-0 flex items-start"
                    >
                      <div className="rounded-full h-6 w-6 bg-gradient-to-r from-emerald-300 to-sky-400 z-10 flex-shrink-0"></div>
                      <div className="ml-4 pt-1">
                        <h3 className="font-semibold text-white/90 text-sm">
                          {step.title}
                        </h3>
                        <p className="text-sm text-gray-500">{step.year}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
            <Card className="h-[320px]  md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I used in the last years."
                className=""
              />
              <ToolboxItems
                Items={toolboxItems}
                className=""
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolboxItems
                Items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:15s]"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8 ">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interest and hobbies beyond the digital realm."
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="map"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image
                  src={smileMemoji}
                  alt="smiling memoji"
                  className="size-20"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
