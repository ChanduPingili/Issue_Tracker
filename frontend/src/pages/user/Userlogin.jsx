import axios from 'axios'
import { useState } from 'react'
import {toast} from 'react-hot-toast'
import { useAuth } from '../AuthContext'
export default function Login() {
  const {login} = useAuth()
  const [data , setData] = useState({
    email: '',
    password: '',
  }) 
  const loginUser = async(e)=>{
    e.preventDefault()
    const {userEmail , userPassword} = data
    console.log(data)
    try {
      const {data} = await axios.post('/user/login' , {
        userEmail,userPassword
      });
      
      if(data.error){
        toast.error(data.error)
      }else{
        login(data.token);
        setData({})
        toast.success('Login  Successful!')
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <form onSubmit={loginUser}>
        <label>UserEmail</label>
        <input type="email" placeholder='Enter email...' value={data.userEmail} onChange={(e)=>setData({...data , userEmail:e.target.value})}/>
        <label>UserPassword</label>
        <input type="password" placeholder='Enter password...' value={data.userPassword} onChange={(e)=>setData({...data , userPassword:e.target.value})}/>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}   
