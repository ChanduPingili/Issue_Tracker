import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import './Userlog.register.css';

export default function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    userId: '',
    userEmail: '',
    userName: '',
    userPassword: ''
  });

 
  const registerUser = async (e) => {
    e.preventDefault();
    const { userId , userEmail , userName, userPassword } = data;
    try {
      const response = await axios.post('/user/register', {
        userId, userEmail,  userName, userPassword
      });
      if (response.data.error) {
        toast.error(response.data.error);
      } else {
        localStorage.setItem('userId' , userId)
        localStorage.setItem('token', data.token);
        setData({
          userId: '',
          userEmail: '',
          userName: '',
          userPassword: ''
        });
        toast.success('Registration Successful!');
        navigate('/Userlogin');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={registerUser}>
        <label>userId</label>
        <input
          type="text"
          placeholder='Enter userid...'
          value={data.userId}
          onChange={(e) => setData({ ...data, userId: e.target.value })}
        />
        <label>userEmail</label>
        <input
          type="email"
          placeholder='Enter userEmail ...'
          value={data.userEmail}
          onChange={(e) => setData({ ...data, userEmail: e.target.value })}
        />
        <label>userName</label>
        <input
          type="text"
          placeholder='Enter userName...'
          value={data.userName}
          onChange={(e) => setData({ ...data, userName: e.target.value })}
        />
        <label>userPassword</label>
        <input
          type="password"
          placeholder='Enter userPassword...'
          value={data.userPassword}
          onChange={(e) => setData({ ...data, userPassword: e.target.value })}
        />
        
    
        <button type='submit'>Register</button>
      </form>
    </div>
  );
}
