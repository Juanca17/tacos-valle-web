import Image from "next/image";
import { basePath } from "../config";
import { Button } from "../components/Button";

export const Menu = () => {
  return (
    <section
      className="w-full h-screen overflow-hidden flex items-center justify-center relative"
      style={{ background: "#FF4200" }}
    >
      <div className="absolute top-0 left-0 w-1/2 h-full">
        <Image
          src={`${basePath}/images/menu/menu1.jpg`}
          alt="Fondo Izquierdo"
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute top-0 right-0 w-1/2 h-full">
        <Image
          src={`${basePath}/images/menu/menu2.jpg`}
          alt="Fondo Derecho"
          fill
          className="object-cover"
        />
      </div>

      {/* Capa oscura si quieres dar contraste al texto/botón */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-30 z-10" /> */}

      <div className="z-20 flex justify-center items-center text-2xl sm:text-sm md:text-xl lg:text-2xl">
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
