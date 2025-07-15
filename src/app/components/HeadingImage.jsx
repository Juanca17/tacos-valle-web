"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export const HeadingImage = ({ src, alt, imgClass = "" }) => {
  const [currentSrc, setCurrentSrc] = useState(src);

  // Cambia src solo cuando haya terminado de cargar la nueva imagen
  useEffect(() => {
    const img = new window.Image();
    img.src = src;
    img.onload = () => setCurrentSrc(src);
  }, [src]);

  return (
    <div className="absolute inset-0">
      <Image
        src={currentSrc}
        alt={alt}
        fill
        className={`object-cover absolute inset-0 ${imgClass}`}
        priority
      />
    </div>
  );
};
