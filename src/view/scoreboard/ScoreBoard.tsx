import React, { useEffect, useState } from "react";
import Column from "../../components/ui/column/Column";
import SizedBox from "../../components/ui/sized-box/SizedBox";
import useDebounce from "../../utils/debounce";
import "./index.css";

const ScoreBoard: React.FC = () => {
  ;


  useEffect(() => {
   
  }, []);
  return (
    <>
      <Column>
        <SizedBox height={400} width="50%" backgroundColor={"#EFF5F5"}>
          <Column>
            <h2>Score Board</h2>
            <table>
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Date</th>
                <th>Score</th>
              </tr>
              <tr>
                <td>1</td>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
              </tr>
              <tr>
                <td>2</td>
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
export default ScoreBoard;
