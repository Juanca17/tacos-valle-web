import { Button } from "../components/Button";
import Logo from "../components/Logo";

export const Heading = () => {
  return (
    <>
      <header
        className={`py-4 md:static md:translate-y-0 md:transition-none`}
        style={{ maxHeight: "60px", background: "#E9471F" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="flex justify-center items-center text-2xl sm:text-sm md:text-xl lg:text-2xl ">
            <a
              href="https://www.instagram.com/tacosdelvalle"
              target="_blank"
              rel="noopener noreferrer"
              className="font-gt-alpina-bold text_button_white"
            >
              <Button label="Contacto" />
            </a>
          </div>
          <div className="flex justify-center items-center text-2xl sm:text-sm md:text-xl lg:text-2xl">
            <a
              href="https://drive.google.com/file/d/161W8El6JeQlMk8Md-xxvyFn85FI1cNm-/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button label="Menú" />
            </a>
          </div>
          <div className="flex justify-center items-center text-2xl sm:text-sm md:text-xl lg:text-2xl">
            <a
              href="#sucursales"
              className="flex items-center font-gt-alpina-bold text_button_white"
            >
              <Button label="Sucursales" />
            </a>
          </div>
        </div>
      </header>

      <section
        className="w-full h-[96vh] flex items-center justify-center"
        style={{ background: "#E9471F" }}
      >
        <div>
          <Logo className="logo" />
        </div>
      </section>
    </>
  );
};
