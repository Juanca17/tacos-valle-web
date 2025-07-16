"use client";

import FixedLogo from "../components/FixedLogo";
import { useDidIntersect } from "../components/useDidIntersect";
import { SOCIAL_LINKS } from "../config";

const HeadingButtons = ({ hidden }) => {
  const linkClass = "hover:text-[#FF4200] hover:underline cursor-pointer";

  return (
    <div
      className={`fixed z-20 w-screen px-4 md:px-12 flex justify-between font-jean-luc-thin top-links transition-opacity duration-700 ease-in-out ${
        hidden ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ top: "38px", color: "#FF4200" }}
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

const HeadingLogo = ({ hidden, cerrosilla }) => {
  const cerrosillaStyle = {
    bottom: "38px",
  };
  return (
    <div
      className={`fixed z-20 w-screen flex justify-center transition-opacity duration-700 ease-in-out ${
        hidden ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={
        cerrosilla
          ? cerrosillaStyle
          : {
              bottom: "0",
              background: "#EAE8DF",
              paddingBottom: "2rem",
              paddingTop: "2rem",
            }
      }
    >
      <FixedLogo
        className="fixed-logo"
        color={cerrosilla ? "#fff" : "#FF4200"}
      />
    </div>
  );
};

export const GlobalFrame = () => {
  const shouldHide = useDidIntersect(["tacos_tacos_tacos", "links"]);
  const heading = useDidIntersect(["heading"]);
  // const cerrosilla = useDidIntersect(["cerrosilla"]);

  return (
    <>
      <HeadingButtons hidden={shouldHide} />
      <HeadingLogo hidden={shouldHide} heading={heading} />
    </>
  );
};
