import React from "react";
import {screen, render, cleanup, fireEvent } from "@testing-library/react";
import App from "App";

afterEach(cleanup);

describe("App", () => {
  it("renders without crashing", () => {
    render(<App />);
  });

  it("renders the heading properly", () => {
    render(<App />);
    expect(screen.getByText("Coding Languages")).toBeTruthy();
  });

  it("renders the list with 6 items", () => {
    render(<App />);

    const listItems = screen.getAllByTestId("language");

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
    render(<App />);

    const randomizeButton = screen.getByText("Randomize");

    expect(randomizeButton).toBeTruthy();
  });

  it("onClick shuffles the list items", () => {
    render(<App />);
    fireEvent.click(screen.getByText(/Randomize/i));
    const listItems = screen.getAllByTestId("language");

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
