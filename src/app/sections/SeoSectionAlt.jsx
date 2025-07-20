import { basePath } from "../config";

export const SeoSection = () => {
  return (
    <section
      id="seosection"
      className="min-h-[120vh] bg-[#EAE8DF] flex flex-col justify-center items-center text-center"
    >
      <div className="py-[12rem] w-[90%] md:w-[60%] text-xl md:text-[2.8rem] font-gt-alpina-bold">
        <p className="text-black leading-snug">
          <span>
            En Tacos Del Valle nos encanta experimentar y reinventar un poco la
            cocina mexicana. Aquí, cada taco es único, mezclando sabores y
            texturas que te sorprenderán. Nuestro espacio también es especial,
            transportándote a la era dorada de las cenadurías en México con un
            ambiente nostálgico y acogedor.
          </span>
        </p>
        <p className="mt-[4rem]text-black leading-snug">
          <span>
            Además de nuestra serie de tres trompos que son, el trompo de carne
            asada, que es de carne premium de res; el trompo rojo, pork belly
            marinado, ¡ojo! Acá son trompos y no pastor; y el especial “Trompo
            Negro Fuego”: Cerdo y pork belly con un toque de cenizas negras y
            nuestro marinado especial.
          </span>
        </p>
      </div>
    </section>
  );
};
