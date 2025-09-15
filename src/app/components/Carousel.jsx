"use client";

import Image from "next/image";

export default function CarouselCss({ images }) {
  const interval = 3.5; // segundos por imagen

  return (
    <div className="relative w-full h-full overflow-hidden">
      {images.map((img, i) => (
        <div
          key={i}
          className="carousel-slide"
          style={{ animationDelay: `${i * interval}s` }}
        >
          <Image
            src={img.src}
            alt={img.alt ?? ""}
            fill
            className={`object-cover absolute inset-0 ${img?.imgClass ?? ""}`}
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}
    </div>
  );
}
