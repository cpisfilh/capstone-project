import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAPI, submitAPI } from "../api";
import { BookingForm } from "../components/BookingForm";

export const initializeTimes = () => {
  return fetchAPI(new Date());
};

export const updateTimes = (state, selectedDate) => {
  return fetchAPI(new Date(selectedDate));
};

export function BookingPage() {
  const navigate = useNavigate();

  const [availableTimes, dispatch] = useReducer(
      updateTimes,
      null,
      initializeTimes
    );

  const submitForm = (formData) => {
      const response = submitAPI(formData);

      if (response) {
        navigate("/reservation-confirmed");
      }
    };

  return (
    <main className="container">
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} onSubmit={submitForm} />
    </main>
  );
}