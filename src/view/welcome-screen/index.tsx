import React from "react";
import Column from "../../components/ui/column/Column";
import SizedBox from "../../components/ui/sized-box/SizedBox";

const Home = () => {
  return (
    <div>
      <Column>
        <SizedBox height={200} width="50%" backgroundColor={"#E8E2E2"}>
          Click the Fox! Game
        </SizedBox>
      </Column>
    </div>
  );
};
export default Home;
