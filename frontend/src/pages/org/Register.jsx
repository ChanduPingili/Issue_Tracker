import './register.style.css';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    orgId: '',
    orgName: '',
    orgEmail: '',
    orgPassword: '',
    serviceIds: []
  });

  const handleServiceIdsChange = (e) => {
    const { value } = e.target;
    const serviceIdsArray = value.split(',').map(id => id.trim());
    setData({ ...data, serviceIds: serviceIdsArray });
  };

  const registerUser = async (e) => {
    e.preventDefault();
    const { orgId, orgName, orgEmail, orgPassword, serviceIds } = data;
    try {
      const response = await axios.post('/register', {
        orgId, orgName, orgEmail, orgPassword, serviceIds
      });
      if (response.data.error) {
        toast.error(response.data.error);
      } else {
        // Store orgId in localStorage
        localStorage.setItem('orgId', orgId);
        localStorage.setItem('token', data.token);
        setData({
          orgId: '',
          orgName: '',
          orgEmail: '',
          orgPassword: '',
          serviceIds: []
        });
        toast.success('Registration Successful!');
        navigate('/login');
      }
    } catch (error) {
      console.log(error);
      toast.error('Registration failed. Please try again.');
    }
  };

  return (
    <div>
      <form onSubmit={registerUser}>
        <label>OrgId</label>
        <input
          type="text"
          placeholder="Enter orgId..."
          value={data.orgId}
          onChange={(e) => setData({ ...data, orgId: e.target.value })}
        />
        <label>OrgName</label>
        <input
          type="text"
          placeholder="Enter orgName..."
          value={data.orgName}
          onChange={(e) => setData({ ...data, orgName: e.target.value })}
        />
        <label>OrgEmail</label>
        <input
          type="email"
          placeholder="Enter orgEmail..."
          value={data.orgEmail}
          onChange={(e) => setData({ ...data, orgEmail: e.target.value })}
        />
        <label>OrgPassword</label>
        <input
          type="password"
          placeholder="Enter orgPassword..."
          value={data.orgPassword}
          onChange={(e) => setData({ ...data, orgPassword: e.target.value })}
        />
        <label>ServiceIds</label>
        <input
          type="text"
          placeholder="Enter serviceIds..."
          value={data.serviceIds.join(', ')}
          onChange={handleServiceIdsChange}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
