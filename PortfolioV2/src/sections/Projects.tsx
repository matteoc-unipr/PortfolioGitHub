import Image from "next/image";
import tesiImage from "@/assets/images/tesifoto.png";
import cleverMoneyImage from "@/assets/images/clevermoney.png";
import vasoIntelligenteImage from "@/assets/images/vasointelligente.png";
import DShooterImage from "@/assets/images/2dshooter.png";
import PacManImage from "@/assets/images/pacman.png";
import SlitherImage from "@/assets/images/slither.png";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Università di Parma",
    year: "2024",
    title: "Thesis Project",
    results: [
      { title: "Precision Agricolture" },
      { title: "IoT Systems" },
      { title: "LoRaWAN" },
      { title: "Tiny Machine Learning" },
      { title: "Quantization" },
    ],
    link: "https://univpr-my.sharepoint.com/:b:/g/personal/matteo_costella_studenti_unipr_it/EX-Z1Lc_QGREtxiyDFcQgWMBthCUZ2ss36cCR7bEB2jY6Q?e=fZWOyr",
    image: tesiImage,
    linkImage:
      "https://univpr-my.sharepoint.com/:b:/g/personal/matteo_costella_studenti_unipr_it/EQoa9sBsq1pPgkJys07xWZEBuPSy16tponWRkteGBUbgzw?e=XLgBn4",
  },
  {
    company: "Università di Parma",
    year: "2024",
    title: "CleverMoney",
    results: [
      { title: "Expense Tracker" },
      { title: "Extract Data from Receipt" },
      { title: "Android Development" },
      { title: "MongoDB, Room" },
      { title: "Retrofit, Moshi" },
    ],
    link: "https://univpr-my.sharepoint.com/:b:/g/personal/matteo_costella_studenti_unipr_it/Ea85KQUdZuBDvoDEuP6bw0MBF2Z3XPDjbwZAyvdutUCuiQ?e=btqpr8",
    image: cleverMoneyImage,
    linkImage:
      "https://www.canva.com/design/DAGQeirQ6mA/RNamXRMrAvF60L54oPYE2w/view?utm_content=DAGQeirQ6mA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h4bd451de21",
  },
  {
    company: "Università di Parma",
    year: "2024",
    title: "Vaso Intelligente",
    results: [
      { title: "Plant health monitoring" },
      { title: "Dashboard, User Notification" },
      { title: "IoT Microcontroller" },
      { title: "LoRaWAN" },
      { title: "Python, C" },
    ],
    link: "https://univpr-my.sharepoint.com/:b:/g/personal/matteo_costella_studenti_unipr_it/EQwfEOXYI4xJrlP18Gpr-wcBZfIFvH6UGFGff6ykiX4iDg?e=yQmprj",
    image: vasoIntelligenteImage,
    linkImage:
      "https://www.canva.com/design/DAF66xvuJQA/PFBVWktUBfiv1IZZSVzxhA/view?utm_content=DAF66xvuJQA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h5c20e16664",
  },
  {
    company: "Università di Parma",
    year: "2023",
    title: "2D Shooter",
    results: [
      { title: "Online Multiplayer Game" },
      { title: ".io Games Style" },
      { title: "Node.js, Socket.io, JavaScript" },
      { title: "PostgreSQL" },
    ],
    link: "https://univpr-my.sharepoint.com/:b:/g/personal/matteo_costella_studenti_unipr_it/EfTGFOmLIsRJnf1CD1eQi7YByd0WSLVzGJKqTVzXaggmXQ?e=lKLSTw",
    image: DShooterImage,
    linkImage:
      "https://www.canva.com/design/DAGG5iJLyhk/_m87nXbbght7FMi-ZwqBcg/view?utm_content=DAGG5iJLyhk&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h5641872ed6",
  },
  {
    company: "Università di Parma",
    year: "2021",
    title: "Pac Man",
    results: [
      { title: "Python" },
      { title: "PyGame" },
      { title: "PhotoShop" },
      { title: "g2d" },
    ],
    link: "https://github.com/matteoc-unipr/PACMAN_Python",
    image: PacManImage,
  },
  {
    company: "Università di Parma",
    year: "2021",
    title: "SlitherLink",
    results: [
      { title: "Python" },
      { title: "PyGame" },
      { title: "g2d" },
      { title: "Photoshop" },
    ],
    link: "https://github.com/matteoc-unipr/SLITHERLINK_Python",
    image: SlitherImage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world results"
          title="My Projects"
          description='"The best way to learn is by doing..."'
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 20}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, i) => (
                      <li
                        key={result.title || i}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={project.link}
                    target="_blank"
                    className="relative inline-flex items-center justify-center h-12 w-full md:w-auto px-6 overflow-hidden font-semibold text-gray-950 transition duration-300 ease-out rounded-xl shadow-md group bg-white mt-8"
                  >
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-gradient-to-r from-emerald-300 to-sky-400 group-hover:translate-x-0 ease">
                      <ArrowUpRightIcon className="size-5 text-gray-950" />
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full text-gray-950 transition-all duration-300 transform group-hover:translate-x-full ease gap-2">
                      Read More
                    </span>
                    <span className="relative invisible">Read More</span>
                  </a>
                </div>
                <div className="relative">
                  <a
                    href={project.linkImage}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none cursor-pointer transition-transform duration-300 lg:hover:translate-x-[-70px]"
                    />
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
