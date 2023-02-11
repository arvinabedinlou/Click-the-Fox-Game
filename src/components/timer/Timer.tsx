import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";

const CountDownTimer: React.FC<{ startTime: boolean; playerData?: any }> = ({
  startTime,
  playerData,
}) => {
  const [timer, setTimer] = useState<number>(30);
  const tick = useRef<any>();

  // There is another good approach for handling this part which I will show it to you
  const timerFunc = () => {
    if (startTime) {
      tick.current = setInterval(() => {
        setTimer((timer) => timer - 1);
      }, 1000);
    } else {
      clearInterval(tick.current);
    }
    return () => clearInterval(tick.current);
  };
  useEffect(() => {
    timerFunc();
  }, [startTime]);

  const navigate = useNavigate();
  if (timer <= 0) {
    navigate("/scoreboard", { state: { playerData } });
  }
  return (
    <>
      <div
        style={{
          width: "100%",
          color: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>Time Left :{timer} </div>
      </div>
    </>
  );
};

export default CountDownTimer;
