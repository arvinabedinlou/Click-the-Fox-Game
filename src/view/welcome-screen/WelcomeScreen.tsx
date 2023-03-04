import React, { useEffect, useState } from "react";
import Column from "../../components/ui/column/Column";
import SizedBox from "../../components/ui/sized-box/SizedBox";
import useDebounce from "../../hooks/useDebounce";
import { Link } from "react-router-dom";
import "./WelcomeScreen.css";
import { useAppDispatch } from "../../store/store";
import { saveResult } from "../../store/features/resultSlice";

const Home = () => {
  const [enable, setEnable] = useState(true);
  const [name, setName] = useState<string>("");
  const [show, setShow] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const debouncedValue = useDebounce<string>(name, 1500);
  const getName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  useEffect(() => {
    if (debouncedValue !== "") {
      setShow(true);
      setEnable(false);
    }
  }, [debouncedValue]);

  const goToGame = () => {
    const date = new Date();
    const formattedDate = date.toISOString().slice(0, 10);
    dispatch(saveResult({ name: name, date: formattedDate, score: 0 }));
  };
  return (
    <div>
      <Column>
        <SizedBox height={200} width="50%" backgroundColor={"#EFF5F5"}>
          Click the Fox! Game
        </SizedBox>
        <SizedBox height={50} width="50%" backgroundColor={"#EFF5F5"}>
          <div hidden={show}>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              id="name"
              name="name"
              className="welcome-name"
              onChange={(e) => {
                getName(e);
              }}
            />
          </div>
        </SizedBox>
        <SizedBox height={50} width="50%" backgroundColor={"#EFF5F5"}>
          <div
            hidden={!show}
            onClick={() => {
              setShow(false);
              setEnable(true);
            }}
          >
            <p>Hello {name} </p>
          </div>
        </SizedBox>
        <SizedBox height={200} width="50%" backgroundColor={"#EFF5F5"}>
          <Link to="/game">
            <button
              disabled={enable}
              className="welcome-btn"
              onClick={goToGame}
            >
              Play
            </button>
          </Link>
        </SizedBox>
      </Column>
    </div>
  );
};
export default Home;
