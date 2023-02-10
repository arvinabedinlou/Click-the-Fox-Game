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
    <>
      <Column>
        <SizedBox height={400} width="50%" backgroundColor={"#EFF5F5"}>
          <Column>
            <h2>Score Board</h2>
            <table>
              <tr>
                <th>Rank</th>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
              </tr>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
              </tr>
              <tr>
                <td>Centro comercial Moctezuma</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
              </tr>
            </table>
          </Column>
        </SizedBox>
      </Column>
    </>
  );
};
export default Home;
