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
    </section>
  );
};
