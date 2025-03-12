"use client";

import { useDraggable } from "@dnd-kit/core";

export default function DraggableComponent({ id, position, ...props }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={{
        position: "absolute",
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: transform
          ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
          : "none",
      }}
    >
      {props.children}
    </div>
  );
}
