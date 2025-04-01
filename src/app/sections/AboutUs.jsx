import Image from "next/image";
import { basePath } from "../config";

export const AboutUs = ({ isMobile }) => {
  if (isMobile) {
    return (
      <section
        id="about-us"
        className="w-full h-[100vh] flex justify-center relative"
        style={{ background: "#FDD93D" }}
      >
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
            marginTop: "40vh",
          }}
        >
          <div style={{ width: "100%" }}>
            <p className="font-jean-luc-thin" style={{ fontSize: "2rem" }}>
              TACOS DEL VALLE
            </p>
            <p className="font-simplon-bp-mono" style={{ marginTop: "2rem" }}>
              se enorgullece de ser una taquería que combina lo mejor de la
              tradición con un{" "}
              <span className="font-gt-alpina-bold">toque moderno.</span>
            </p>
            <p className="font-simplon-bp-mono" style={{ marginTop: "2rem" }}>
              Lista para conquistar a todos los amantes de los tacos buenos,
              ricos, enchiladas y más.
            </p>
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
            Lista para conquistar a todos los amantes de los tacos buenos,
            ricos, enchiladas y más.
          </p>
        </div>
      </div>
      <div style={{ position: "absolute", top: "10rem", left: "18rem" }}>
        <Image
          src={`${basePath}/images/about-us/botella.png`}
          alt="Botella"
          width={160}
          height={160}
          className="no_selector"
          style={{
            objectFit: "contain",
            transform: "rotate(10deg)",
            zIndex: 15,
          }}
        />
      </div>
      <div style={{ position: "absolute", bottom: "-15px", right: "16rem" }}>
        <Image
          src={`${basePath}/images/about-us/limon.png`}
          alt="Limón"
          width={160}
          height={160}
          className="no_selector"
          style={{
            objectFit: "contain",
            zIndex: 15,
          }}
        />
      </div>
    </section>
  );
};
