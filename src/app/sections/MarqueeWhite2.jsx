import Image from "next/image";
import { basePath, FRASES } from "../config";

export const MarqueeWhite2 = () => {
  const phrases = FRASES;
  return (
    <section
      className="w-full h-32 overflow-hidden flex items-center relative"
      style={{ background: "#EAE8DF", color: "#FF4200" }}
    >
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center">
            {Array(3)
              .fill(null)
              .flatMap((_, j) =>
                phrases.map((phrase, index) => (
                  <div key={`${i}-${j}-${index}`} className="flex items-center">
                    <div className="font-gt-alpina-bold-italic text-[1.75rem] sm:text-[2.5rem] mx-3">
                      {phrase}
                    </div>
                    <div className="w-[80px] h-[80px] mx-3 flex items-center justify-center">
                      <Image
                        src={`${basePath}/images/limon_orange_white.png`}
                        alt="Limon personaje"
                        width={80}
                        height={80}
                      />
                    </div>
                  </div>
                ))
              )}
          </div>
        ))}
      </div>
    </section>
  );
};
