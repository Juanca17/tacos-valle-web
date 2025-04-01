import Image from "next/image";
import { basePath } from "../config";

export const ArmaTuMesa = ({ armaTuMesaRef }) => {
  return (
    <section
      id="arma-tu-mesa"
      className="relative w-full h-[110vh] flex items-center justify-center"
      style={{ background: "#FF4200" }}
      ref={armaTuMesaRef}
    >
      <div style={{ width: "60%", maxWidth: "100%", maxHeight: "100%" }}>
        <Image
          src={`${basePath}/images/star.png`}
          alt="Tacos Deliciosos"
          layout="responsive"
          width={20}
          height={20}
          className="no_selector"
          style={{ objectFit: "contain" }}
        />
      </div>
      <div
        className="no_selector text-white font-jean-luc-thin text-4xl sm:text-6xl md:text-8xl lg:text-10xl"
        style={{
          zIndex: 100,
          position: "absolute",
          top: "8rem",
          left: "5rem",
        }}
      >
        Arma
      </div>
      <div
        className="no_selector text-white font-jean-luc-thin text-4xl sm:text-6xl md:text-8xl lg:text-10xl"
        style={{
          zIndex: 100,
          position: "absolute",
          bottom: "8rem",
          right: "5rem",
        }}
      >
        tu mesa
      </div>
    </section>
  );
};
