import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Dashboard() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const token = localStorage.getItem('token');
      const user = JSON.parse(atob(token.split('.')[1]));
      const res = await axios.get('/api/bookings/' + user.id);
      setBookings(res.data);
    };
    fetchBookings();
  }, []);

  return (
    <div>
      <h2>User Dashboard</h2>
      <ul>
        {bookings.map((b, i) => (
          <li key={i}>{b.items.map(item => `${item.name} x${item.quantity}`).join(', ')}</li>
        ))}
      </ul>
    </div>
  );
}