import Image from "next/image";

export const HeadingImage = ({ src, alt, imgClass = "" }) => {
  return (
    <div className="absolute inset-0">
      {/* Imagen anterior (estática) */}
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover absolute inset-0 transition-opacity duration-300 ${imgClass}`}
      />
    </div>
  );
};
