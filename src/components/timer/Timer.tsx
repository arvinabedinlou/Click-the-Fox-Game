import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { saveResult } from "../../store/features/resultSlice";
import { useAppDispatch } from "../../store/store";

const CountDownTimer: React.FC<{ startTime: boolean; playerData?: any }> = ({
  startTime,
  playerData,
}) => {
  const [timer, setTimer] = useState<number>(30);
  const tick = useRef<any>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

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

  const playerResult = {
    score: playerData.score,
    name: playerData.playerInfo.state?.name,
    date: playerData.playerInfo.state?.formattedDate,
  };

  if (timer <= 0) {
    dispatch(saveResult(playerResult));
    navigate("/scoreboard");
  }
  console.log(playerData);
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
