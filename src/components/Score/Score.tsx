import { useEffect, useState } from "react";

const Score: React.FC<{ item: any; changeScore: any }> = ({
  item,
  changeScore,
}) => {
  const [score, setScore] = useState<number>(-1);

  useEffect(() => {
    if (item.type === "dog" || item.type === "cat") {
      setScore(score - 1);
    } else {
      setScore(score + 1);
    }
  }, [item]);
  useEffect(() => {
    changeScore(score);
  }, [score]);
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
        <div>Score : {score}</div>
      </div>
    </>
  );
};

export default Score;
