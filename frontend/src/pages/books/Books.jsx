import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import './books.scss'

const Books = () => {

  const navigate=useNavigate()
const [data,setData]=useState({})
const [err,setErr]=useState()
const changeHandler=(event)=>{
  setData({...data,[event.target.name]:event.target.value})
}

const handleSubmit=async (e)=>{
  e.preventDefault()
  try{
    const url='http://localhost:8000/books/'
    const token=localStorage.getItem("token")
    const val=await axios.post(url,data,{ headers: {
      'Authorization': `Token ${token}` 
    }})
    navigate('/admin')
  }catch (error){
    setErr("validation Error, please Provide correct data")
    // if(error.response ){
    // }
  }
}


  return (
    <div className='books'>
      <Navbar/>
      <form className='booksform' onSubmit={handleSubmit}>
        <div className="heading">
          ADD BOOK
        </div>
        {err && <div className='error'>{err}</div>}
        <input type="text" placeholder='NAME' name='name' required onChange={changeHandler}/>
        <input type="text" placeholder='ISBN' name='isbn' required onChange={changeHandler}/>
        <input type="text" placeholder='CATEGORY' name='category' required onChange={changeHandler}/>
        <input type="text" placeholder='AUTHOR' name='author' required onChange={changeHandler} />

        <button type='submit' className='button'>ADD</button>
        
      </form>
    </div>
  )
}

export default Books