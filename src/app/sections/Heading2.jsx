"use client";

import { basePath, LINKS } from "../config";
import Image from "next/image";
import CarouselCss from "../components/Carousel";

const headingImagesAlt = [
  {
    src: "https://ik.imagekit.io/qrtbcc020/heading/header-1.png",
    alt: "Tacos Del Valle 1",
  },
  {
    src: "https://ik.imagekit.io/qrtbcc020/heading/header-2.png",
    alt: "Tacos Del Valle 2",
  },
  {
    src: "https://ik.imagekit.io/qrtbcc020/heading/header-3.png",
    alt: "Tacos Del Valle 3",
  },
  {
    src: "https://ik.imagekit.io/qrtbcc020/heading/header-4.png",
    alt: "Tacos Del Valle 4",
  },
  {
    src: "https://ik.imagekit.io/qrtbcc020/heading/header-5.png",
    alt: "Tacos Del Valle 5",
  },
  {
    src: "https://ik.imagekit.io/qrtbcc020/heading/header-6.png",
    alt: "Tacos Del Valle 6",
  },
  {
    src: "https://ik.imagekit.io/qrtbcc020/heading/header-7.png",
    alt: "Tacos Del Valle 7",
  },
  {
    src: "https://ik.imagekit.io/qrtbcc020/heading/header-8.png",
    alt: "Tacos Del Valle 8",
  },
  {
    src: "https://ik.imagekit.io/qrtbcc020/heading/header-9.png",
    alt: "Tacos Del Valle 9",
  },
];

const headingImagesMobile = [
  {
    src: "https://ik.imagekit.io/qrtbcc020/heading-mobile/heading-1.png",
    alt: "Tacos Del Valle 1",
  },
  {
    src: "https://ik.imagekit.io/qrtbcc020/heading-mobile/heading-2.png",
    alt: "Tacos Del Valle 2",
  },
  {
    src: "https://ik.imagekit.io/qrtbcc020/heading-mobile/heading-3.png",
    alt: "Tacos Del Valle 3",
  },
  {
    src: "https://ik.imagekit.io/qrtbcc020/heading-mobile/heading-4.png",
    alt: "Tacos Del Valle 4",
  },
  {
    src: "https://ik.imagekit.io/qrtbcc020/heading-mobile/heading-5.png",
    alt: "Tacos Del Valle 5",
  },
  {
    src: "https://ik.imagekit.io/qrtbcc020/heading-mobile/heading-6.png",
    alt: "Tacos Del Valle 6",
  },
  {
    src: "https://ik.imagekit.io/qrtbcc020/heading-mobile/heading-7.png",
    alt: "Tacos Del Valle 7",
  },
  {
    src: "https://ik.imagekit.io/qrtbcc020/heading-mobile/heading-8.png",
    alt: "Tacos Del Valle 8",
  },
  {
    src: "https://ik.imagekit.io/qrtbcc020/heading-mobile/heading-9.png",
    alt: "Tacos Del Valle 9",
  },
];

export const Heading2 = ({ isMobile }) => {
  return (
    <header
      id="heading"
      className="w-full h-[100vh] overflow-hidden flex flex-col md:flex-row relative"
      style={{ background: "#FF4200" }}
    >
      <div
        className="absolute z-20 w-screen md:px-6"
        style={{ top: 125, left: 0 }}
      >
        <a
          href={LINKS.MICHELIN_GUIDE}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <Image
            src="https://ik.imagekit.io/qrtbcc020/tdv/michelin.png"
            alt="MICHELIN BIB GOURMAND"
            width={isMobile ? 100 : 160}
            height={isMobile ? 100 : 160}
            priority
          />
        </a>
      </div>

      <CarouselCss
        images={isMobile ? headingImagesMobile : headingImagesAlt}
        interval={3.5}
      />

      {!isMobile ? (
        <div
          className="absolute z-19 w-screen flex justify-center opacity-100"
          style={{
            bottom: 0,
            background: "#EAE8DF",
            paddingTop: "11vh",
            paddingBottom: "11vh",
          }}
        />
      ) : null}
    </header>
  );
};
