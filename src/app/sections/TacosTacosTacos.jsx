"use client";

import Image from "next/image";
import { basePath } from "../config";

export const TacosTacosTacos = ({ isMobile, ref }) => {
  return (
    <section
      id="tacos_tacos_tacos"
      className="relative h-[100vh] sm:h-[150vh] flex items-center justify-center overflow-hidden"
      ref={ref}
    >
      {isMobile ? (
        <Image
          src={`${basePath}/images/tacos_tacos_tacos_bg.png`}
          alt="Tacos background"
          fill
          className="object-cover w-[80%] h-full object-top"
          priority
        />
      ) : (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${basePath}/images/tacos_tacos_tacos_bg.png')`,
          }}
        />
      )}
    </section>
  );
};
