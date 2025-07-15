import { useEffect, useState } from "react";

export function useDidIntersect(targetIds) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observers = [];
    const targets = targetIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (targets.length === 0) return;

    const callback = (entries) => {
      const anyVisible = entries.some((entry) => entry.isIntersecting);
      setIsIntersecting(anyVisible);
    };

    const observer = new IntersectionObserver(callback, {
      threshold: 0,
    });

    targets.forEach((el) => observer.observe(el));
    observers.push(observer);

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [targetIds]);

  return isIntersecting;
}
