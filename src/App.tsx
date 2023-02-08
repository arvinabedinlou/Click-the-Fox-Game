import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import NoMatch from "./components/404/NoMatch";
import { ScoreBoard } from "./components/score-board/ScoreBoard";
import Home from "./view/welcome-screen";
import Game from "./view/game-screen";
import CountDownTimer from "./view/timer2/TimerPage";

export default function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="game" element={<Game />} />
        <Route path="score-board" element={<ScoreBoard />} />
        {/* <Route path="time" element={<CountDownTimer />} /> */}
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}
