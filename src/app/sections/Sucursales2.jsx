import { SUCURSALES_INFO } from "../config";
// min-w-[80vw] md:min-w-[360px]
const SucursalItem = ({ sucursal }) => {
  return (
    <div className="bg-[#EAE8DF] rounded-[80px] min-w-[80vw] md:min-w-[360px] w-[80vw] sm:w-[420px] min-h-[500px] px-6 py-12 text-center shadow-lg">
      <p className="text-lg font-jean-luc-thin text-black uppercase tracking-wide mb-8 mt-12">
        {sucursal.nombre}
      </p>
      <h2 className="text-4xl font-gt-alpina-bold text-[#ff3c00] mb-2">
        {sucursal.calle}
      </h2>
      <h3 className="text-4xl font-gt-alpina-bold text-[#ff3c00] mb-2">
        {sucursal.numero}
      </h3>
      <p className="text-4xl font-jean-luc-thin text-[#ff3c00] mb-1">
        {sucursal.colonia}
      </p>
      <p className="text-4xl text-[#ff3c00] mb-8">
        <span className="font-gt-alpina-bold">{sucursal.cp} </span>
        <span className="font-jean-luc-thin">{sucursal.ciudad}</span>
      </p>
      {sucursal.link ? (
        <a
          href={sucursal.link}
          className="underline text-black hover:text-[#ff3c00] transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          Abrir Mapa
        </a>
      ) : null}
    </div>
  );
};

export const Sucursales2 = () => {
  const alignCenter =
    SUCURSALES_INFO?.length < 4 ? "items-center justify-center" : "";
  return (
    <section
      id="sucursales"
      className="min-h-[110vh] bg-[#ff3c00] px-4 py-16 flex flex-col items-center justify-center gap-12"
    >
      <div className="flex flex-col gap-10 w-full md:gap-16">
        <div
          className={`flex md:flex-row flex-col overflow-x-auto ${alignCenter} scrollbar-hide gap-10 md:gap-16 w-full px-2 md:px-6`}
        >
          {SUCURSALES_INFO.map((sucursal, index) => (
            <SucursalItem key={index} sucursal={sucursal} />
          ))}
        </div>
      </div>
    </section>
  );
};
