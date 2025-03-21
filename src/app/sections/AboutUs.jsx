import Image from "next/image";
import { Button } from "../components/Button";
import { basePath } from "../config";

export const AboutUs = ({ aboutUsTacosRef }) => {
  return (
    <section
      id="about-us"
      className="relative w-full min-h-[120vh] flex items-center py-16"
      style={{ background: "#F5ECEA" }}
    >
      <div
        className="text-2xl sm:text-sm md:text-md lg:text-2xl align-items py-16"
        style={{
          color: "#020304",
          lineHeight: "3.5rem",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-36 md:gap-4">
          <div className="flex justify-center items-center py-36 md:py-0">
            <div
              style={{
                width: "15rem",
                marginLeft: "30px",
              }}
            >
              <Image
                src={`${basePath}/images/about-us/botella.png`}
                alt="Botella"
                layout="responsive"
                width={20}
                height={50}
                className="no_selector"
                style={{
                  transform: "rotate(10deg)",
                }}
              />
            </div>
          </div>
          <div className="flex justify-center items-center text-center py-36 md:py-0">
            <div className="p-2">
              Somos una taquería de <br />
              la vieja escuela con un{" "}
              <span className="font-gt-alpina-bold">toque moderno.</span>
              <br />
              Lo más importante de nuestro{" "}
              <span>
                <a
                  href="https://drive.google.com/file/d/161W8El6JeQlMk8Md-xxvyFn85FI1cNm-/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button label="Menú" isOrange />
                </a>
              </span>{" "}
              <br />
              son los tacos{" "}
              <span
                id="tacos-span"
                className="inline-flex"
                ref={aboutUsTacosRef}
                style={{
                  display: "absolute",
                  padding: "20px 100px",
                }}
              ></span>
              , <br />
              pero nos gusta{" "}
              <span className="font-gt-alpina-bold">
                mezclar sabores,
                <br /> texturas y jugar con lo típico
              </span>
            </div>
          </div>
          <div className="flex justify-center items-center py-36 md:py-0">
            <div
              style={{
                width: "10rem",
              }}
            >
              <Image
                src={`${basePath}/images/about-us/limon.png`}
                alt="Limon"
                layout="responsive"
                width={20}
                height={50}
                className="no_selector"
                style={{
                  transform: "scaleX(-1)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
