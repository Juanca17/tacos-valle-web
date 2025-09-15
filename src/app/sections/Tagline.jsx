import Image from "next/image";
import { basePath, TAGLINE_INFO } from "../config";

export const Tagline = ({ isMobile }) => {
  return (
    <section
      id="tagline"
      className="text-white w-full min-h-[120vh]"
      style={{ background: "#FF4200" }}
    >
      <div className="relative w-full flex flex-col items-center justify-center pt-[5rem]">
        <p className="font-gt-alpina-bold-italic tagline-title">
          Tacos Buenos & Ricos
        </p>
        <p className="tagline-subtitle">Del Norte de México</p>
      </div>

      <div
        className={`mt-12 pb-[8rem] gap-8 px-4 md:px-20 justify-center flex flex-wrap`}
      >
        {TAGLINE_INFO.map((item, index) => (
          <div
            key={index}
            className={`max-w-xs flex flex-col items-center ${
              isMobile ? "basis-1/2" : "basis-1/5"
            }`}
          >
            <div className="w-[300px] h-[300px] mx-auto flex items-center justify-center">
              <Image src={item.src} alt={item.name} width={300} height={300} />
            </div>
            <div className="mt-4 text-center">
              <p className="font-gt-alpina-bold-italic text-lg">{item.name}</p>
              <p className="text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
