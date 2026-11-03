import { useState } from "react";

export function BookingForm({availableTimes, dispatch, onSubmit }) {

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const handleDateChange = (e) => {
      const selectedDate = e.target.value;

      setDate(selectedDate);
      dispatch(selectedDate);
    };

  const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit();
    };

  return (
    <form onSubmit={handleSubmit} style={{display: "grid", maxWidth: "200px", gap: "20px"}}>

      <h2>BookingForm</h2>

      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" value={date} onChange={handleDateChange} required />

      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={time} onChange={(e)=>setTime(e.target.value)} required>
        {availableTimes?.map((hour, index) => (
          <option key={index} value={hour}>{hour}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e)=>setGuests(e.target.value)} required />

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={(e)=>setOccasion(e.target.value)} required>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <button type="submit">Make Your reservation</button>

    </form>
  );
}
