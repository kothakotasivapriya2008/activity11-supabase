import { useState } from "react";
import { supabase } from "../supabase";

function BookingList() {
  const [bookings, setBookings] = useState([]);

  async function fetchBookings() {
    const { data, error } = await supabase
      .from("bookings")
      .select("*");

    if (error) {
      console.error(error);
      alert("Failed to load bookings");
    } else {
      setBookings(data);
    }
  }

  return (
    <div>
      <h1>Booking History</h1>

      <button onClick={fetchBookings}>View Bookings</button>

      {bookings.map((booking) => (
        <div key={booking.id}>
          <p>Name: {booking.name}</p>
          <p>Team: {booking.team}</p>
          <p>Tickets: {booking.tickets}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default BookingList;