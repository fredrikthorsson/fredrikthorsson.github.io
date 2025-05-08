import dayjs from "dayjs";

export default function Counter() {
  const now = dayjs().get("year");
  return <div>{now}</div>;
}
