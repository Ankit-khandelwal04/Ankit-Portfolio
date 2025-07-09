import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-6 sm:p-12 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
        <span>Portfolio</span>

        <div className="flex gap-4">
          <a
            href="https://github.com/Ankit-khandelwal04"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 text-xl"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/ankit-khandelwal-002474295/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 text-xl"
          >
            Linkedin
          </a>
        </div>

        <p className="text-slate-600 text-center sm:text-right">
          ©2024 Ankit Khandelwal. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
