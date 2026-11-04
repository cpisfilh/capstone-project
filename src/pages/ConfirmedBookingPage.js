import "../styles/ConfirmedBookingPage.css";

export function ConfirmedBookingPage() {
  return (
    <main className="container confirmed-booking">
          <div className="confirmed-booking__content">
            <span className="confirmed-booking__icon" aria-hidden="true">
              ✓
            </span>

            <h1>Booking Confirmed!</h1>

            <p>
              Thank you for your reservation. We look forward to serving you!
            </p>
          </div>
        </main>
  );
}