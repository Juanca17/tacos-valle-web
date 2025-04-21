export const MarqueeOrange = () => {
  const palabras = ["TACOS", "BOTANAS", "CERVEZAS"];
  // Creamos un array de 10 repeticiones de ["TACOS","BOTANAS","CERVEZAS"] y lo aplanamos
  const repeatedWords = Array(10).fill(palabras).flat();

  return (
    <section
      className="w-full h-32 overflow-hidden flex items-center relative"
      style={{ background: "#FF4200" }}
    >
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex">
            {repeatedWords.map((text, index) => (
              <span
                key={`${i}-${index}`}
                className="font-jean-luc-thin text-[2.5rem] sm:text-[4rem] mx-8 inline-block text-white"
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
