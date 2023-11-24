import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// wraper for all test cases
describe("Contact Us page Test Cases", () => {
  test("should load contact us component", () => {
    render(<Contact />); // this render contact to dom

    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument();
  });

  test("should load button inside contact us component", () => {
    render(<Contact />); // this render contact to dom

    const button = screen.getByText("Submit"); //getByRole("button")

    // Assertion
    expect(button).toBeInTheDocument();
  });

  it("should load input inside contact us component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("name");

    // Assertion
    expect(inputName).toBeInTheDocument();
  });
});

// we can also write `it` insted of `test`
