import './login.style.css';
import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useAuth } from '../AuthContext';

export default function Login() {
  const { login } = useAuth();
  const [data, setData] = useState({
    orgEmail: '',
    orgPassword: '',
  });

  const loginUser = async (e) => {
    e.preventDefault();
    const { orgEmail, orgPassword } = data;
    try {
      const response = await axios.post('/login', { orgEmail, orgPassword });
      if (response.data.error) {
        toast.error(response.data.error);
      } else {
        login(response.data.token);
        setData({});
        toast.success('Login Successful!');
      }
    } catch (error) {
      console.error(error);
      toast.error('Login failed. Please try again.');
    }
  };

  return (
    <div>
      <form onSubmit={loginUser}>
        <label>OrgEmail</label>
        <input
          type="email"
          placeholder="Enter email..."
          value={data.orgEmail}
          onChange={(e) => setData({ ...data, orgEmail: e.target.value })}
        />
        <label>OrgPassword</label>
        <input
          type="password"
          placeholder="Enter password..."
          value={data.orgPassword}
          onChange={(e) => setData({ ...data, orgPassword: e.target.value })}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
