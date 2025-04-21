import Image from "next/image";
import { basePath } from "../config";
import BotellaLottie from "../components/BotellaLottie";
import LottieLimon from "../components/LottieLimon";

export const AboutUs = ({ isMobile }) => {
  if (isMobile) {
    return (
      <section
        id="about-us"
        className="w-full h-[100vh] relative"
        style={{ background: "#FDD93D" }}
      >
        <div
          className="w-full flex items-center justify-center"
          style={{ height: "200px" }}
        >
          <div
            style={{
              transform: "rotate(10deg)",
              zIndex: 15,
            }}
          >
            <BotellaLottie
              style={{
                width: 200,
                height: 200,
              }}
            />
          </div>
        </div>
        <div className="w-full flex justify-center">
          <Image
            src={`${basePath}/images/about-us/notebook.png`}
            alt="Bloc de notas"
            fill
            className="no_selector"
            style={{
              objectFit: "contain",
              zIndex: 0,
              minHeight: "200px",
            }}
          />
          <div
            className="text-sm flex justify-center relative z-10"
            style={{
              color: "#020304",
              width: "60vw",
              textAlign: "center",
              marginTop: "15vh",
            }}
          >
            <div style={{ width: "100%" }}>
              <p className="font-jean-luc-thin" style={{ fontSize: "3rem" }}>
                TACOS DEL VALLE
              </p>
              <p className="font-simplon-bp-mono" style={{ marginTop: "3rem" }}>
                se enorgullece de ser una taquería que combina lo mejor de la
                tradición con un{" "}
                <span className="font-gt-alpina-bold">toque moderno.</span>
              </p>
              <p className="font-simplon-bp-mono" style={{ marginTop: "3rem" }}>
                Lista para conquistar a todos los amantes de los{" "}
                <span className="font-gt-alpina-bold" id="tacos">
                  tacos buenos, ricos, enchiladas y más.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div
          className="w-full flex items-center justify-center"
          style={{ marginTop: "9vh", height: "200px" }}
        >
          <div
            style={{
              zIndex: 15,
            }}
          >
            <LottieLimon
              style={{
                width: 300,
                height: 300,
              }}
            />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="about-us"
      className="w-full h-[120vh] flex justify-center relative"
      style={{ background: "#FDD93D" }}
    >
      <Image
        src={`${basePath}/images/about-us/notebook.png`}
        alt="Bloc de notas"
        fill
        className="no_selector"
        style={{
          marginTop: "3rem",
          objectFit: "contain",
          zIndex: 0,
        }}
      />
      <div
        className="text-2xl sm:text-sm md:text-md lg:text-2xl py-16 flex justify-center relative z-10"
        style={{
          color: "#020304",
          lineHeight: "3.5rem",
          width: "60vw",
          textAlign: "center",
          marginTop: "10rem",
        }}
      >
        <div style={{ width: "60%" }}>
          <p className="font-jean-luc-thin" style={{ fontSize: "4rem" }}>
            TACOS DEL VALLE
          </p>
          <p className="font-simplon-bp-mono" style={{ marginTop: "2rem" }}>
            se enorgullece de ser una taquería que combina lo mejor de la
            tradición con un{" "}
            <span className="font-gt-alpina-bold">toque moderno.</span>
          </p>
          <p className="font-simplon-bp-mono" style={{ marginTop: "2rem" }}>
            Lista para conquistar <br /> a todos los amantes de los
            <br />
            <span className="font-gt-alpina-bold" id="tacos">
              tacos buenos, ricos, enchiladas y más.
            </span>
          </p>
        </div>
      </div>
      <div style={{ position: "absolute", top: "10rem", left: "10rem" }}>
        <div
          style={{
            transform: "rotate(10deg)",
            zIndex: 15,
          }}
        >
          <BotellaLottie
            style={{
              width: 400,
              height: 400,
            }}
          />
        </div>
      </div>
      <div style={{ position: "absolute", bottom: "-7.5rem", right: "9rem" }}>
        <div
          style={{
            zIndex: 15,
          }}
        >
          <LottieLimon
            style={{
              width: 500,
              height: 500,
            }}
          />
        </div>
      </div>
    </section>
  );
};
