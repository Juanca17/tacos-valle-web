"use client";

import FixedLogo from "../components/FixedLogo";
import { useHideOnIntersect } from "../components/useHideOnIntersect";
import { SOCIAL_LINKS } from "../config";

const HeadingButtons = ({ hidden }) => {
  const linkClass = "hover:text-[#FF4200] hover:underline cursor-pointer";

  return (
    <div
      className={`fixed z-20 w-screen px-4 md:px-12 flex justify-between font-jean-luc-thin top-links transition-opacity duration-700 ease-in-out ${
        hidden ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ top: "38px", color: "white" }}
    >
      <div className="space-x-2 text-[1rem] sm:text-[1.5rem]">
        <a
          href={SOCIAL_LINKS.FACEBOOK}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          FACEBOOK
        </a>
        /
        <a
          href={SOCIAL_LINKS.INSTAGRAM}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          INSTAGRAM
        </a>
        /
        <a
          href={SOCIAL_LINKS.TIKTOK}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          TIKTOK
        </a>
      </div>
      <div className="text-[1rem] sm:text-[1.5rem]">
        <a href="#sucursales" className={linkClass}>
          UBICACIONES
        </a>
      </div>
    </div>
  );
};

const HeadingLogo = ({ hidden }) => {
  return (
    <div
      className={`fixed z-20 w-screen flex justify-center transition-opacity duration-700 ease-in-out ${
        hidden ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ bottom: "38px" }}
    >
      <FixedLogo className="fixed-logo" />
    </div>
  );
};

export const GlobalFrame = () => {
  const shouldHide = useHideOnIntersect(["tacos_tacos_tacos", "links"]);

  return (
    <>
      <HeadingButtons hidden={shouldHide} />
      <HeadingLogo hidden={shouldHide} />
    </>
  );
};
