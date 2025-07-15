"use client";

import { useEffect, useState } from "react";
import { basePath, LINKS } from "../config";
import { HeadingImage } from "../components/HeadingImage";
import Image from "next/image";

const headingImages = [
  {
    url: "heading1.webp",
    imgClass: "object-[40%_60%]",
  },
  {
    url: "heading2.webp",
    imgClass: "object-[40%_45%]",
  },
  {
    url: "heading3.webp",
    imgClass: "object-[40%_45%]",
  },
  {
    url: "heading4.webp",
    imgClass: "object-[40%_62%]",
  },
  {
    url: "heading5.webp",
    imgClass: "scale-[120%] object-[40%_40%]",
  },
  {
    url: "heading6.webp",
    imgClass: "object-[30%_52%]",
  },
  {
    url: "heading7.webp",
    imgClass: "object-[30%_52%]",
  },
  {
    url: "heading8.webp",
    imgClass: "scale-[150%] object-[30%_80%]",
  },
  {
    url: "heading9.png",
    imgClass: "object-[80%_20%]",
  },
];

export const Heading2 = ({ isMobile }) => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % headingImages.length);
    }, 2000); // Cada 2 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <header
      id="heading"
      className="w-full h-[40vh] md:h-[100vh] overflow-hidden flex flex-col md:flex-row relative"
      style={{ background: "#FF4200" }}
    >
      <div
        className="absolute z-20 w-screen md:px-6"
        style={{ top: "125px", left: "0" }}
      >
        <a
          href={LINKS.MICHELIN_GUIDE}
          target="_blank"
          rel="noopener noreferrer"
          className="cursosr-pointer"
        >
          <Image
            src={`${basePath}/images/heading/michelin.png`}
            alt="MICHELIN BIB GOURMAND"
            width={isMobile ? 100 : 160}
            height={isMobile ? 100 : 160}
          />
        </a>
      </div>
      <div className="relative w-full h-full overflow-hidden">
        <HeadingImage
          src={`${basePath}/images/heading/${headingImages?.[imageIndex]?.url}`}
          alt="Tacos Del Valle"
          direction="left"
          imgClass={headingImages?.[imageIndex]?.imgClass}
        />
      </div>
    </header>
  );
};
