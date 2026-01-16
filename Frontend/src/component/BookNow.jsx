import React, { useEffect, useState } from "react";
import { useLocation, Navigate, useNavigate } from "react-router-dom";

const BookNow = () => {
  const seatPrice = 220;
  const location = useLocation();
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  /* ================= AUTH CHECK ================= */
  useEffect(() => {
    if (!token) {
      navigate("/login", { replace: true });
    }
  }, [token, navigate]);

  // Redirect if movie data missing (direct URL access)
  if (!location.state?.movie) {
    return <Navigate to="/" replace />;
  }

  const { movie } = location.state;

  const [selectedDate, setSelectedDate] = useState("Today");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedSeats, setSelectedSeats] = useState([]);

  const dates = ["Today", "Tomorrow", "Day After"];
  const times = ["10:30 AM", "2:00 PM", "6:45 PM", "9:30 PM"];

  const seats = [
    "A1","A2","A3","A4","A5",
    "B1","B2","B3","B4","B5",
    "C1","C2","C3","C4","C5",
  ];

  const handleSeatClick = (seat) => {
    setSelectedSeats((prev) =>
      prev.includes(seat)
        ? prev.filter((s) => s !== seat)
        : [...prev, seat]
    );
  };

  const totalAmount = selectedSeats.length * seatPrice + 30 + 18;

  return (
    <div className="min-h-screen bg-black text-white px-4 py-10">
      <div className="max-w-6xl mx-auto bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 p-6 md:p-10">

        {/* MOVIE INFO */}
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
          <img
            src={movie.image}
            alt={movie.name}
            className="w-40 md:w-48 rounded-xl shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-extrabold text-yellow-400">
              {movie.name}
            </h2>
            <p className="text-gray-300 mt-1">{movie.category}</p>
            <p className="mt-3 text-sm text-gray-400">
              📍 PVR Cinemas – Phoenix Mall
            </p>
          </div>
        </div>

        {/* DATE */}
        <div className="mt-10">
          <h3 className="font-semibold mb-4 text-lg">Select Date</h3>
          <div className="flex gap-3 flex-wrap">
            {dates.map((date) => (
              <button
                key={date}
                onClick={() => setSelectedDate(date)}
                className={`px-5 py-2 rounded-full border transition
                  ${
                    selectedDate === date
                      ? "bg-yellow-500 text-black border-yellow-500"
                      : "border-white/20 hover:bg-white/10"
                  }`}
              >
                {date}
              </button>
            ))}
          </div>
        </div>

        {/* TIME */}
        <div className="mt-10">
          <h3 className="font-semibold mb-4 text-lg">Select Time</h3>
          <div className="flex gap-3 flex-wrap">
            {times.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`px-5 py-2 rounded-full border transition
                  ${
                    selectedTime === time
                      ? "bg-red-600 text-white border-red-600"
                      : "border-white/20 hover:bg-white/10"
                  }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        {/* SEATS */}
        <div className="mt-10">
          <h3 className="font-semibold mb-4 text-lg">Select Seats</h3>

          <div className="text-center mb-4 text-gray-400 text-sm">
            SCREEN THIS WAY
            <div className="h-1 w-40 mx-auto bg-gradient-to-r from-transparent via-gray-500 to-transparent mt-2"></div>
          </div>

          <div className="grid grid-cols-5 gap-3 max-w-sm mx-auto">
            {seats.map((seat) => (
              <div
                key={seat}
                onClick={() => handleSeatClick(seat)}
                className={`cursor-pointer text-center py-2 rounded-lg text-sm font-medium transition
                  ${
                    selectedSeats.includes(seat)
                      ? "bg-green-500 text-black"
                      : "bg-white/10 hover:bg-white/20"
                  }`}
              >
                {seat}
              </div>
            ))}
          </div>
        </div>

        {/* SUMMARY */}
        <div className="mt-12 border-t border-white/10 pt-6">
          <h3 className="font-semibold mb-4 text-lg">Booking Summary</h3>

          <div className="text-sm text-gray-300 space-y-1">
            <p><strong>Seats:</strong> {selectedSeats.join(", ") || "None"}</p>
            <p>Tickets: ₹{seatPrice} × {selectedSeats.length}</p>
            <p>Convenience Fee: ₹30</p>
            <p>GST: ₹18</p>
          </div>

          <h2 className="text-2xl font-extrabold mt-4 text-yellow-400">
            Total: ₹{totalAmount}
          </h2>
        </div>

        {/* PAY */}
        <button
          disabled={!selectedTime || selectedSeats.length === 0}
          className={`w-full mt-8 py-4 rounded-xl text-lg font-bold transition
            ${
              !selectedTime || selectedSeats.length === 0
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-red-600 hover:bg-red-700"
            }`}
        >
          Proceed to Pay
        </button>
      </div>
    </div>
  );
};

export default BookNow;
