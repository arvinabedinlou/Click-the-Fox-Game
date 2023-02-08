import React from "react";
import CountdownTimer from "./CountdownTimer";

const Main = () => {
  const THERTEEN_SECONDS = 30 * 1000;
  const NOW_IN_MS = new Date().getTime();
  const dateTimeAfterThreeDays = NOW_IN_MS + THERTEEN_SECONDS;
  return (
    <div>
      <CountdownTimer targetDate={dateTimeAfterThreeDays} />
    </div>
  );
};
export default Main;
