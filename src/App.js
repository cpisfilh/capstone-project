import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { BookingsPage } from "./pages/BookingsPage";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reservations" element={<BookingsPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
