import { basePath } from "../config";

export const SeoSection = () => {
  return (
    <section
      id="seosection"
      className="min-h-[110vh] bg-[#EAE8DF] flex flex-col justify-center items-center text-center"
    >
      <div className="py-[9rem] md:py-[12rem] w-[90%] md:w-[80%] text-black text-md md:text-[1.8rem]">
        <p className="leading-snug">
          <span>
            En <span className="font-jean-luc-thin mr-3">Tacos Del Valle </span>{" "}
            nos encanta experimentar y reinventar <br />
            un poco la{" "}
            <span className="font-gt-alpina-bold">cocina mexicana</span>. Aquí,
            cada taco es{" "}
            <span className="font-champion-gothic-bold">único</span>,
            <br /> mezclando{" "}
            <span className="font-jean-luc-thin">sabores y texturas</span> que
            te sorprenderán.
          </span>
        </p>
        <p className="mt-[4rem] leading-snug">
          <span>
            Nuestro espacio también es especial,
            <br /> transportándote a la era dorada <br /> de las{" "}
            <span className="font-gt-alpina-bold">
              cenadurías en México
            </span>{" "}
            con un <br />
            ambiente nostálgico y acogedor.
          </span>
        </p>
        <p className="mt-[4rem] leading-snug">
          <span>
            Además de nuestra serie de tres trompos que son,
            <br /> el{" "}
            <span className="font-jean-luc-thin">trompo de carne asada</span>
            , que es de carne premium de res;
            <br /> el <span className="font-jean-luc-thin">trompo rojo</span>,
            pork belly marinado, <br />
            ¡ojo! Acá son trompos y no pastor;
            <br />y el especial{" "}
            <span className="font-jean-luc-thin">Trompo Negro Fuego</span>,
            cerdo y pork belly con un toque
            <br /> de cenizas negras y nuestro marinado especial.
          </span>
        </p>
        <p className="mt-[4rem] leading-snug">
          <span>
            Tenemos el famoso
            <br />
            <span className="font-jean-luc-thin">Tijuanita</span>!{" "}
            <span className="font-jean-luc-thin">Flautas</span>,{" "}
            <span className="font-jean-luc-thin">Espiropapas</span> & más!{" "}
          </span>
        </p>
      </div>
    </section>
  );
};
