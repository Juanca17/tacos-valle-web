import { Sucursal } from "../components/Sucursal";

export const Sucursales = () => {
  return (
    <section
      id="sucursales"
      className="w-full min-h-[110vh] flex items-center justify-center py-8"
      style={{ background: "#F5ECEA" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-28 md:gap-4 my-24 sucursal_container">
        <Sucursal
          calle="Río Tamazunchale"
          numero={280}
          linea2="COLONIA DEL VALLE, 66220"
          linea3="SAN PEDRO GARZA GARCÍA"
          url="https://maps.app.goo.gl/1PAZXAVjuxwNeXM36"
        />
        <Sucursal
          calle="Av. Álvaro Obregón"
          numero={130}
          linea2="ROMA NORTE, 06700"
          linea3="CUAUHTÉMOC CDMX"
          url="https://maps.app.goo.gl/cQz7L489LWN8R5NP8"
        />
      </div>
    </section>
  );
};
