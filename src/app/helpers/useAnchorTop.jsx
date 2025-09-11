import { useEffect, useState } from "react";

function getEl(id) {
  return typeof document !== "undefined" ? document.getElementById(id) : null;
}

/**
 * Devuelve true cuando el borde superior del anchor
 * cae DENTRO del rango vertical de cualquiera de los targets.
 * - offset: ajusta virtualmente el "top" del anchor (px). Positivo = empuja hacia abajo.
 * - tolerance: margen en px para "tocar" bordes sin exigir igualdad exacta.
 */
export function useAnchorTopWithinSections(
  targetIds,
  anchorId,
  { offset = 0, tolerance = 1 } = {}
) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const anchor = getEl(anchorId);
    const targets = targetIds.map(getEl).filter(Boolean);
    if (!anchor || targets.length === 0) return;

    let ticking = false;

    const check = () => {
      ticking = false;

      const a = anchor.getBoundingClientRect();
      // Top virtual del anchor (permite adelantar/atrasar el trigger)
      const anchorTop = a.top + offset;

      const isInsideAny = targets.some((t) => {
        const r = t.getBoundingClientRect();

        // Considera “tocar” con tolerancia
        const topWithin = anchorTop >= r.top - tolerance;
        const bottomWithin = anchorTop <= r.bottom + tolerance;

        return topWithin && bottomWithin;
      });

      setActive(isInsideAny);
    };

    const onScrollOrResize = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(check);
      }
    };

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    const ro = new ResizeObserver(onScrollOrResize);
    ro.observe(anchor);
    targets.forEach((t) => ro.observe(t));

    check(); // inicial

    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      ro.disconnect();
    };
  }, [anchorId, targetIds.join("|"), offset, tolerance]);

  return active;
}
