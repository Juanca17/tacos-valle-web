"use client";

import { useEffect, useState } from "react";
import { basePath, LINKS } from "../config";
import { HeadingImage } from "../components/HeadingImage";
import Image from "next/image";

const MichelinLogo = () => {
  return (
    <div
      className="absolute z-20 w-screen px-4 md:px-12"
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
          width={160}
          height={160}
        />
      </a>
    </div>
  );
};

const headingImages = [
  "portada1.png",
  "portada2.png",
  "portada3.png",
  "portada4.png",
  "portada5.png",
  "portada6.png",
  "portada7.png",
  "portada8.png",
  "portada9.png",
];

export const Heading2 = () => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % headingImages.length);
    }, 2000); // Cada 3.5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <header
      className="w-full h-screen overflow-hidden flex flex-col md:flex-row relative"
      style={{ background: "#FF4200" }}
    >
      <MichelinLogo />
      <div className="relative w-full h-full overflow-hidden">
        <HeadingImage
          src={`${basePath}/images/heading/${headingImages[imageIndex]}`}
          alt="Tacos Del Valle"
          direction="left"
        />
      </div>
    </header>
  );
};
