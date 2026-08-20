// Cycles through short phrases with a fade/slide. Pure CSS animation + timer.
import { useEffect, useState } from "react";

export function RotatingText({
  items,
  interval = 2200,
  className = "",
}: {
  items: readonly string[];
  interval?: number;
  className?: string;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (items.length < 2) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % items.length), interval);
    return () => window.clearInterval(id);
  }, [items.length, interval]);

  if (items.length === 0) return null;

  return (
    <span className={`inline-flex overflow-hidden align-bottom ${className}`}>
      <span key={index} className="rotate-in">
        {items[index]}
      </span>
    </span>
  );
}
