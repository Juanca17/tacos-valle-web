import Image from "next/image";
import { basePath } from "../config";
import { Sucursal } from "../components/Sucursal";

export const Sucursales2 = () => {
  const items = [
    {
      sucursal: {
        calle: "Río Tamazunchale",
        numero: 280,
        linea2: "COLONIA DEL VALLE, 66220",
        linea3: "SAN PEDRO GARZA GARCÍA, NL",
        url: "https://maps.app.goo.gl/1PAZXAVjuxwNeXM36",
      },
      image: "/images/sucursales/s1.jpg",
    },
    {
      sucursal: {
        calle: "Plaza Via Cordillera, Eje Interior",
        numero: 11,
        linea2: "Cordillera Residencial Fase Uno, 66196",
        linea3: "SANTA CATARINA, NL",
        url: "https://maps.app.goo.gl/fQksFWxN15tDdeoL9",
      },
      image: "/images/sucursales/s2.jpg",
    },
    {
      sucursal: {
        calle: "Arboleda, Av. del Roble",
        numero: 660,
        linea2: "Valle del Campestre, 66265",
        linea3: "SAN PEDRO GARZA GARCÍA, NL",
        url: "https://maps.app.goo.gl/rrAxSmqhSLR6jkLm6",
      },
      image: "/images/sucursales/s3.jpg",
    },
    {
      sucursal: {
        calle: "Av. Álvaro Obregón",
        numero: 130,
        linea2: "ROMA NORTE, 06700",
        linea3: "CUAUHTÉMOC, CDMX",
        url: "https://maps.app.goo.gl/cQz7L489LWN8R5NP8",
      },
      image: "/images/sucursales/s4.jpg",
    },
  ];

  return (
    <>
      {items.map((item, i) => (
        <section
          key={i}
          className={`
            w-full
            h-auto
            md:h-[150vh]
            flex flex-col
            ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"}
            relative
            overflow-visible       /* nada se recorta */
          `}
          style={{ background: "#FDD93D" }}
        >
          {/* BLOQUE SUCURSAL */}
          <div
            className="
              relative
              w-full md:w-1/2
              flex items-start justify-center
              text-center p-4
              text-black
              my-auto
            "
          >
            <Sucursal
              calle={item.sucursal.calle}
              numero={item.sucursal.numero}
              linea2={item.sucursal.linea2}
              linea3={item.sucursal.linea3}
              url={item.sucursal.url}
            />
          </div>

          {/* BLOQUE IMAGEN */}
          <div className="relative w-full md:w-1/2 overflow-hidden">
            {/* contenedor con aspect‑ratio en móvil y altura en md+ */}
            <div
              className="
                w-full
                h-0
                pb-[68%]
                md:pb-0
                md:h-full
                relative
              "
            >
              <Image
                src={`${basePath}${item.image}`}
                alt={item.sucursal.linea3}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>
      ))}
    </>
  );
};
