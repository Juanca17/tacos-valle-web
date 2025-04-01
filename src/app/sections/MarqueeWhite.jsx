export const MarqueeWhite = () => {
  return (
    <section
      className="w-full h-32 overflow-hidden flex items-center relative"
      style={{ background: "white", color: "#FF4200" }}
    >
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex">
            {Array(10)
              .fill("SUCURSALES")
              .map((text, index) => (
                <span
                  key={`${i}-${index}`}
                  className="font-jean-luc-thin text-[2.5rem] sm:text-[4rem] mx-8 inline-block"
                >
                  {text}
                </span>
              ))}
          </div>
        ))}
      </div>
    </section>
  );
};
