import React from "react";
import { Link } from "react-router-dom";
import Column from "../../components/ui/column/Column";
import Container from "../../components/ui/container/Container";
import SizedBox from "../../components/ui/sized-box/SizedBox";
import { saveResult } from "../../store/features/resultSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import "./ScoreBoard.css";

const ScoreBoard: React.FC = () => {
  const dispatch = useAppDispatch();
  const results = useAppSelector((state) => state.results.result);
  const startNewGame = () => {
    dispatch(saveResult({ ...results[results.length - 1] }));
  };
  return (
    <>
      <Column>
        <SizedBox height={400} width="50%" backgroundColor={"#EFF5F5"}>
          <Column>
            <h2>Score Board</h2>
            <table>
              <tbody>
                <tr>
                  <th>Rank</th>
                  <th>Name</th>
                  <th>Date</th>
                  <th>Score</th>
                </tr>

                {results.map((item: any, index: number) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.date}</td>
                      <td>{item.score}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <Container justifyContent="space-around" marginTop={20}>
              <Link to="/">
                <button className="welcome-btn">To Welcome Screen</button>
              </Link>
              <Link to="/game">
                <button className="welcome-btn" onClick={startNewGame}>
                  Play!
                </button>
              </Link>
            </Container>
          </Column>
        </SizedBox>
      </Column>
    </>
  );
};
export default ScoreBoard;
