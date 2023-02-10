import { useEffect, useRef, useState } from "react";

const CountDownTimer: React.FC<{ startTime: any }> = ({ startTime }) => {
  const [timer, setTimer] = useState<number>(30000);
  const tick = useRef<any>();
  const timerFunc = () => {
    if (startTime) {
      tick.current = setInterval(() => {
        setTimer((timer) => timer - 4);
      }, 1);
    } else {
      console.log("clear interval");
      clearInterval(tick.current);
    }
    return () => clearInterval(tick.current);
  };
  useEffect(() => {
    timerFunc();
  }, [startTime]);
  return (
    <>
      {timer >= 0 ? (
        <div
          style={{
            width: "100%",
            color: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>Time Left  :{Math.round(timer / 1000)} </div>
        </div>
      ) : (
        <div
          style={{
            width: "100%",
            color: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          expierd
        </div>
      )}
    </>
  );
};

export default CountDownTimer;
