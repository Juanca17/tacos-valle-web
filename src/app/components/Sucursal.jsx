"use client";

import { Button } from "./Button";

export const Sucursal = (props) => {
  const { calle, numero, linea2, linea3, url } = props;
  return (
    <div className="lg:my-16 px-4 py-36 md:py-0 sucursal_componente">
      <p className="font-gt-alpina-bold">
        {calle} <span className="circulo_en_numero">#{numero}</span>
      </p>
      <p
        className="font-jean-luc-thin"
        style={{ marginTop: "0.5rem", lineHeight: "2rem" }}
      >
        {linea2}
      </p>
      <p className="font-jean-luc-thin" style={{ lineHeight: "2.5rem" }}>
        {linea3}
      </p>
      <p
        className="font-gt-alpina-bold"
        style={{ marginTop: "2rem", lineHeight: "2.5rem" }}
      >
        Abierto
      </p>
      <p className="font-gt-alpina-bold" style={{ lineHeight: "2.5rem" }}>
        Lunes - Jueves
      </p>
      <p
        className="font-jean-luc-thin"
        style={{ marginBottom: "2rem", lineHeight: "2.5rem" }}
      >
        1:00 P.M. - 1:00 A.M.
      </p>
      <p className="font-gt-alpina-bold" style={{ lineHeight: "2.5rem" }}>
        Viernes - Sábado
      </p>
      <p
        className="font-jean-luc-thin"
        style={{ marginBottom: "2rem", lineHeight: "2.5rem" }}
      >
        1:00 P.M. - 2:00 A.M.
      </p>
      <p className="font-gt-alpina-bold" style={{ lineHeight: "2.5rem" }}>
        Domingo
      </p>
      <p
        className="font-jean-luc-thin"
        style={{ marginBottom: "2rem", lineHeight: "2.5rem" }}
      >
        1:00 P.M. - 11:00 P.M.
      </p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="font-gt-alpina-bold text_button"
      >
        <Button label="Mapa" />
      </a>
    </div>
  );
};
