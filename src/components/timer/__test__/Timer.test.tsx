import "@testing-library/jest-dom/extend-expect";
import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Timer from "../Timer";

// jest.setTimeout(30000);
test("Check the Timer is stop with passing false", () => {
  render(
    <BrowserRouter>
      <Timer startTime={false} />
    </BrowserRouter>
  );

  const divElement = screen.getByText(/Time Left :30/i);
  expect(divElement).toBeInTheDocument();
});
