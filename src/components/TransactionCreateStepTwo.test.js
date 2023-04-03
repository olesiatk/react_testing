import TransactionCreateStepTwo from "./TransactionCreateStepTwo";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

test("if an abount and note is entered the button becomes enable", async () => {
  render(<TransactionCreateStepTwo sender={{ id: "5" }} receiver={{ id: "6" }} />);

  expect(await screen.findByRole("button", { name: /pay/i })).toBeDisabled();

  userEvent.type(screen.getByPlaceholderText(/amount/i), "50");
  userEvent.type(screen.getByPlaceholderText(/add a note/i), "dinner");

  expect(await screen.findByRole("button", { name: /pay/i })).toBeEnabled();
});
