"use client";

import { useDraggable } from "@dnd-kit/core";
import { useState } from "react";
import Image from "next/image";

export default function DraggableComponent({
  id,
  position,
  src,
  alt,
  width,
  height,
  visible = true,
}) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });

  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = () => setIsDragging(true);
  const handleDragEnd = () => setIsDragging(false);

  const style = {
    position: "absolute",
    left: `${position.x}px`,
    top: `${position.y}px`,
    transform: transform
      ? `translate(${transform.x}px, ${transform.y}px)`
      : "none",
    zIndex: 200,
    touchAction: "none",
    willChange: "transform",
    width: "auto",
    height: "auto",
    display: visible ? "block" : "none",
  };

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      onMouseDown={handleDragStart} // Detecta cuando empieza a arrastrarse
      onMouseUp={handleDragEnd}
      style={style}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        style={{
          objectFit: "contain",
          maxWidth: "unset",
          maxHeight: "unset",
          filter: isDragging
            ? "drop-shadow(0px 15px 25px rgba(0, 0, 0, 0.8))" // Sombra más intensa al arrastrar
            : "drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.1))", // Sombra más sutil cuando está quieto
          transition: "filter 0.2s ease-in-out",
        }}
      />
    </div>
  );
}
