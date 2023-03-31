import { render, fireEvent } from "@testing-library/react";
import Calculator from "../components/Calculator";

export const buttons = [
  { id: 1, btn: "AC" },
  { id: 2, btn: "+/-" },
  { id: 3, btn: "%" },
  { id: 4, btn: "÷" },
  { id: 5, btn: "7" },
  { id: 6, btn: "8" },
  { id: 7, btn: "9" },
  { id: 8, btn: "x" },
  { id: 9, btn: "4" },
  { id: 10, btn: "5" },
  { id: 11, btn: "6" },
  { id: 12, btn: "-" },
  { id: 13, btn: "1" },
  { id: 14, btn: "2" },
  { id: 15, btn: "3" },
  { id: 16, btn: "+" },
  { id: 17, btn: "0" },
  { id: 18, btn: "." },
  { id: 19, btn: "=" },
];

it("<Calculator /> should do the correct user interactions on pressing the key buttons", () => {
  const calcBody = render(<Calculator buttons={buttons} />);
  fireEvent.click(calcBody.getByText("AC"));
  fireEvent.click(calcBody.getByText("1"));
  fireEvent.click(calcBody.getByText("+"));
  fireEvent.click(calcBody.getByText("1"));
  fireEvent.click(calcBody.getByText("="));

  const displayValue = document.getElementById("input").value.trim();
  expect(calcBody).toMatchSnapshot();
  expect(displayValue).toBe("2");
});
