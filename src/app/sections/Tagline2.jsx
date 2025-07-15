export const Tagline = ({ ref }) => {
  return (
    <section
      className="w-full min-h-[120vh]"
      style={{ background: "#FF4200" }}
      ref={ref}
    >
      <div
        className="relative w-full flex flex-col items-center justify-center"
        style={{ top: "5rem" }}
      >
        <p className="font-gt-alpina-bold-italic tagline-title">
          Tacos Buenos & Ricos
        </p>
        <p className="tagline-subtitle">Del Norte de México</p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-20 justify-items-center">
        <div className="w-full max-w-xs bg-white p-4 rounded shadow">
          Elemento 1
        </div>
        <div className="w-full max-w-xs bg-white p-4 rounded shadow">
          Elemento 2
        </div>
        <div className="w-full max-w-xs bg-white p-4 rounded shadow">
          Elemento 3
        </div>
        <div className="w-full max-w-xs bg-white p-4 rounded shadow">
          Elemento 4
        </div>
      </div>
    </section>
  );
};
