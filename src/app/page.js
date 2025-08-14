"use client";

import React, { useEffect, useRef, useState } from "react";
import { DndContext } from "@dnd-kit/core";
import DraggableComponent from "./components/DraggableComponent";
import { basePath } from "./config";
import { Heading2 } from "./sections/Heading2";
import { Tagline } from "./sections/Tagline";
import { Sucursales2 } from "./sections/Sucursales2";
import { SeComeRico } from "./sections/SeComeRico";
import { Links } from "./sections/Links";
import { CerroSilla } from "./sections/CerroSilla";
import { MarqueeWhite2 } from "./sections/MarqueeWhite2";
import { GlobalFrame } from "./sections/GlobalFrame";
import { SeoSection } from "./sections/SeoSection";
import { GlobalFrameLogo } from "./sections/GlobalFrameLogo";
import { MesaSection } from "./sections/Mesa";

const draggableItems = [
  { id: "box1", file: "1_trompo.png", alt: "Trompo", size: [120, 400] },
  { id: "box2", file: "2_cebolla.png", alt: "Cebolla", size: [70, 200] },
  {
    id: "box3",
    file: "3_tamarindo.png",
    alt: "Tamarindo",
    size: [40, 100],
  },
  { id: "box4", file: "4_taco.png", alt: "Taco", size: [100, 300] },
  { id: "box5", file: "5_tostada.png", alt: "Tostada", size: [120, 350] },
  { id: "box6", file: "6_mixtos.png", alt: "Mixtos", size: [150, 400] },
  { id: "box7", file: "7_horchata.png", alt: "Horchata", size: [50, 150] },
  { id: "box8", file: "8_flautas.png", alt: "Flautas", size: [150, 400] },
];

export default function Page() {
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

  console.log("positions", positions);

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
    if (!armaTuMesaRef.current || isPositionsLoaded) return;

    const windowIsMobile = window.innerWidth < 800;

    const mobilePositions = {
      box1: { x: 234, y: 436 },
      box2: { x: 175.5, y: 394 },
      box3: { x: 137, y: 368.5 },
      box4: { x: 199.5, y: 325.5 },
      box5: { x: 277.5, y: 357.5 },
      box6: { x: -3, y: 370 },
      box7: { x: 349.5, y: 402.5 },
      box8: { x: 102, y: 441 },
    };

    const regularPositions = {
      box1: { x: 708, y: 746 },
      box2: { x: 607, y: 655 },
      box3: { x: 490, y: 615 },
      box4: { x: 706, y: 457 },
      box5: { x: 935, y: 552 },
      box6: { x: 81, y: 573 },
      box7: { x: 1161, y: 725 },
      box8: { x: 359, y: 775 },
    };

    // Posición absoluta del contenedor en la página
    const { offsetTop, offsetLeft } = armaTuMesaRef.current;

    const rect = armaTuMesaRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
    const containerTop = rect.top + scrollTop;
    const containerLeft = rect.left + scrollLeft;

    console.log("OFFSET", {
      offsetTop,
      offsetLeft,
      containerTop,
      containerLeft,
    });

    // Escoge posiciones segun el tamaño de ventana
    const sourcePositions = windowIsMobile ? mobilePositions : regularPositions;

    // Convierte de absolutos a relativos al contenedor
    const relativePositions = Object.fromEntries(
      Object.entries(sourcePositions).map(([key, pos]) => [
        key,
        {
          x: pos.x - offsetLeft,
          y: pos.y + offsetTop,
        },
      ])
    );

    setPositions((prev) => ({
      ...prev,
      ...relativePositions,
    }));
    setIsPositionsLoaded(true);
  }, [armaTuMesaRef, isPositionsLoaded]);

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
        <GlobalFrame isMobile={isMobile} />
        <GlobalFrameLogo isMobile={isMobile} />
        <Heading2 isMobile={isMobile} />
        <Tagline />
        <MarqueeWhite2 />
        <Sucursales2 />
        <SeComeRico />
        <MesaSection isMobile={isMobile} ref={armaTuMesaRef} />
        <Links />
        <CerroSilla />
        <SeoSection />

        {draggableItems.map(({ id, file, alt, size }) => (
          <DraggableComponent
            key={id}
            id={id}
            position={positions[id]}
            src={`${basePath}/images/mesa-2/${file}`}
            alt={alt}
            width={isMobile ? size[0] : size[1]}
            height={isMobile ? size[0] : size[1]}
            visible={isPositionsLoaded}
          />
        ))}
      </DndContext>
    </div>
  );
}
