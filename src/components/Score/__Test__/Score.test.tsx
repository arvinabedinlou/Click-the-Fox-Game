// import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom/extend-expect";
import { screen, render } from "@testing-library/react";
import picturesMock from "../../../mocks/pictures.json";
import Score from "../Score";

describe("Show Score component", () => {
  test("Score component should render", () => {
    render(
      <Score
        item={picturesMock[0]}
        changeScore={(e: number) => {
          return 0;
        }}
      />
    );
    const divElement = screen.getByText(/Score :/i);
    expect(divElement).toBeInTheDocument();
  });

  test("Passing fox show render 0 (initial value is -1)", () => {
    render(
      <Score
        item={picturesMock[0]}
        changeScore={(e: number) => {
          return 0;
        }}
      />
    );
    const divElement = screen.getByText(/Score : 0/i);
    expect(divElement).toBeInTheDocument();
  });

  test("Passing dog should render -2 (initial value is -1)", () => {
    render(
      <Score
        item={picturesMock[1]}
        changeScore={(e: number) => {
          return 0;
        }}
      />
    );
    const divElement = screen.getByText(/Score : -2/i);
    expect(divElement).toBeInTheDocument();
  });

  test("Passing cat should render -2 (initial value is -1)", () => {
    render(
      <Score
        item={picturesMock[2]}
        changeScore={(e: number) => {
          return 0;
        }}
      />
    );
    const divElement = screen.getByText(/Score : -2/i);
    expect(divElement).toBeInTheDocument();
  });
});
