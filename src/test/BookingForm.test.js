import { render, screen, fireEvent } from "@testing-library/react";
import { BookingForm } from "../components/BookingForm";

describe("BookingForm", () => {
  test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("BookingForm");
    expect(headingElement).toBeInTheDocument();
  })

  test("allows submitting the form when all required fields are valid", () => {
      const mockSubmit = jest.fn();
      const mockDispatch = jest.fn();

      render(
        <BookingForm
          availableTimes={["17:00", "18:00", "19:00"]}
          dispatch={mockDispatch}
          onSubmit={mockSubmit}
        />
      );

      fireEvent.change(screen.getByLabelText(/choose date/i), {
        target: { value: "2026-11-10" },
      });

      fireEvent.change(screen.getByLabelText(/choose time/i), {
        target: { value: "17:00" },
      });

      fireEvent.click(
        screen.getByRole("button", { name: /make your reservation/i })
      );

      expect(mockSubmit).toHaveBeenCalledTimes(1);
    });
})