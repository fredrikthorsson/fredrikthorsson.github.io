import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { useEffect, useState } from "react";

import styles from "./counter.module.css";

dayjs.extend(duration);

type CounterProps = {
  sinceDate: string;
};

export default function Counter({ sinceDate }: CounterProps) {
  const [timeSince, setTimeSince] = useState("");

  useEffect(() => {
    const update = () => {
      const now = dayjs();
      const start = dayjs(sinceDate);
      const diff = dayjs.duration(now.diff(start));

      const formatted = `${diff.months()}m ${diff.days()}d ${diff.hours()}h ${diff.minutes()}m ${diff.seconds()}s`;
      setTimeSince(formatted);
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [sinceDate]);

  return (
    <div className={styles.container}>
      <h1>Time spent sittin' around</h1>
      <h3>{timeSince}</h3>
    </div>
  );
}
