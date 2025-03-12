"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Logo from "./components/Logo";
import { Sucursal } from "./components/Sucursal";
import { DndContext } from "@dnd-kit/core";
import { Button } from "./components/Button";
import DraggableComponent from "./components/DraggableComponent";

export default function Page() {
  const tacosPlaceholder = useRef(null);
  const initialPositions = {
    box1: {
      x: 974.5,
      y: 411.9001775527345,
    },
    box2: {
      x: 1075.5,
      y: 413.1000980351563,
    },
  };
  const [positions, setPositions] = useState(initialPositions);

  const [bounds, setBounds] = useState({ maxX: 0, maxY: 0 });

  useEffect(() => {
    const updateBounds = () => {
      setBounds({
        maxX: window.innerWidth - 20,
        maxY: window.innerHeight - 20,
      });
    };

    updateBounds();
    window.addEventListener("resize", updateBounds);
    return () => window.removeEventListener("resize", updateBounds);
  }, []);

  useEffect(() => {
    if (tacosPlaceholder.current) {
      const { offsetLeft, offsetTop } = tacosPlaceholder.current;

      // Establece la posición inicial con respecto a offsetLeft y offsetTop
      setPositions({
        box1: { x: offsetLeft, y: offsetTop },
        box2: { x: offsetLeft + 100, y: offsetTop }, // Separa los tacos
      });
    }
  }, []);

  const handleDragEnd = (event) => {
    if (!event.delta || !event.active) return;

    const id = event.active.id; // Identificar qué elemento fue movido

    setPositions((prev) => {
      const newX = Math.min(
        Math.max(prev[id].x + event.delta.x, 0),
        bounds.maxX
      );
      const newY = Math.min(
        Math.max(prev[id].y + event.delta.y, 0),
        bounds.maxY
      );

      const newPositions = { ...prev, [id]: { x: newX, y: newY } };

      // Guardar posiciones en localStorage
      localStorage.setItem("draggable-positions", JSON.stringify(newPositions));

      return newPositions;
    });
  };

  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsHeaderVisible(scrollTop < 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ overflow: "hidden" }}>
      <header
        className={`fixed top-0 left-0 w-full py-2 transition-transform duration-300 ${
          isHeaderVisible
            ? "transform translate-y-0"
            : "transform -translate-y-full"
        }`}
        style={{ maxHeight: "60px" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="flex justify-center items-center text-2xl sm:text-sm md:text-xl lg:text-2xl">
            <a
              href="https://www.instagram.com/tacosdelvalle"
              target="_blank"
              rel="noopener noreferrer"
              className="font-gt-alpina-bold text_button_white"
            >
              <Button label="Contacto" />
            </a>
          </div>
          <div className="flex justify-center items-center text-2xl sm:text-sm md:text-xl lg:text-2xl">
            <a
              href="https://drive.google.com/file/d/161W8El6JeQlMk8Md-xxvyFn85FI1cNm-/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button label="Menú" />
            </a>
          </div>
          <div className="flex justify-center items-center text-2xl sm:text-sm md:text-xl lg:text-2xl">
            <a
              href="#sucursales"
              className="flex items-center font-gt-alpina-bold text_button_white"
            >
              <Button label="Sucursales" />
            </a>
          </div>
        </div>
      </header>

      <DndContext onDragEnd={handleDragEnd}>
        <section
          className="w-full h-[100vh] flex items-center justify-center"
          style={{ background: "#E9471F" }}
        >
          <div style={{ width: "40%" }}>
            <Logo className="w-200 h-200" />
          </div>
        </section>

        <section
          className="relative w-full h-[120vh]"
          style={{ background: "#F5ECEA" }}
        >
          <div
            className="text-2xl sm:text-sm md:text-md lg:text-2xl"
            style={{
              paddingTop: "5rem",
              color: "#020304",
              lineHeight: "3.5rem",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-4">
              <div
                style={{
                  paddingTop: "4rem",
                  paddingLeft: "6rem",
                }}
              >
                <div style={{ width: "15rem" }}>
                  <Image
                    src="/images/about-us/botella.png"
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
              <div
                style={{
                  paddingTop: "6rem",
                  textAlign: "center",
                }}
              >
                <div>
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
                    ref={tacosPlaceholder}
                    className="inline-flex"
                    style={{ padding: "20px 100px" }}
                  >
                    <DraggableComponent
                      id="box1"
                      position={positions.box1}
                      setPosition={setPositions}
                    >
                      <Image
                        src="/images/about-us/taco1.png"
                        alt="Taco"
                        width={100}
                        height={100}
                        className="h-auto w-100"
                      />
                    </DraggableComponent>
                    <DraggableComponent
                      id="box2"
                      position={positions.box2}
                      setPosition={setPositions}
                    >
                      <Image
                        src="/images/about-us/taco2.png"
                        alt="Taco"
                        width={100}
                        height={100}
                        className="h-auto w-100"
                      />
                    </DraggableComponent>
                  </span>
                  , <br />
                  pero nos gusta{" "}
                  <span className="font-gt-alpina-bold">
                    mezclar sabores,
                    <br /> texturas y jugar con lo típico
                  </span>
                </div>
              </div>
              <div
                className="flex flex-col justify-end items-end"
                style={{
                  paddingTop: "4rem",
                  paddingRight: "6rem",
                }}
              >
                <div style={{ width: "10rem" }}>
                  <Image
                    src="/images/about-us/limon.png"
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

        <section
          className="relative w-full h-[150vh]"
          style={{ background: "#E9471F" }}
        >
          <div style={{ position: "absolute", top: "100px" }}>
            <Image
              src="/images/reinventando/re1.png"
              alt="Taco"
              width={350}
              height={350}
              className="h-auto w-100"
            />
          </div>
          <div style={{ position: "absolute", top: "210px", left: "140px" }}>
            <Image
              src="/images/reinventando/re2.png"
              alt="Taco"
              width={350}
              height={350}
              className="h-auto w-100"
            />
          </div>
          <div style={{ position: "absolute", top: "10px", left: "500px" }}>
            <Image
              src="/images/reinventando/re3.png"
              alt="Taco"
              width={200}
              height={200}
              className="h-auto w-100"
            />
          </div>
          <div style={{ position: "absolute", top: "100px", right: "500px" }}>
            <Image
              src="/images/reinventando/re4.png"
              alt="Taco"
              width={150}
              height={150}
              className="h-auto w-100"
            />
          </div>
          <div style={{ position: "absolute", top: "50px", right: "50px" }}>
            <Image
              src="/images/reinventando/re5.png"
              alt="Taco"
              width={350}
              height={350}
              className="h-auto w-100"
            />
          </div>
          <div style={{ position: "absolute", top: "60vh", right: "36vw" }}>
            <Image
              src="/images/reinventando/re6.png"
              alt="Taco"
              width={350}
              height={350}
              className="h-auto w-100"
            />
          </div>
          <div style={{ position: "absolute", bottom: "10vh", right: "10vw" }}>
            <Image
              src="/images/reinventando/re7.png"
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

        <section
          id="sucursales"
          className="w-full h-[110vh] flex items-center justify-center"
          style={{ background: "#F5ECEA" }}
        >
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-4 my-24"
            style={{ width: "80%", color: "#020304", textAlign: "center" }}
          >
            <Sucursal
              calle="Río Tamazunchale"
              numero={280}
              linea2="COLONIA DEL VALLE, 66220"
              linea3="SAN PEDRO GARZA GARCÍA"
              url="https://maps.app.goo.gl/1PAZXAVjuxwNeXM36"
            />
            <Sucursal
              calle="Av. Álvaro Obregón"
              numero={130}
              linea2="ROMA NORTE, 06700"
              linea3="CUAUHTÉMOC CDMX"
              url="https://maps.app.goo.gl/cQz7L489LWN8R5NP8"
            />
          </div>
        </section>

        <section
          className="relative w-full h-[110vh] flex items-center justify-center"
          style={{ background: "#E9471F" }}
        >
          <div style={{ width: "60%", maxWidth: "100%", maxHeight: "100%" }}>
            <Image
              src="/images/star.png"
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
      </DndContext>

      <footer className="bg-[#020304] py-4 px-6 text-center">
        <p className="text-white">
          &copy; {new Date().getFullYear()} Tacos del Valle. Todos los derechos
          reservados.
        </p>
      </footer>
    </div>
  );
}
