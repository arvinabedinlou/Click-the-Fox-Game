import { Routes, Route } from "react-router-dom";
import NoMatch from "./components/404/NoMatch";
import Home from "./view/welcome-screen/WelcomeScreen";
import Game from "./view/game-screen/Game";
import Scoreboard from "./view/scoreboard/ScoreBoard";

export default function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="game" element={<Game />} />
        <Route path="scoreboard" element={<Scoreboard />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}
