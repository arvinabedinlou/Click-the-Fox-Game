import { useEffect, useRef, useState } from "react";

const CountDownTimer: React.FC<{ startTime: any; setStartTime: any }> = ({
  startTime,
  setStartTime,
}) => {
  const [timer, setTimer] = useState<number>(30);
  const [start, setStart] = useState<boolean>(false);
  const tick = useRef<any>();
  const timerFunc = () => {
    if (startTime) {
      tick.current = setInterval(() => {
        setTimer((timer) => timer - 1);
      }, 1000);
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
            // height: "400px",
            color: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>timer :{timer}</div>
        </div>
      ) : (
        <div
          style={{
            width: "100%",
            // height: "400px",
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
