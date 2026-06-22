import { useEffect, useState } from "react";

/**
 * Live wall-clock for a given IANA timezone, formatted like "5:08 PM".
 * Mirrors the Hero's location/time chip on the original site (Riga, Latvia).
 */
export function useLiveClock(timeZone = "Europe/Riga"): string {
  const fmt = () =>
    new Intl.DateTimeFormat("en-US", {
      timeZone,
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }).format(new Date());

  const [time, setTime] = useState(fmt);

  useEffect(() => {
    const id = setInterval(() => setTime(fmt()), 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeZone]);

  return time;
}
