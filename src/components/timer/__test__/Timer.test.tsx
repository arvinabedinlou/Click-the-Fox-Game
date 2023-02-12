import "@testing-library/jest-dom/extend-expect";
import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Timer from "../Timer";

describe("Check Timer component actions", () => {
  test("Check the Timer is stop with passing false", () => {
    render(
      <BrowserRouter>
        <Timer startTime={true} />
      </BrowserRouter>
    );
    const divElement = screen.getByText(/Time Left :30/i);
    expect(divElement).toBeInTheDocument();
  });

  jest.setTimeout(30000);

  test("check the timer will run if pass start time={true} , with 1 second delay", async () => {
    render(
      <BrowserRouter>
        <Timer startTime={true} />
      </BrowserRouter>
    );
    await new Promise((r) => setTimeout(r, 2000));
    const divElement = screen.getByText(/Time Left :29/i);
    expect(divElement).toBeInTheDocument();
  });

  test("check the timer will *not run if pass start time={false} , with 2 second delay", async () => {
    render(
      <BrowserRouter>
        <Timer startTime={false} />
      </BrowserRouter>
    );
    await new Promise((r) => setTimeout(r, 3000));
    const divElement = screen.getByText(/Time Left :30/i);
    expect(divElement).toBeInTheDocument();
  });

  test("check the timer will run and renders: 20 if pass start time={true} , with 10 second delay", async () => {
    render(
      <BrowserRouter>
        <Timer startTime={true} />
      </BrowserRouter>
    );
    await new Promise((r) => setTimeout(r, 11000));
    const divElement = screen.getByText(/Time Left :20/i);
    expect(divElement).toBeInTheDocument();
  });
});
