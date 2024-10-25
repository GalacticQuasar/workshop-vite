import React from "react";
import { FaInstagram, FaLinkedin, FaGithubSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="w-full flex gap-10 font-monument text-base bg-black text-white pt-20">
      <div className="flex-col px-8 pt-16">
        <h1 className="pb-4 text-htfgreen">CONTACT US</h1>
        <h1>htfpurdue@gmail.com</h1>
        <div className="flex absolute z-10 text-4xl pt-4 gap-4">
          <a
            href="https://www.instagram.com/hackthefuturepurdue/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="hover:animate-pop cursor-pointer" />
          </a>
          <a
            href="https://www.linkedin.com/company/hack-the-future-at-purdue/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="hover:animate-pop cursor-pointer" />
          </a>
          <a
            href="https://github.com/Hack-the-Future"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithubSquare className="hover:animate-pop cursor-pointer" />
          </a>
        </div>
      </div>
      <div className="flex-col pt-16 w-1/2"></div>
      <div className="flex-col relative justify-right px-8 pt-16">
        <img
          src="/Logo.png"
          className="h-12 w-42 pl-32 mb-8 ml-40 object-end"
          alt="Logo"
        />
        <h1 className="text-right">
          Purdue University, West Lafayette, IN, 47906
        </h1>
      </div>
      <img
        className="absolute overflow-hidden bottom-0 z-0"
        src="/globe.png"
        alt="Globe Background"
      />
    </div>
  );
}
