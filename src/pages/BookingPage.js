import { useReducer } from "react";
import { BookingForm } from "../components/BookingForm";

export const initializeTimes = () => {
  return [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];
};

export const updateTimes = (state, selectedDate) => {
  return state;
};

export function BookingPage() {

  const [availableTimes, dispatch] = useReducer(
      updateTimes,
      initializeTimes()
    );

  return (
    <main className="container">
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} onSubmit={() => {}} />
    </main>
  );
}