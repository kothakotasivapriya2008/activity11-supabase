import "./App.css";
import Matches from "./components/Matches";
import Bookings from "./components/Bookings";
import BookingList from "./components/BookingList";

function App() {
  return (
    <div>
      <Matches />
      <Bookings />
      <BookingList />
    </div>
  );
}

export default App;