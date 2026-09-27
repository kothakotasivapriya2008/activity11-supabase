import { useEffect, useState } from "react";
import { supabase } from "../supabase";

function Matches() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    fetchMatches();
  }, []);

  async function fetchMatches() {
    const { data, error } = await supabase
      .from("matches")
      .select("*");

    if (error) {
      console.error("Error fetching matches:", error);
    } else {
      setMatches(data);
    }
  }

  return (
    <div>
      <h1>Throwball Matches</h1>

      {matches.map((match) => (
        <div key={match.id}>
          <h2>
            {match.team1} vs {match.team2}
          </h2>
          <p>Venue: {match.venue}</p>
          <p>Date: {match.match_date}</p>
          <p>Time: {match.match_time}</p>
        </div>
      ))}
    </div>
  );
}

export default Matches;