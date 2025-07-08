import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span>Portfolio</span>
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
        <p className="text-slate-600">©2024 Ankit Khandelwal. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
