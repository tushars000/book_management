import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'


import './update.scss'

const Update = ({close,alldata,update}) => {
  const navigate=useNavigate()
const [data,setData]=useState({...alldata})
const [err,setErr]=useState()
const changeHandler=(event)=>{
  setData({...data,[event.target.name]:event.target.value})
}

const handleSubmit=async (e)=>{
  e.preventDefault()
  try{
    const url='http://localhost:8000/books/'+alldata.book_id +"/"

    const token=localStorage.getItem("token")
    const val=await axios.patch(url,data,{ headers: {
      'Authorization': `Token ${token}` 
    }})
    update()

   close(false)
  }catch (error){
    setErr("error")
    // if(error.response ){
    // }
  }
}

  return (
    <div className='background'>
      <div className='updateBooks'>
      
      <form className='updatebooksform' onSubmit={handleSubmit}>
        <div className="heading">
          Update book
        </div>
        <input type="text" placeholder='NAME' name='name' required onChange={changeHandler} value={data.name}/>
        <input type="text" placeholder='ISBN' name='isbn' required onChange={changeHandler} value={data.isbn}/>
        <input type="text" placeholder='CATEGORY' name='category' required onChange={changeHandler} value={data.category}/>
        <input type="text" placeholder='AUTHOR' name='author' required onChange={changeHandler} value={data.author} />

        <button type='submit' className='button'>update</button>
      <button  className='button' onClick={()=>close(false)}>Cancel</button>
        {err && <div>{err}</div>}
      </form>
    </div>
    </div>
  )
}

export default Update 