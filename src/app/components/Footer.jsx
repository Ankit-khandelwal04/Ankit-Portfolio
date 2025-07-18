import React from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import InstagramIcon from "../../../public/instagram-icon.svg";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-6 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
        <span>Portfolio</span>

        <div className="socials flex flex-row gap-6">
            <Link
              href="https://github.com/Ankit-khandelwal04"
              className="flex hover:scale-115 transition-transform duration-200"
            >
              <Image src={GithubIcon} alt="Github Icon" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/ankit-khandelwal-002474295/"
              className="flex hover:scale-115 transition-transform duration-200"
            >
              <Image src={LinkedinIcon} alt="Linkedin Icon" />
            </Link>
            <Link
              href="https://www.instagram.com/ankit_khandelwal4/"
              className="flex hover:scale-115 transition-transform duration-200"
            >
              <Image src={InstagramIcon} alt="Instagram Icon" />
            </Link>
          </div>

        <p className="text-slate-600 text-center sm:text-right">
          ©2024 Ankit Khandelwal. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
