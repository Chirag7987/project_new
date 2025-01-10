"use client";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

import React, { useState } from "react";
import "./InquiryForm.css"; // Import the CSS file

const ContactForm: React.FC = () => {
  const router = useRouter(); // Initialize useRouter hook
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

      // Redirect back to the previous page
      router.back();
    }, 2000);
  };

  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="py-5">
        <div className="container">
          <div className="">
            <Image src={Logo} alt="Saas Logo" height={40} width={40} />
            {/* <MenuIcon className="h-5 w-5 md:hidden" /> */}
          </div>
        </div>
      </div>
      <div className="contact-container">
        {/* Left Content Section */}
        <div className="contact-content">
          <span className="content-badge">Lets talk</span>
          <h2 className="content-title">Lets talk about your Business.</h2>
          <p className="content-description">
            Fill the form and send in your queries. I will respond as soon as I can. Alternatively,
            you can reach out to me at my email address.
          </p>
        </div>

        {/* Right Form Section */}
        <div className="form-card">
          <form onSubmit={handleSubmit} className="form">
            <h1 className="form-title">Send a message</h1>

            {/* Full Name */}
            <div className="form-group">
              <label htmlFor="fullname" className="form-label">
                Full name<span className="required">*</span>
              </label>
              <input
                type="text"
                id="fullname"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                placeholder="Enter your full name"
                className="form-input"
                required
              />
            </div>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                E-mail<span className="required">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="form-input"
                required
              />
            </div>

            {/* Subject */}
            <div className="form-group">
              <label htmlFor="subject" className="form-label">
                Subject<span className="required">*</span>
              </label>
              <input
                type="text"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Enter the subject"
                className="form-input"
                required
              />
            </div>

            {/* Message */}
            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message<span className="required">*</span>
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter your message"
                className="form-textarea"
                required
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="form-button">
              {buttonText}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="form-button-icon"
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
              <p className="form-success">Thank you! Your Message has been delivered.</p>
            )}
          </form>
        </div>
      </div>
    </header>
  );
};

export default ContactForm;
