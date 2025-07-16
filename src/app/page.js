"use client";

import React, { useEffect, useRef, useState } from "react";
import { DndContext } from "@dnd-kit/core";
import DraggableComponent from "./components/DraggableComponent";
import { basePath } from "./config";
import { Heading2 } from "./sections/Heading2";
import { Tagline } from "./sections/Tagline";
import { Sucursales2 } from "./sections/Sucursales2";
import { SeComeRico } from "./sections/SeComeRico";
import { TacosTacosTacos } from "./sections/TacosTacosTacos";
import { Links } from "./sections/Links";
import { CerroSilla } from "./sections/CerroSilla";
import { MarqueeWhite2 } from "./sections/MarqueeWhite2";
import { GlobalFrame } from "./sections/GlobalFrame";
// import { LogoSection } from "./sections/LogoSection";
import { SeoSection } from "./sections/SeoSection";

export default function Page() {
  const taglineRef = useRef(null);
  const armaTuMesaRef = useRef(null);
  const initialPositions = {
    tagline1: {
      x: 0,
      y: 0,
    },
    tagline2: {
      x: 0,
      y: 0,
    },
    tagline3: {
      x: 0,
      y: 0,
    },
    tagline4: {
      x: 0,
      y: 0,
    },
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
  const [isTagLinePositionsLoaded, setIsTaglinePositionsLoaded] =
    useState(false);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Solo ejecutamos esto en el cliente
    const checkIsMobile = () => window.innerWidth < 640;
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
    if (taglineRef.current && !isTagLinePositionsLoaded) {
      const windowIsMobile = window.innerWidth < 800;
      const { offsetTop, offsetLeft } = taglineRef.current;

      const mobilePositions = {
        tagline1: { x: offsetLeft + 30, y: offsetTop + 189 },
        tagline2: { x: offsetLeft + 217, y: offsetTop + 364 },
        tagline3: { x: offsetLeft + 206, y: offsetTop + 197 },
        tagline4: { x: offsetLeft + 59, y: offsetTop + 351 },
      };
      const regularPositions = {
        tagline1: { x: offsetLeft + 10, y: offsetTop + 250 },
        tagline2: { x: offsetLeft + 350, y: offsetTop + 270 },
        tagline3: { x: offsetLeft + 700, y: offsetTop + 250 },
        tagline4: { x: offsetLeft + 1100, y: offsetTop + 220 },
      };
      setPositions((prev) => ({
        ...prev,
        ...(windowIsMobile ? mobilePositions : regularPositions),
      }));
      setIsTaglinePositionsLoaded(true);
    }

    if (armaTuMesaRef.current && !isPositionsLoaded) {
      const windowIsMobile = window.innerWidth < 800;
      const { offsetTop, offsetLeft } = armaTuMesaRef.current;

      const mobilePositions = {
        box1: { x: offsetLeft + 271, y: offsetTop + 67 },
        box2: { x: offsetLeft + 118, y: offsetTop + 213 },
        box3: { x: offsetLeft + 6, y: offsetTop + 63 },
        box4: { x: offsetLeft + 1, y: offsetTop + 286 },
        box5: { x: offsetLeft + 123, y: offsetTop + 452 },
        box6: { x: offsetLeft + 215, y: offsetTop + 616 },
        box7: { x: offsetLeft + 223, y: offsetTop + 311 },
        box8: { x: offsetLeft + 24, y: offsetTop + 477 },
      };
      const regularPositions = {
        box1: { x: offsetLeft + 1189, y: offsetTop + 123 },
        box2: { x: offsetLeft + 828, y: offsetTop + 232 },
        box3: { x: offsetLeft + 661, y: offsetTop + 492 },
        box4: { x: offsetLeft + 516, y: offsetTop + 107 },
        box5: { x: offsetLeft + 1052, y: offsetTop + 503 },
        box6: { x: offsetLeft + 91, y: offsetTop + 541 },
        box7: { x: offsetLeft + 132, y: offsetTop + 113 },
        box8: { x: offsetLeft + 437, y: offsetTop + 397 },
      };
      setPositions((prev) => ({
        ...prev,
        ...(windowIsMobile ? mobilePositions : regularPositions),
      }));
      setIsPositionsLoaded(true);
    }
  }, [taglineRef, isTagLinePositionsLoaded, armaTuMesaRef, isPositionsLoaded]);

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
        <GlobalFrame />
        <Heading2 isMobile={isMobile} />
        {/* <LogoSection /> */}
        <Tagline ref={taglineRef} />
        <MarqueeWhite2 />
        <Sucursales2 />
        <SeComeRico />
        <TacosTacosTacos isMobile={isMobile} ref={armaTuMesaRef} />
        <Links />
        <CerroSilla />
        <SeoSection />

        {/* <DraggableComponent
          id="tagline1"
          position={positions.tagline1}
          src={`${basePath}/images/tagline/tagline1.png`}
          alt="Taco de asada"
          width={isMobile ? 150 : 300}
          height={isMobile ? 150 : 300}
          visible={isPositionsLoaded}
        />
        <DraggableComponent
          id="tagline2"
          position={positions.tagline2}
          src={`${basePath}/images/tagline/tagline2.png`}
          alt="Espiro-papas"
          width={isMobile ? 150 : 300}
          height={isMobile ? 150 : 300}
          visible={isPositionsLoaded}
        />
        <DraggableComponent
          id="tagline3"
          position={positions.tagline3}
          src={`${basePath}/images/tagline/tagline3.png`}
          alt="Pastor"
          width={isMobile ? 150 : 300}
          height={isMobile ? 150 : 300}
          visible={isPositionsLoaded}
        />
        <DraggableComponent
          id="tagline4"
          position={positions.tagline4}
          src={`${basePath}/images/tagline/tagline4.png`}
          alt="Pastor negro"
          width={isMobile ? 150 : 300}
          height={isMobile ? 150 : 300}
          visible={isPositionsLoaded}
        /> */}

        <DraggableComponent
          id="box1"
          position={positions.box1}
          src={`${basePath}/images/mesa/CAGUAMITA.png`}
          alt="Taco de asada"
          width={isMobile ? 80 : 150}
          height={isMobile ? 80 : 150}
          visible={isPositionsLoaded}
        />
        <DraggableComponent
          id="box2"
          position={positions.box2}
          src={`${basePath}/images/mesa/ORDEN_TOMPRO.png`}
          alt="Espiro-papas"
          width={isMobile ? 150 : 300}
          height={isMobile ? 150 : 300}
          visible={isPositionsLoaded}
        />
        <DraggableComponent
          id="box3"
          position={positions.box3}
          src={`${basePath}/images/mesa/ASADA.png`}
          alt="Taco de asada"
          width={isMobile ? 150 : 300}
          height={isMobile ? 150 : 300}
          visible={isPositionsLoaded}
        />
        <DraggableComponent
          id="box4"
          position={positions.box4}
          src={`${basePath}/images/mesa/ESPIRO_PAPAS.png`}
          alt="Espiro-papas"
          width={isMobile ? 150 : 300}
          height={isMobile ? 150 : 300}
          visible={isPositionsLoaded}
        />
        <DraggableComponent
          id="box5"
          position={positions.box5}
          src={`${basePath}/images/mesa/PASTOR.png`}
          alt="Pastor"
          width={isMobile ? 150 : 300}
          height={isMobile ? 150 : 300}
          visible={isPositionsLoaded}
        />
        <DraggableComponent
          id="box6"
          position={positions.box6}
          src={`${basePath}/images/mesa/PASTOR_NEGRO.png`}
          alt="Pastor negro"
          width={isMobile ? 150 : 300}
          height={isMobile ? 150 : 300}
          visible={isPositionsLoaded}
        />
        <DraggableComponent
          id="box7"
          position={positions.box7}
          src={`${basePath}/images/mesa/TIJUANITA.png`}
          alt="Pastor negro"
          width={isMobile ? 150 : 300}
          height={isMobile ? 150 : 300}
          visible={isPositionsLoaded}
        />
        <DraggableComponent
          id="box8"
          position={positions.box8}
          src={`${basePath}/images/mesa/HORCHATA.png`}
          alt="Pastor negro"
          width={isMobile ? 80 : 120}
          height={isMobile ? 80 : 120}
          visible={isPositionsLoaded}
        />
      </DndContext>
    </div>
  );
}
