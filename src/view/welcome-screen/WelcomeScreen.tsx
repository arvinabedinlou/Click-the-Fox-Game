import React, { useEffect, useState } from "react";
import Column from "../../components/ui/column/Column";
import SizedBox from "../../components/ui/sized-box/SizedBox";
import useDebounce from "../../utils/debounce";
import { useNavigate } from "react-router-dom";
import "./index.css";

const Home = () => {
  const [enable, setEnable] = useState(true);
  const [name, setName] = useState<string>("");
  const [show, setShow] = useState<boolean>(false);
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

  const navigate = useNavigate();
  const goToGame = () => {
    navigate("/game", { state: { name } });
  };
  return (
    <div>
      <Column>
        <SizedBox height={200} width="50%" backgroundColor={"#E8E2E2"}>
          Click the Fox! Game
        </SizedBox>
        <SizedBox height={50} width="50%" backgroundColor={"#E8E2E2"}>
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
        <SizedBox height={50} width="50%" backgroundColor={"#E8E2E2"}>
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
        <SizedBox height={200} width="50%" backgroundColor={"#E8E2E2"}>
          <button disabled={enable} className="welcome-btn" onClick={goToGame}>
            Play
          </button>
        </SizedBox>
      </Column>
    </div>
  );
};
export default Home;
