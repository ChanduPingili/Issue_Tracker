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
    const {empEmail , empPassword} = data
    console.log(data)
    try {
      const {data} = await axios.post('/dev/login' , {
        empEmail,empPassword
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
        <label>DevEmail</label>
        <input type="email" placeholder='Enter email...' value={data.empEmail} onChange={(e)=>setData({...data , empEmail:e.target.value})}/>
        <label>DevPassword</label>
        <input type="password" placeholder='Enter password...' value={data.empPassword} onChange={(e)=>setData({...data , empPassword:e.target.value})}/>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}
