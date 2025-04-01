import { useEffect, useState } from "react";
import Image from "next/image";

export const AnimatedImage = ({ src, alt, direction }) => {
  const [prevSrc, setPrevSrc] = useState(src);
  const [animatingIn, setAnimatingIn] = useState(false);

  useEffect(() => {
    if (src !== prevSrc) {
      setAnimatingIn(true);

      const timeout = setTimeout(() => {
        setPrevSrc(src);
        setAnimatingIn(false);
      }, 400); // duración igual a la animación

      return () => clearTimeout(timeout);
    }
  }, [src, prevSrc]);

  const getAnimationClass = (dir) => {
    if (dir === "left") {
      return "animate-slide-right md:animate-slide-down";
    } else {
      return "animate-slide-left md:animate-slide-up";
    }
  };

  return (
    <div className="absolute inset-0">
      {/* Imagen anterior (estática) */}
      <Image
        src={prevSrc}
        alt={alt}
        fill
        className="object-cover absolute inset-0 transition-opacity duration-300"
      />

      {/* Imagen nueva animando su entrada */}
      {animatingIn && (
        <Image
          src={src}
          alt={alt}
          fill
          className={`object-cover absolute inset-0 ${getAnimationClass(
            direction
          )}`}
        />
      )}
    </div>
  );
};
