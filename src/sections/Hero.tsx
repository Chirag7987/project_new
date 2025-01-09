"use client";
import cogImage from "@/assets/cog.png";
import cylinderImage from "@/assets/cylinder.png";
import starImage from "@/assets/star.png";
import noodleImage from "@/assets/noodle.png";
import businessGraphImage from "@/assets/business_new.png"
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { useRouter } from "next/navigation";

export const Hero = () => { 
  const router = useRouter();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={heroRef}
      className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip"
    >
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="tag">Version 2.0 is here</div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
              Pathway to productivity
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts, and celebrate your
              successes.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button
                className="px-4 py-2 bg-blue-800 text-white rounded-lg"
                onClick={() => router.push("/inquiry")} // Corrected route
              >
                Contact Us
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <motion.img
              src={cogImage.src}
              alt="Cog image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut",
              }}
            />
            <motion.img
              src={cylinderImage.src}
              width={220}
              height={220}
              alt="Cylinder image"
              className="hidden md:block -top-8 -left-32 md:absolute"
              style={{
                translateY: translateY,
              }}
            />
            <motion.img
              src={noodleImage.src}
              width={220}
              alt="Noodle image"
              className="hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]"
              style={{
                rotate: 30,
                translateY: translateY,
              }}
            />
          </div>
        </div>
      </div>
    <div className="container">
      <div className="w-full flex flex-col md:flex-row items-center gap-7 px-4">
      {/* Right: Image Section */}
      <div className="mt-20 md:mt-0 md:h-[500px] flex-1 relative flex items-center justify-center min-w-[300px]">
      <motion.img
      src={starImage.src}
      alt="Star Image"
      width={360}
      className="absolute -left-[350px] -top-[137px]"
      style={{
        translateY,
      }}
      />
      <motion.img
      src={businessGraphImage.src}
      alt="Business graph"
      className="md:h-[100%] md:max-w-[95%] lg:max-w-[100%] object-contain"
      animate={{
        translateY: [-20, 20],
      }}
      transition={{
        repeat: Infinity,
        repeatType: "mirror",
        duration: 3,
        ease: "easeInOut",
      }}
      />
    </div>

  {/* Left: Content Section */}
    <div className="md:w-[478px] flex-shrink-0">
      <div className="tag">Empowering Your Business</div>
      <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#283593] text-transparent bg-clip-text mt-6">
        Unlock Your Business Potential
      </h1>
      <p className="text-xl text-[#010D3E] tracking-tight mt-6">
        Discover insights, strategies, and tools that drive business growth,
        streamline processes, and maximize profitability.
      </p>
    </div>
    </div>    

  </div>
</section>
  );
};
