
import { render, screen, fireEvent } from "@testing-library/react";
import { BookingForm } from "../components/BookingForm";

// Genera una fecha de mañana para evitar que las pruebas dependan
// de una fecha fija.
const getFutureDate = () => {
  const date = new Date();
  date.setDate(date.getDate() + 1);

  const offset = date.getTimezoneOffset();
  return new Date(date.getTime() - offset * 60000)
    .toISOString()
    .slice(0, 10);
};

describe("BookingForm", () => {
  const mockDispatch = jest.fn();
  const mockSubmit = jest.fn();
  const availableTimes = ["17:00", "18:00", "19:00"];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  // Renderizado
  test("Renders the BookingForm heading", () => {
    render(<BookingForm />);

    expect(screen.getByText("BookingForm")).toBeInTheDocument();
  });

  test("Date input has the correct HTML5 attributes", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={mockDispatch}
        onSubmit={mockSubmit}
      />
    );

    const dateInput = screen.getByLabelText(/choose date/i);

    expect(dateInput).toHaveAttribute("type", "date");
    expect(dateInput).toHaveAttribute("required");
    expect(dateInput).toHaveAttribute("min");
  });

  test("Time select is required", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={mockDispatch}
        onSubmit={mockSubmit}
      />
    );

    expect(screen.getByLabelText(/choose time/i)).toBeRequired();
  });

  test("Guests input has the correct HTML5 attributes", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={mockDispatch}
        onSubmit={mockSubmit}
      />
    );

    const guestsInput = screen.getByLabelText(/number of guests/i);

    expect(guestsInput).toHaveAttribute("type", "number");
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
    expect(guestsInput).toBeRequired();
  });

  test("Occasion select is required", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={mockDispatch}
        onSubmit={mockSubmit}
      />
    );

    expect(screen.getByLabelText(/occasion/i)).toBeRequired();
  });

  test("Submit button is disabled when the form is invalid", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={mockDispatch}
        onSubmit={mockSubmit}
      />
    );

    const submitButton = screen.getByRole("button", {
      name: /make your reservation/i,
    });

    expect(submitButton).toBeDisabled();
  });

  test("Submit button is enabled when all fields are valid", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={mockDispatch}
        onSubmit={mockSubmit}
      />
    );

    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: getFutureDate() },
    });

    const submitButton = screen.getByRole("button", {
      name: /make your reservation/i,
    });

    expect(submitButton).toBeEnabled();
  });

  test("Submit button is disabled when guests exceed the maximum", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={mockDispatch}
        onSubmit={mockSubmit}
      />
    );

    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: getFutureDate() },
    });

    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: "11" },
    });

    const submitButton = screen.getByRole("button", {
      name: /make your reservation/i,
    });

    expect(submitButton).toBeDisabled();
  });

  test("Submit button is disabled when the date is in the past", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={mockDispatch}
        onSubmit={mockSubmit}
      />
    );

    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: "2020-01-01" },
    });

    const submitButton = screen.getByRole("button", {
      name: /make your reservation/i,
    });

    expect(submitButton).toBeDisabled();
  });

  test("Calls onSubmit when the form is valid", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={mockDispatch}
        onSubmit={mockSubmit}
      />
    );

    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: getFutureDate() },
    });

    fireEvent.click(
      screen.getByRole("button", {
        name: /make your reservation/i,
      })
    );

    expect(mockSubmit).toHaveBeenCalledTimes(1);
    expect(mockSubmit).toHaveBeenCalledWith({
      date: getFutureDate(),
      time: "17:00",
      guests: 1,
      occasion: "Birthday",
    });
  });
});
