import Image from "next/image";
import { basePath } from "../config";
import { Button } from "../components/Button";

export const Menu = () => {
  return (
    <section
      className="w-full h-screen overflow-hidden flex flex-col md:flex-row relative"
      style={{ background: "#FF4200" }}
    >
      {/* Fondo Izquierdo (arriba en mobile) */}
      <div className="relative w-full h-1/2 md:w-1/2 md:h-full">
        <Image
          src={`${basePath}/images/menu/menu1.jpg`}
          alt="Fondo Izquierdo"
          fill
          className="object-cover"
        />
      </div>

      {/* Fondo Derecho (abajo en mobile) */}
      <div className="relative w-full h-1/2 md:w-1/2 md:h-full">
        <Image
          src={`${basePath}/images/menu/menu2.jpg`}
          alt="Fondo Derecho"
          fill
          className="object-cover"
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
