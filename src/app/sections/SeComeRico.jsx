import { basePath } from "../config";

export const SeComeRico = () => {
  return (
    <section
      className="relative h-[65vh] md:h-[120vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url('${basePath}/images/se_come_rico_bg.png')`,
      }}
    >
      {/* Elipse blanca (simula el trazo) */}
      <div
        className="absolute w-[80%] h-[25%] md:w-[45%] md:h-[35%] border border-white rounded-[50%] pointer-events-none"
        style={{ borderWidth: "1px" }}
        aria-hidden="true"
      />

      {/* Texto centrado */}
      <div className="relative text-white text-center">
        <h2 className="text-4xl md:text-[5.5rem] md:mb-8 font-gt-alpina-bold-italic">
          Aquí
        </h2>
        <h1 className="text-5xl md:text-[5.5rem] uppercase font-jean-luc-thin">
          SE COME RICO
        </h1>
        <p className="text-lg md:text-[1.8rem] mt-2 font-gt-alpina-bold">
          @TacosDelValle
        </p>
      </div>
    </section>
  );
};
