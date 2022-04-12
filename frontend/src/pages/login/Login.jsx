import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import './login.scss'


const Login = ({authentication}) => {

  const navigate=useNavigate()
  const [data,setData]=useState({})
  const [err,setErr]=useState()

  const changeHandler=(event)=>{
    setData({...data,[event.target.name]:event.target.value})
  }

  const handleSubmit=async (event)=>{
    event.preventDefault()
   
    try{
      const url='http://localhost:8000/user/login/'
      const res=await axios.post(url,data)
      const token = res.data.token
      localStorage.setItem("token", token);
      authentication()
      navigate('/admin')
    }catch (error){
      
      if(error.response && error.response.status >=400 && error.response.status<=500)
      {
        setErr(error.response.data.message)
      }
    }
  }

  return (
    <div className='login'>
      <Navbar />
      <form className="loginform" onSubmit={handleSubmit}>

        <div className="heading">ADMIN LOGIN</div>

        {err && <div style={{fontSize:"30px",color:"red"}}>{err}</div>}

        <input type="email" name='email' placeholder='email' className="user" required onChange={changeHandler}/>

        <input type='password' name='password' className="pass" placeholder='password' required  onChange={changeHandler}/>

        <div className='submitButton'>

          <input type='submit' className='button'/>
          <div className="newuser">
            <Link to='/signup'>
            <button className="button">Sign Up</button>
            </Link>
          
          </div>
        </div>

        <div className='submitButton'>

        <h3>Not an Admin ?</h3>
          <div className="newuser">
            <Link to='/student'>
            <button className="button">Student</button>
            </Link>
          
          </div>
        </div>
       
        
    

       
      </form>
    </div>
  )
}

export default Login