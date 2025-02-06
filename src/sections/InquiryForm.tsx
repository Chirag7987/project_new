"use client";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import React, { useState } from "react";
import "./InquiryForm.css"; // Import the CSS file

const ContactForm: React.FC = () => {
  const router = useRouter();
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [buttonText, setButtonText] = useState("Send");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setButtonText("Sending...");
    setTimeout(() => {
      setButtonText("Send");
      setShowSuccessMessage(true);

      // Reset form after success
      setFullname("");
      setEmail("");
      setSubject("");
      setMessage("");
    }, 2000);
  };

  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="py-5">
        <div className="container">
          <div>
            <Link href="/" passHref>
              <Image src={Logo} alt="Saas Logo" height={40} width={40} />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Container with Responsive Layout */}
      <div className="contact-container flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between px-4">
        {/* Left Content Section (Moves to the top in mobile view) */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <span className="content-badge">Let's Talk</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
            Let's Talk About Your Business
          </h2>
          <p className="text-lg md:text-xl text-[#010D3E] tracking-tight mt-4">
            Fill in the form and send your queries. I'll respond as soon as I
            can. Alternatively, you can reach out via email.
          </p>
        </div>

        {/* Right Form Section (Moves below content on mobile) */}
        <div className="form-card w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
          <form
            onSubmit={handleSubmit}
            className="form max-w-lg w-full bg-white p-6 md:p-8 rounded-lg shadow-lg"
          >
            <h1 className="form-title text-2xl md:text-3xl font-semibold text-center text-gray-800">
              Send a Message
            </h1>

            {/* Full Name */}
            <div className="form-group mt-4">
              <label htmlFor="fullname" className="form-label text-gray-700">
                Full Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullname"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                placeholder="Enter your full name"
                className="form-input w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            {/* Email */}
            <div className="form-group mt-4">
              <label htmlFor="email" className="form-label text-gray-700">
                E-mail<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="form-input w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            {/* Subject */}
            <div className="form-group mt-4">
              <label htmlFor="subject" className="form-label text-gray-700">
                Subject<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Enter the subject"
                className="form-input w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            {/* Message */}
            <div className="form-group mt-4">
              <label htmlFor="message" className="form-label text-gray-700">
                Message<span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter your message"
                className="form-textarea w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-28 resize-none"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="form-button w-full mt-6 px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition duration-300"
            >
              {buttonText}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="form-button-icon inline-block ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>

            {/* Success Message */}
            {showSuccessMessage && (
              <p className="form-success mt-4 text-green-600 text-center">
                Thank you! Your message has been delivered.
              </p>
            )}
          </form>
        </div>
      </div>
    </header>
  );
};

export default ContactForm;
