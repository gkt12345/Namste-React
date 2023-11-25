import { render, screen } from "@testing-library/react";
import ResCard from "../ResCard";
import Mock_Data from "../mockData/resCardMock.json";
import "@testing-library/jest-dom";

it("Should load Restaurant Cart With Data", () => {
  render(<ResCard resInfo={Mock_Data} />);
  const name = screen.getByText("Vadilal Ice Creams");
  expect(name).toBeInTheDocument();
});
