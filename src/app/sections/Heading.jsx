import { Button } from "../components/Button";
import LogoAnimated from "../components/LogoAnimated";

const HeadingButtons = () => {
  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-3 gap-2"
      style={{ marginTop: "150px", width: "90vw" }}
    >
      <div className="flex justify-center items-center text-2xl sm:text-sm md:text-xl lg:text-2xl my-2">
        <a
          href="https://www.instagram.com/tacosdelvalle"
          target="_blank"
          rel="noopener noreferrer"
          className="font-gt-alpina-bold text_button_white"
        >
          <Button label="Contacto" />
        </a>
      </div>
      <div className="flex justify-center items-center text-2xl sm:text-sm md:text-xl lg:text-2xl my-2">
        <a
          href="https://drive.google.com/file/d/161W8El6JeQlMk8Md-xxvyFn85FI1cNm-/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button label="Menú" />
        </a>
      </div>
      <div className="flex justify-center items-center text-2xl sm:text-sm md:text-xl lg:text-2xl my-2">
        <a
          href="#sucursales"
          className="flex items-center font-gt-alpina-bold text_button_white"
        >
          <Button label="Sucursales" />
        </a>
      </div>
    </div>
  );
};

export const Heading = () => {
  return (
    <>
      <header
        className="w-full h-screen flex items-center justify-center"
        style={{ background: "#FF4200" }}
      >
        <div className="flex flex-col items-center justify-center space-y-4">
          <LogoAnimated className="logo" />
          <HeadingButtons />
        </div>
      </header>
    </>
  );
};
