import { useEffect, useRef } from "react";

export function useDebouncedEffect(
  effect: () => void,
  deps: any[],
  delay: number,
) {
  const timeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    clearTimeout(timeout.current);
    timeout.current = setTimeout(effect, delay);
    return () => clearTimeout(timeout.current);
  }, deps);
}
