"use client";

import { useEffect, useState } from "react";
import { basePath } from "../config";
import { Button } from "../components/Button";
import { AnimatedImage } from "../components/AnimatedImage";

const leftImages = ["m1.jpg", "m3.jpg", "m5.jpg"];
const rightImages = ["m2.jpg", "m4.jpg", "m6.jpg"];

export const Menu = () => {
  const [leftIndex, setLeftIndex] = useState(0);
  const [rightIndex, setRightIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeout(() => {
        setLeftIndex((prev) => (prev + 1) % leftImages.length);
        setRightIndex((prev) => (prev + 1) % rightImages.length);
      }, 400); // Animación dura 400ms
    }, 3500); // Cada 3.5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="w-full h-screen overflow-hidden flex flex-col md:flex-row relative"
      style={{ background: "#FF4200" }}
    >
      {/* Imagen Izquierda (arriba en mobile) */}
      <div className="relative w-full h-1/2 md:w-1/2 md:h-full overflow-hidden">
        <AnimatedImage
          src={`${basePath}/images/menu/${leftImages[leftIndex]}`}
          alt="Imagen Izquierda"
          direction="left"
        />
      </div>

      {/* Imagen Derecha (abajo en mobile) */}
      <div className="relative w-full h-1/2 md:w-1/2 md:h-full overflow-hidden">
        <AnimatedImage
          src={`${basePath}/images/menu/${rightImages[rightIndex]}`}
          alt="Imagen Derecha"
          direction="right"
        />
      </div>

      {/* Botón centrado */}
      <div className="absolute inset-0 z-20 flex items-center justify-center text-2xl sm:text-sm md:text-xl lg:text-2xl">
        <a
          href="https://drive.google.com/file/d/161W8El6JeQlMk8Md-xxvyFn85FI1cNm-/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button label="Menú" />
        </a>
      </div>
    </section>
  );
};
