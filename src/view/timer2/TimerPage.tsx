import { useEffect, useRef, useState } from "react";

const CountDownTimer = () => {
  const [timer, setTimer] = useState<number>(30);
  const [start, setStart] = useState<boolean>(false);
  const tick = useRef<any>();
  const timerFunc = () => {
    if (start) {
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
  }, [start]);
  return (
    <>
      {timer >= 0 ? (
        <div
          style={{
            width: "100%",
            height: "400px",
            color: "red",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            onClick={() => {
              setStart(true);
            }}
          >
            start
          </button>
          <button
            onClick={() => {
              setStart(false);
            }}
          >
            stop
          </button>
          <div>timer :{timer}</div>
        </div>
      ) : (
        <div>expierd</div>
      )}
    </>
  );
};

export default CountDownTimer;
