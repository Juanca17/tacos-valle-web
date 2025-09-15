"use client";

import Image from "next/image";
import { basePath } from "../config";

export const MesaSection = ({ isMobile, ref }) => {
  return (
    <section
      id="tacos_tacos_tacos"
      className="relative h-[100vh] sm:h-[150vh] flex items-center justify-center overflow-hidden"
      ref={ref}
    >
      {/* Fondo */}
      {isMobile ? (
        <Image
          src="https://ik.imagekit.io/qrtbcc020/tdv/mesa_bg.png"
          alt="Tacos background"
          fill
          className="object-cover w-[80%] h-full object-top"
          priority
        />
      ) : (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://ik.imagekit.io/qrtbcc020/tdv/mesa_bg.png')`,
          }}
        />
      )}

      {/* GIF centrado arriba */}
      <div className="absolute top-10 md:top-0 left-1/2 -translate-x-1/2 z-20">
        <Image
          src="https://ik.imagekit.io/qrtbcc020/tdv/armatumesa.gif" // cambia por tu GIF real
          alt="Animación"
          width={360} // ajusta a tu gusto
          height={360}
          unoptimized // permite animación en Next.js
          priority
          className="pointer-events-none select-none"
        />
      </div>
    </section>
  );
};
