"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="w-full text-white px-4 sm:px-8 xl:px-16 py-12"
    >
      {/* Section Heading */}
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold">Contact Me</h2>
      </div>

      {/* Main Grid */}
      <div className="grid md:grid-cols-2 gap-4 relative">
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>

        {/* Left Panel */}
        <div className="z-10">
          <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
          <p className="text-[#ADB7BE] mb-4 max-w-md">
            I&apos;m currently looking for new opportunities, my inbox is always open.
            Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>

          <div className="text-[#ADB7BE] space-y-4">
            {/* Location */}
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-green-400" />
              <span>Nashik, Maharashtra</span>
            </div>

            {/* Email - hover on anchor only */}
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-green-400" />
              <a
                href="mailto:ankitkhandelwal1034@gmail.com"
                className="hover:underline hover:scale-105 transition-transform duration-200"
              >
                ankitkhandelwal1034@gmail.com
              </a>
            </div>

            {/* Phone - hover on anchor only */}
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-green-400" />
              <a
                href="tel:+919767572670"
                className="hover:underline hover:scale-105 transition-transform duration-200"
              >
                +91-9767572670
              </a>
            </div>
          </div>

          {/* Social Icons */}
          <div className="socials flex flex-row gap-4 py-5">
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
          </div>
        </div>

        {/* Right Panel - Contact Form */}
        <div>
          {emailSubmitted ? (
            <p className="text-green-500 text-sm mt-2">Email sent successfully!</p>
          ) : (
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="text-white block mb-2 text-sm font-medium"
                >
                  Your email
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  required
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="dominic.1@gmail.com"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="text-white block text-sm mb-2 font-medium"
                >
                  Subject
                </label>
                <input
                  name="subject"
                  type="text"
                  id="subject"
                  required
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Just saying hi"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="text-white block text-sm mb-2 font-medium"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Let's talk about..."
                />
              </div>
              <button
                type="submit"
                className="bg-primary-500 hover:bg-white hover:text-black text-white border border-amber-50 font-medium py-2.5 px-5 rounded-full w-full hover:cursor-pointer"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
