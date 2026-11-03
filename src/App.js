import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { BookingPage } from "./pages/BookingPage";
import { ConfirmedBookingPage } from "./pages/ConfirmedBookingPage";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reservations" element={<BookingPage />} />
        <Route path="/reservation-confirmed" element={<ConfirmedBookingPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
