import { basePath } from "../config";

export const CerroSilla = () => {
  return (
    <section
      className="relative h-[110vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url('${basePath}/images/cerro_silla_bg.png')`,
      }}
    ></section>
  );
};
