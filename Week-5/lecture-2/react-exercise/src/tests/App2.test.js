/* eslint-disable testing-library/prefer-screen-queries */
import { cleanup, fireEvent, prettyDOM, render } from "@testing-library/react";
import App from "../App";

afterEach(cleanup);

describe("App", () => {
  it("renders without crashing", () => {
    render(<App />);
  });

  it("renders the heading properly", () => {
    const { getByText } = render(<App />);
    expect(getByText("Coding Languages")).toBeTruthy();
  });

  it("renders the list with 6 items", () => {
    const { container, getAllByTestId } = render(<App />);

    // console.log(prettyDOM(container));

    const listItems = getAllByTestId("language");

    expect(listItems).toBeTruthy();
    expect(listItems.length).toEqual(6);

    const codingLangauges = listItems.map((item) => item.innerHTML);

    expect(codingLangauges).toEqual([
      "Javascript",
      "C#",
      "Java",
      "Python",
      "C++",
      "Go"
    ]);
  });

  it("renders the button with text Randomize", () => {
    const { getByText } = render(<App />);

    const randomizeButton = getByText("Randomize");

    expect(randomizeButton).toBeTruthy();
  });

  it("onClick shuffles the list items", () => {
    const { getAllByTestId, getByText } = render(<App />);
    fireEvent.click(getByText(/Randomize/i));
    const listItems = getAllByTestId("language");

    const codingLangauges = listItems.map((item) => item.innerHTML);

    expect(codingLangauges).not.toEqual([
      "Javascript",
      "C#",
      "Java",
      "Python",
      "C++",
      "Go"
    ]);
  });
});
