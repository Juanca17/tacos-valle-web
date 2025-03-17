"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { DndContext } from "@dnd-kit/core";
import DraggableComponent from "./components/DraggableComponent";
import { basePath } from "./config";
import { Sucursales } from "./sections/Sucursales";
import { Heading } from "./sections/Heading";
import { AboutUs } from "./sections/AboutUs";
import { Mosaic } from "./sections/Mosaic";

export default function Page() {
  const armaTuMesaRef = useRef(null);
  const initialPositions = {
    box1: {
      x: 974.5,
      y: 411.9001775527345,
    },
    box2: {
      x: 1075.5,
      y: 413.1000980351563,
    },
    box3: {
      x: 0,
      y: 0,
    },
    box4: {
      x: 1075.5,
      y: 413.1000980351563,
    },
    box5: {
      x: 1075.5,
      y: 413.1000980351563,
    },
    box6: {
      x: 1075.5,
      y: 413.1000980351563,
    },
    box7: {
      x: 1075.5,
      y: 413.1000980351563,
    },
    box8: {
      x: 1075.5,
      y: 413.1000980351563,
    },
  };
  const [positions, setPositions] = useState(initialPositions);
  const [isPositionsLoaded, setIsPositionsLoaded] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Solo ejecutamos esto en el cliente
    const checkIsMobile = () => window.innerWidth < 800;
    setIsMobile(checkIsMobile());

    const handleResize = () => {
      setIsMobile(checkIsMobile());
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // useEffect(() => {
  //   if (tacosPlaceholder.current && armaPlaceholder.current) {
  //     const { offsetLeft, offsetTop } = tacosPlaceholder.current;
  //     const { offsetLeft: armaLeft, offsetTop: armaTop } =
  //       armaPlaceholder.current;

  //     // Establece la posición inicial con respecto a offsetLeft y offsetTop
  //     setPositions({
  //       box1: { x: offsetLeft, y: offsetTop },
  //       box2: { x: offsetLeft + 100, y: offsetTop }, // Separa los tacos

  //       box3: { x: armaLeft + 600, y: armaTop + 300 },
  //       box4: { x: armaLeft + 1100, y: armaTop + 100 },
  //       box5: { x: armaLeft + 450, y: armaTop + 40 },
  //       box6: { x: armaLeft + 750, y: armaTop + 100 },
  //       box7: { x: armaLeft + 100, y: armaTop + 200 },
  //       box8: { x: armaLeft + 400, y: armaTop + 250 },
  //     });
  //   }
  // }, []);

  useEffect(() => {
    if (armaTuMesaRef.current) {
      const { offsetTop, offsetLeft } = armaTuMesaRef.current;

      // Ajusta la posición de box3 dentro de la sección "arma-tu-mesa"
      setPositions((prev) => ({
        ...prev,
        box3: { x: offsetLeft + 10, y: offsetTop + 10 }, // Margen de 50px dentro de la sección
      }));
      setIsPositionsLoaded(true);
    }
  }, []);

  const handleDragEnd = (event) => {
    const { delta, active } = event;
    const id = active.id;

    if (positions?.[id]) {
      setPositions((prevPositions) => {
        const newX = Math.max(
          0,
          Math.min(window.innerWidth - 20, prevPositions[id].x + delta.x)
        );
        const newY = Math.max(
          0,
          Math.min(
            document.body.scrollHeight - 20,
            prevPositions[id].y + delta.y
          ) // Considera toda la página
        );

        return {
          ...prevPositions,
          [id]: { x: newX, y: newY },
        };
      });
    }
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        minHeight: "200vh",
        overflow: "hidden",
      }}
    >
      <DndContext onDragEnd={handleDragEnd}>
        <Heading />
        <AboutUs />
        <Mosaic />
        <Sucursales />

        <DraggableComponent
          id="box3"
          position={positions.box3}
          src={`${basePath}/images/mesa/ASADA.png`}
          alt="Taco"
          width={isMobile ? 80 : 150}
          height={isMobile ? 80 : 150}
          visible={isPositionsLoaded}
        />
        <section
          id="arma-tu-mesa"
          className="relative w-full h-[110vh] flex items-center justify-center"
          style={{ background: "#E9471F" }}
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
