"use client";
import Image from "next/image";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { useState } from "react";

export const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const linkToCopy = "costella36@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(linkToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Hide message after 2s
    } catch (err) {
      console.error("Errore nella copia:", err);
    }
  };
  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-4 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className=" md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-center text-2xl md:text-3xl mb-8">
                Contact Me!
              </h2>
            </div>
            <div className="container">
              <div className="flex flex-col md:flex-row sm:flex-col justify-center items-center px-8 mt-8 gap-8">
                <button
                  className="text-white bg-gray-900 hover:bg-gray-800 flex justify-center items-center px-6 h-12 w-full rounded-xl gap-2  border border-gray-900"
                  onClick={handleCopy}
                >
                  <span className="font-semibold">
                    {" "}
                    {copied ? "Copied!" : "E-mail"}
                  </span>
                </button>
                <a
                  href="https://www.linkedin.com/in/matteo-costella-701196203/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-gray-900 hover:bg-gray-800 flex justify-center items-center px-6 h-12 w-full rounded-xl gap-2 border border-gray-900"
                >
                  <span className="font-semibold">Linkedin</span>
                  <ArrowUpRightIcon className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
