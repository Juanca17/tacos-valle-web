"use client";

import FixedLogo from "../components/FixedLogo";
import { useAnchorTopWithinSections } from "../components/useAnchorTop";
import { useDidIntersect } from "../components/useDidIntersect";

const HeadingLogo = ({ isMobile, hidden, shouldBeWhite }) => {
  return (
    <div
      id="headinglogo"
      className={`fixed z-20 w-screen flex justify-center transition-opacity duration-700 ease-in-out ${
        hidden ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{
        bottom: "0",
        background: isMobile ? "#EAE8DF" : "transparent",
        paddingBottom: isMobile ? "2rem" : "2rem",
        paddingTop: isMobile ? "2rem" : "2rem",
      }}
    >
      <FixedLogo
        className="fixed-logo"
        color={!isMobile && shouldBeWhite ? "white" : "#FF4200"}
      />
    </div>
  );
};

export const GlobalFrameLogo = ({ isMobile }) => {
  const shouldHide = useDidIntersect(["tacos_tacos_tacos", "links"]);
  // Blanco cuando el BORDE SUPERIOR del headinglogo esté dentro de las secciones
  const shouldBeWhite = useAnchorTopWithinSections(
    ["tagline", "sucursales", "secomerico"],
    "headinglogo",
    {
      offset: 0, // ajusta si tu logo tiene padding o quieres adelantar/atrasar el cambio
      tolerance: 2, // margen para considerar “tocar” el borde
    }
  );

  return (
    <HeadingLogo
      isMobile={isMobile}
      hidden={shouldHide}
      shouldBeWhite={shouldBeWhite}
    />
  );
};
