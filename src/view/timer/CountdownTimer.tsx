import React from "react";
import DateTimeDisplay from "./TimeDisplay";
import { useCountdown } from "./Hooks/useCountdown";

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};
const ShowCounter = ({ seconds }: any) => {
  return (
    <div className="show-counter">
      <DateTimeDisplay value={seconds} type={"Seconds"} />
    </div>
  );
};

const CountdownTimer = ({ targetDate }: any) => {
  const [seconds] = useCountdown(targetDate);

  if (seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return <ShowCounter seconds={seconds} />;
  }
};

export default CountdownTimer;
