import "@testing-library/jest-dom/extend-expect";
import { screen, render, fireEvent } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WelcomeScreen from "../WelcomeScreen";

const WelcomeScreenComponent = (
  <BrowserRouter>
    <WelcomeScreen />
    <Routes>
      <Route path="/game">game page</Route>
    </Routes>
  </BrowserRouter>
);

describe("Check Welcome screen component actions", () => {
  test("Check the button to be disabled in first entrance", () => {
    render(WelcomeScreenComponent);

    const button = screen.getByRole("button", { name: /play/i });
    expect(button).toHaveAttribute("disabled");
  });

  test("Check the button to be disable just after typing (testing debounce action)", () => {
    render(WelcomeScreenComponent);

    const input = screen.getByRole("textbox", {
      name: /name:/i,
    });
    fireEvent.change(input, { target: { value: "Arvin Abedinlou" } });
    const button = screen.getByRole("button", { name: /play/i });
    expect(button).toHaveAttribute("disabled");
  });

  jest.setTimeout(30000);
  test("Check the button to be *enable after 3 seconds delay typing (testing debounce)", async () => {
    render(WelcomeScreenComponent);

    const input = screen.getByRole("textbox", {
      name: /name:/i,
    });
    fireEvent.change(input, { target: { value: "Arvin Abedinlou" } });
    const button = screen.getByRole("button", { name: /play/i });
    await new Promise((r) => setTimeout(r, 3000));
    fireEvent.click(button);
  });

  test("Check the display to show players name after typing (testing debounce)", async () => {
    const name = "Arvin Abedinlou";
    const { container } = render(
      <BrowserRouter>
        <WelcomeScreen />
      </BrowserRouter>
    );

    const input = screen.getByRole("textbox", {
      name: /name:/i,
    });
    fireEvent.change(input, { target: { value: name } });
    await new Promise((r) => setTimeout(r, 4000));
    const button = screen.getByRole("button", { name: /play/i });
    expect(container).toHaveTextContent(`Hello ${name}`);
    fireEvent.click(button);
  });

  test("Check the button to be disabled again after clicking on players name )", async () => {
    const name = "Arvin Abedinlou";
    render(
      <BrowserRouter>
        <WelcomeScreen />
      </BrowserRouter>
    );

    const input = screen.getByRole("textbox", {
      name: /name:/i,
    });
    fireEvent.change(input, { target: { value: name } });
    await new Promise((r) => setTimeout(r, 100));
    const playersName = screen.getByText(/Hello/i);
    fireEvent.click(playersName);
    const button = screen.getByRole("button", { name: /play/i });
    expect(button).toHaveAttribute("disabled");
  });

  test("Check the button to be enabled again after writing something new on input )", async () => {
    const name = "Arvin Abedinlou";
    const newName = "Ariyo Abedinlou";
    render(
      <BrowserRouter>
        <WelcomeScreen />
      </BrowserRouter>
    );

    const input = screen.getByRole("textbox", {
      name: /name:/i,
    });
    fireEvent.change(input, { target: { value: name } });
    await new Promise((r) => setTimeout(r, 1500));
    const playersName = screen.getByText(/Hello/i);
    fireEvent.click(playersName);
    fireEvent.change(input, { target: { value: newName } });
    await new Promise((r) => setTimeout(r, 3000));
    const button = screen.getByRole("button", { name: /play/i });
    expect(button).toBeEnabled();
  });
});
