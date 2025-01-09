"use client";
import businessGraphImage from "@/assets/business-graphic.png";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { useRouter } from "next/navigation";

export const BusinessHero = () => {
  const router = useRouter();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      ref={heroRef}
      className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_top_left,#EAEEFE,#183EC2_100%)] overflow-x-clip"
>
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="tag">Empowering Your Business</div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#283593] text-transparent bg-clip-text mt-6">
              Unlock Your Business Potential
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              Discover insights, strategies, and tools that drive business growth,
              streamline processes, and maximize profitability.
            </p>
          </div>
          {/* <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
           <video
            src="https://teal-webflow.s3.us-east-2.amazonaws.com/teal-home.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="object-cover"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};
