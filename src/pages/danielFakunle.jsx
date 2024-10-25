import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import { FaInstagram, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import Header from "../components/Header";
import ToggleOutline from "../components/toggleOutline";
import ProfilePicture from "../components/ProfilePicture";
import Footer from "../components/Footer";

export default function DanielFakunle() {
  const [showOutline, setShowOutline] = useState(false);

  const toggleOutline = () => {
    setShowOutline((prev) => !prev);
  };

  return (
    <div
      className={`h-screen w-screen bg-black ${showOutline ? "outline" : ""}`}
    >
      <div className="h-full w-full bg-black flex-col relative pt-10">
        <ToggleOutline checked={showOutline} onChange={toggleOutline} />

        {/* Header */}
        <Header />

        {/* Profile Section */}
        <div className="w-full h-3/6 flex flex-col items-center mt-4 pt-12">
          {/* Profile Picture */}
          <ProfilePicture src="../danielFakunle.jpg" />

          {/* Member Info */}
          <div className="text-center text-white mt-8">
            <h2 className="text-4xl font-bold">Daniel Fakunle</h2>
            <h3 className="text-xl mt-2">Designer</h3>
            <p className="mt-4 text-gray-400 max-w-md">
              Computer science student at Purdue University. 1st year in Hack
              the Future.
            </p>
          </div>
          <Link
            to="/"
            className="z-10 mt-6 bg-htfgreen text-white font-bold py-2 px-4 rounded transition duration-300 hover:bg-green-700"
          >
            Back to Home
          </Link>

          {/* Contact Links */}
          <div className="flex mt-8 gap-8 z-10">
            <a
              href="https://www.linkedin.com/in/danielfakunle/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="text-white text-4xl hover:animate-pop cursor-pointer" />
            </a>
            <a
              href="https://github.com/danielfakunle"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithubSquare className="text-white text-4xl hover:animate-pop cursor-pointer" />
            </a>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
