import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import Column from "../../components/ui/column/Column";
import Container from "../../components/ui/container/Container";
import SizedBox from "../../components/ui/sized-box/SizedBox";
import "./ScoreBoard.css";

const ScoreBoard: React.FC = () => {
  const [results, setResults] = useState<any>([]);
  const playerResult = useLocation();
  useEffect(() => {
    setResults((prevState: any) => {
      return [...prevState, { ...playerResult.state.playerData }];
    });
  }, [playerResult.state.playerData]);

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
                  <th>Scor</th>
                </tr>

                {results.map((item: any, index: number) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.playerInfo.state?.name}</td>
                      <td>{item.playerInfo.state?.formattedDate}</td>
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
              <Link to="/game" state={results[0]?.playerInfo.state}>
                <button className="welcome-btn">Play!</button>
              </Link>
            </Container>
          </Column>
        </SizedBox>
      </Column>
    </>
  );
};
export default ScoreBoard;
