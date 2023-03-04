import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import NoMatch from "./components/404/NoMatch";
import { Provider } from "react-redux";
import { store } from "./store/store";
const Home = lazy(() => import("./view/welcome-screen/WelcomeScreen"));
const Game = lazy(() => import("./view/game-screen/Game"));
const ScoreBoard = lazy(() => import("./view/scoreboard/ScoreBoard"));

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <Suspense fallback={<div>...Loading</div>}>
          <Routes>
            <Route index element={<Home />} />
            <Route path="game" element={<Game />} />
            <Route path="scoreboard" element={<ScoreBoard />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </Suspense>
      </Provider>
    </div>
  );
}
