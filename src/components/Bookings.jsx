import { useState } from "react";
import { supabase } from "../supabase";

function Bookings() {
  const [name, setName] = useState("");
  const [team, setTeam] = useState("");
  const [tickets, setTickets] = useState("");

  async function addBooking() {
    if (!name || !team || !tickets) {
      alert("Please fill all fields");
      return;
    }

    const { error } = await supabase
      .from("bookings")
      .insert([
        {
          name: name,
          team: team,
          tickets: Number(tickets),
        },
      ]);

    if (error) {
      console.error(error);
      alert("Booking failed");
    } else {
      alert("Booking successful");
      setName("");
      setTeam("");
      setTickets("");
    }
  }

  return (
    <div>
      <h1>Throwball Match Booking</h1>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Enter team"
        value={team}
        onChange={(e) => setTeam(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Number of tickets"
        value={tickets}
        onChange={(e) => setTickets(e.target.value)}
      />

      <br /><br />

      <button onClick={addBooking}>Book Ticket</button>
    </div>
  );
}

export default Bookings;