import { Sucursal } from "../components/Sucursal";

export const Sucursales = () => {
  return (
    <section
      id="sucursales"
      className="w-full min-h-[110vh] flex items-center justify-center py-8"
      style={{ background: "#FDD93D" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-28 md:gap-4 my-24 sucursal_container">
        <Sucursal
          calle="Río Tamazunchale"
          numero={280}
          linea2="COLONIA DEL VALLE, 66220"
          linea3="SAN PEDRO GARZA GARCÍA, NL"
          url="https://maps.app.goo.gl/1PAZXAVjuxwNeXM36"
        />
        <Sucursal
          calle="Av. Álvaro Obregón"
          numero={130}
          linea2="ROMA NORTE, 06700"
          linea3="CUAUHTÉMOC, CDMX"
          url="https://maps.app.goo.gl/cQz7L489LWN8R5NP8"
        />
        <Sucursal
          calle="Plaza Via Cordillera, Eje Interior"
          numero={11}
          linea2="Cordillera Residencial Fase Uno, 66196"
          linea3="SANTA CATARINA, NL"
          url="https://maps.app.goo.gl/fQksFWxN15tDdeoL9"
        />
        <Sucursal
          calle="Arboleda, Av. del Roble"
          numero={660}
          linea2="Valle del Campestre, 66265"
          linea3="SAN PEDRO GARZA GARCÍA, NL"
          url="https://maps.app.goo.gl/rrAxSmqhSLR6jkLm6"
        />
      </div>
    </section>
  );
};
