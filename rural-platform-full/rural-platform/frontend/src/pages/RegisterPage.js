import { useState } from 'react';
import axios from 'axios';

export default function RegisterPage() {
  const [data, setData] = useState({ name: '', email: '', password: '', phone: '' });

  const register = async () => {
    await axios.post('/api/register', data);
    alert('Registered successfully');
  };

  return (
    <div>
      <h2>Register</h2>
      <input placeholder="Name" onChange={e => setData({ ...data, name: e.target.value })} />
      <input placeholder="Email" onChange={e => setData({ ...data, email: e.target.value })} />
      <input placeholder="Password" type="password" onChange={e => setData({ ...data, password: e.target.value })} />
      <input placeholder="Phone" onChange={e => setData({ ...data, phone: e.target.value })} />
      <button onClick={register}>Sign Up</button>
    </div>
  );
}