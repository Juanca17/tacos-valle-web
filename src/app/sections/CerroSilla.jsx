import { basePath } from "../config";

export const CerroSilla = () => {
  return (
    <section
      id="cerrosilla"
      className="relative h-[50vh] md:h-[110vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url('${basePath}/images/cerro_silla_bg.webp')`,
      }}
    ></section>
  );
};
