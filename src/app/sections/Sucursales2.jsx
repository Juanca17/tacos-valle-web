import { SUCURSALES_INFO } from "../config";

const chunkArray = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

export const Sucursales2 = () => {
  const sucursalesEnPares = chunkArray(SUCURSALES_INFO, 2);

  return (
    <section
      id="sucursales"
      className="min-h-[110vh] bg-[#ff3c00] px-4 py-16 flex flex-col items-center justify-center gap-12"
    >
      {sucursalesEnPares.map((grupo, idx) => (
        <div
          key={idx}
          className={`flex flex-col md:flex-row justify-center items-center gap-y-10 md:gap-x-20 w-full`}
        >
          {grupo.map((sucursal, i) => (
            <div
              key={i}
              className="bg-white rounded-[80px] px-6 py-12 text-center w-[300px] md:w-[420px] shadow-lg"
            >
              <p className="text-lg font-jean-luc-thin text-black uppercase tracking-wide mb-8">
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
              <a
                href={sucursal.link}
                className="underline text-black hover:text-[#ff3c00] transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                Abrir Mapa
              </a>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};
