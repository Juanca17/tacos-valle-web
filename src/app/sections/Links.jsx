import { LINKS, SOCIAL_LINKS } from "../config";

export const Links = () => {
  const linkClass = "hover:underline cursor-pointer";

  return (
    <section
      id="links"
      className="h-[100vh] bg-[#EAE8DF] flex flex-col justify-center items-center text-center px-4"
    >
      <div className="space-y-2">
        <h2 className="text-3xl md:text-[2.8rem] font-gt-alpina-bold text-black leading-snug">
          <span>
            <a
              href={LINKS.MENU}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              Menú
            </a>
          </span>
          <br />
          <span>
            <a
              href={LINKS.RAPPI}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              Rappi
            </a>
          </span>
          <br />
          <span>
            <a
              href={LINKS.PEDIDOS_A_DOMICILIO}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              Pedidos a domicilio
            </a>
          </span>
          <br />
          <span>
            <a
              href={LINKS.PICK_GO}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              Pick & Go
            </a>
          </span>
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-12 text-2xl md:text-[6rem] leading-snug font-jean-luc-thin text-[#ff3c00]">
        <a
          href={SOCIAL_LINKS.FACEBOOK}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          FACEBOOK
        </a>
        <a
          href={SOCIAL_LINKS.INSTAGRAM}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          INSTAGRAM
        </a>
        <a
          href={SOCIAL_LINKS.TIKTOK}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          TIKTOK
        </a>
      </div>

      <p className="text-sm mt-16 text-black font-mono">
        &copy; TACOS del VALLE {new Date().getFullYear()}. Todos los derechos
        reservados.
      </p>
    </section>
  );
};
