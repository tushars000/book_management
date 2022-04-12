import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import './signup.scss'

const Signup = () => {

  const navigate=useNavigate()
  const [data,setData]=useState({})
  const [err,setErr]=useState()
  const changeHandler=(event)=>{
    setData({...data,[event.target.name]:event.target.value})
  }

  const handleSubmit=async (e)=>{
    e.preventDefault()
    try{
      const url='http://localhost:8000/user/sign_up/'
      const val=await axios.post(url,data,)

      navigate('/login')
    }catch (error){
      setErr(error.response.data.message)
      // if(error.response ){
      // }
    }
  }
  
  return (
    <div className='signup' onSubmit={handleSubmit}>
      <Navbar/>
    <form className="signup_karo">
      <p className='heading'>USER SIGNUP</p>
      {err && <div className='error'>{err}</div>}
      <input type="text" placeholder='FIRSTNAME' name='first_name' required onChange={changeHandler} />
      <input type="text" placeholder='LASTNAME' name='last_name' required onChange={changeHandler}/>
      <input type="email" placeholder='email' name='email' onChange={changeHandler} />
      <input type="password" placeholder='PASSWORD' name='password' required  onChange={changeHandler}/>
      <input type="password" placeholder='CONFIRM PASSWORD' name='confirm_password' required  onChange={changeHandler}/>
      <input type='submit' className='button'/>
      
    </form>
    </div>
  )
}

export default Signup