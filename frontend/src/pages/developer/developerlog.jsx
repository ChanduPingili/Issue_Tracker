import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import './developer.register.css';

export default function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    empId: '',
    empName: '',
    empEmail: '',
    empPassword: '',
    empPhn: '',
    empServiceId: ''
  });

  const registerUser = async (e) => {
    e.preventDefault();
    const { empId, empName, empEmail, empPassword, empPhn,empServiceId } = data;
    try {
      const response = await axios.post('/dev/register', {
        empId, empName, empEmail, empPassword, empPhn, empServiceId
      });
      if (response.data.error) {
        toast.error(response.data.error);
      } else {
        localStorage.setItem('empId' , empId)
        localStorage.setItem('token', data.token);
        setData({
          empId: '',
          empName: '',
          empEmail: '',
          empPassword: '',
          empPhn: '',
          empServiceId: ''
        });
        toast.success('Registration Successful!');
        navigate('/developerlogin');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={registerUser}>
        <label>EmpId</label>
        <input
          type="text"
          placeholder='Enter empid...'
          value={data.empId}
          onChange={(e) => setData({ ...data, empId: e.target.value })}
        />
        <label>empName</label>
        <input
          type="text"
          placeholder='Enter empName...'
          value={data.empName}
          onChange={(e) => setData({ ...data, empName: e.target.value })}
        />
        <label>empEmail</label>
        <input
          type="email"
          placeholder='Enter email...'
          value={data.empEmail}
          onChange={(e) => setData({ ...data, empEmail: e.target.value })}
        />
        <label>empPassword</label>
        <input
          type="password"
          placeholder='Enter Emppassword...'
          value={data.empPassword}
          onChange={(e) => setData({ ...data, empPassword: e.target.value })}
        />
        <label>empPhn</label>
        <input 
          type='text' 
          placeholder='Enter phonenumber'
          value={data.empPhn}
          onChange={(e) => setData({ ...data, empPhn: e.target.value })}
        />
        <label>empServiceId</label>
        <input
          type='text'
          placeholder='Enter serviceId'
          value={data.empServiceId}
          onChange={(e) => setData({ ...data, empServiceId: e.target.value })}
        />
        <button type='submit'>Register</button>
      </form>
    </div>
  );
}
