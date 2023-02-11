// import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom/extend-expect";
import { screen, render } from "@testing-library/react";
import NoMatch from "../NoMatch";

test("should render message 404 in the page", () => {
  render(<NoMatch />);

  const divElement = screen.getByText(/The page not found!/i);
  expect(divElement).toBeInTheDocument();
});
