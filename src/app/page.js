"use client";

import React, { useEffect, useRef, useState } from "react";
import { DndContext } from "@dnd-kit/core";
import DraggableComponent from "./components/DraggableComponent";
import { basePath } from "./config";
import { Sucursales } from "./sections/Sucursales";
import { Heading } from "./sections/Heading";
import { AboutUs } from "./sections/AboutUs";
import { Mosaic } from "./sections/Mosaic";
import { ArmaTuMesa } from "./sections/ArmaTuMesa";

export default function Page() {
  const aboutUsTacosRef = useRef(null);
  const armaTuMesaRef = useRef(null);
  const initialPositions = {
    box1: {
      x: 0,
      y: 0,
    },
    box2: {
      x: 0,
      y: 0,
    },
    box3: {
      x: 0,
      y: 0,
    },
    box4: {
      x: 0,
      y: 0,
    },
    box5: {
      x: 0,
      y: 0,
    },
    box6: {
      x: 0,
      y: 0,
    },
    box7: {
      x: 0,
      y: 0,
    },
    box8: {
      x: 0,
      y: 0,
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

  useEffect(() => {
    if (
      aboutUsTacosRef.current &&
      armaTuMesaRef.current &&
      !isPositionsLoaded
    ) {
      const windowIsMobile = window.innerWidth < 800;
      const aboutOffsetTop =
        aboutUsTacosRef?.current?.offsetParent?.offsetTop +
        aboutUsTacosRef?.current?.offsetTop;
      const { offsetLeft: aboutOffsetLeft } = aboutUsTacosRef.current;
      const { offsetTop, offsetLeft } = armaTuMesaRef.current;

      // Ajusta la posición de box3 dentro de la sección "arma-tu-mesa"
      const mobilePositions = {
        box1: { x: aboutOffsetLeft + 10, y: aboutOffsetTop },
        box2: { x: aboutOffsetLeft + 100, y: aboutOffsetTop },
        box3: { x: offsetLeft + 10, y: offsetTop + 220 },
        box4: { x: offsetLeft + 60, y: offsetTop + 220 },
        box5: { x: offsetLeft + 110, y: offsetTop + 220 },
        box6: { x: offsetLeft + 160, y: offsetTop + 550 },
        box7: { x: offsetLeft + 210, y: offsetTop + 550 },
        box8: { x: offsetLeft + 260, y: offsetTop + 550 },
      };
      const regularPositions = {
        box1: { x: aboutOffsetLeft, y: aboutOffsetTop },
        box2: { x: aboutOffsetLeft + 100, y: aboutOffsetTop },
        box3: { x: offsetLeft + 510, y: offsetTop + 150 },
        box4: { x: offsetLeft + 710, y: offsetTop + 150 },
        box5: { x: offsetLeft + 910, y: offsetTop + 150 },
        box6: { x: offsetLeft + 100, y: offsetTop + 400 },
        box7: { x: offsetLeft + 310, y: offsetTop + 400 },
        box8: { x: offsetLeft + 510, y: offsetTop + 400 },
      };
      setPositions((prev) => ({
        ...prev,
        ...(windowIsMobile ? mobilePositions : regularPositions),
      }));
      setIsPositionsLoaded(true);
    }
  }, [aboutUsTacosRef, armaTuMesaRef, isPositionsLoaded]);

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
        <AboutUs
          aboutUsTacosRef={aboutUsTacosRef}
          isMobile={isMobile}
          setPositions={setPositions}
        />
        <Mosaic />
        <Sucursales />

        <DraggableComponent
          id="box1"
          position={positions.box1}
          src={`${basePath}/images/about-us/taco1.png`}
          alt="Taco"
          width={isMobile ? 80 : 100}
          height={isMobile ? 80 : 100}
          visible={isPositionsLoaded}
        />
        <DraggableComponent
          id="box2"
          position={positions.box2}
          src={`${basePath}/images/about-us/taco2.png`}
          alt="Taco"
          width={isMobile ? 80 : 100}
          height={isMobile ? 80 : 100}
          visible={isPositionsLoaded}
        />

        <DraggableComponent
          id="box3"
          position={positions.box3}
          src={`${basePath}/images/mesa/ASADA.png`}
          alt="Taco de asada"
          width={isMobile ? 80 : 150}
          height={isMobile ? 80 : 150}
          visible={isPositionsLoaded}
        />
        <DraggableComponent
          id="box4"
          position={positions.box4}
          src={`${basePath}/images/mesa/ESPIRO_PAPAS.png`}
          alt="Espiro-papas"
          width={isMobile ? 80 : 150}
          height={isMobile ? 80 : 150}
          visible={isPositionsLoaded}
        />
        <DraggableComponent
          id="box5"
          position={positions.box5}
          src={`${basePath}/images/mesa/PASTOR.png`}
          alt="Pastor"
          width={isMobile ? 80 : 150}
          height={isMobile ? 80 : 150}
          visible={isPositionsLoaded}
        />
        <DraggableComponent
          id="box6"
          position={positions.box6}
          src={`${basePath}/images/mesa/PASTOR_NEGRO.png`}
          alt="Pastor negro"
          width={isMobile ? 80 : 150}
          height={isMobile ? 80 : 150}
          visible={isPositionsLoaded}
        />
        <DraggableComponent
          id="box7"
          position={positions.box7}
          src={`${basePath}/images/mesa/TIJUANITA.png`}
          alt="Pastor negro"
          width={isMobile ? 80 : 150}
          height={isMobile ? 80 : 150}
          visible={isPositionsLoaded}
        />
        <DraggableComponent
          id="box8"
          position={positions.box8}
          src={`${basePath}/images/mesa/VASO.png`}
          alt="Pastor negro"
          width={isMobile ? 50 : 120}
          height={isMobile ? 50 : 120}
          visible={isPositionsLoaded}
        />
        <ArmaTuMesa armaTuMesaRef={armaTuMesaRef} />
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
