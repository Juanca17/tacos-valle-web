import Image from "next/image";
import { basePath } from "../config";

export const Mosaic = () => {
  return (
    <section
      className="relative w-full h-[150vh] mosaic_xl_section"
      style={{ background: "#E9471F" }}
    >
      <div style={{ position: "absolute", top: "100px" }}>
        <Image
          src={`${basePath}/images/reinventando/re1.png`}
          alt="Taco"
          width={350}
          height={350}
          className="h-auto w-100"
        />
      </div>
      <div style={{ position: "absolute", top: "210px", left: "140px" }}>
        <Image
          src={`${basePath}/images/reinventando/re2.png`}
          alt="Taco"
          width={350}
          height={350}
          className="h-auto w-100"
        />
      </div>
      <div style={{ position: "absolute", top: "10px", left: "500px" }}>
        <Image
          src={`${basePath}/images/reinventando/re3.png`}
          alt="Taco"
          width={200}
          height={200}
          className="h-auto w-100"
        />
      </div>
      <div style={{ position: "absolute", top: "100px", right: "500px" }}>
        <Image
          src={`${basePath}/images/reinventando/re4.png`}
          alt="Taco"
          width={150}
          height={150}
          className="h-auto w-100"
        />
      </div>
      <div style={{ position: "absolute", top: "50px", right: "50px" }}>
        <Image
          src={`${basePath}/images/reinventando/re5.png`}
          alt="Taco"
          width={350}
          height={350}
          className="h-auto w-100"
        />
      </div>
      <div style={{ position: "absolute", top: "60vh", right: "36vw" }}>
        <Image
          src={`${basePath}/images/reinventando/re6.png`}
          alt="Taco"
          width={350}
          height={350}
          className="h-auto w-100"
        />
      </div>
      <div style={{ position: "absolute", bottom: "10vh", right: "10vw" }}>
        <Image
          src={`${basePath}/images/reinventando/re7.png`}
          alt="Taco"
          width={300}
          height={300}
          className="h-auto w-100"
        />
      </div>
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "6rem",
          }}
        >
          <h1>
            <span className="font-jean-luc-thin">R</span>
            <span className="font-simplon-bp-mono">e</span>
            <span className="font-simplon-bp-mono">i</span>
            <span className="font-simplon-bp-mono">n</span>
            <span className="font-simplon-bp-mono">v</span>
            <span className="font-gt-alpina-bold">e</span>
            <span className="font-simplon-bp-mono">n</span>
            <span className="font-gt-alpina-bold">t</span>
            <span className="font-gt-alpina-bold">a</span>
            <span className="font-simplon-bp-mono">n</span>
            <span className="font-simplon-bp-mono">d</span>
            <span className="font-gt-alpina-bold">o</span>
          </h1>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "100vh",
          width: "100%",
        }}
      >
        <div
          style={{
            padding: "0 10rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "3rem",
            textAlign: "center",
          }}
        >
          <h2 className="font-gt-alpina-bold ">
            la cocina mexicana <br />a un nuevo extremo que
            <br /> no ha sido explorado
          </h2>
        </div>
      </div>
    </section>
  );
};
