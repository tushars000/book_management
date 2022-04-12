import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {AiFillDelete} from 'react-icons/ai'
import {GrUpdate} from 'react-icons/gr'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import Update from '../update/Update'
import './admin.scss'

const Admin = ({authentication}) => {

  const [modal,openModal]=useState(false)
  const [update,setUpdate]=useState(0)
  const [err,setErr]=useState()
  const [item,setItem]=useState({})
  const navigate=useNavigate()
  const [count,setCount]=useState(0)
  const [data,setData]=useState()

  const func=()=>{
    setUpdate(update+1)
  }

  const deleteBook=async (id)=>{
    try{
      const url='http://localhost:8000/books/'+id
      const token=localStorage.getItem("token")
      const res= await axios.delete(url,{ headers: {
        'Authorization': `Token ${token}` 
      }})

      setCount(count+1)
      
    }catch (error){
     
      if(error.response && error.response.status >=400 && error.response.status<=500)
      {
        setErr(error.response.data.message)
      }
    }
  }

  useEffect(()=>{ (
    async()=> {
    const url='http://localhost:8000/books/'
    const token= localStorage.getItem("token")
    const res= await axios.get(url,{ headers: {
      'Authorization': `Token ${token}` 
    }})
    setData(res.data)

    
  })()
  },[count,update])


const logOut=()=>{
  authentication()
  navigate('/login')
}
  
  return (
    <div className='admin'>
      <Navbar/>
      <div className="booksDetails">
        <div className="heading">
            Available Books
          </div>
          <Link to='/books'>
        <button className='button'>Add Book</button>
        </Link>
        {err && <div style={{fontSize:"20px"}}>{err}</div>}
        <div className="table">
            <table border='2px' cellSpacing='0' cellPadding='4px'>
              <tr>
                <th>Name</th>
                <th>ISBN</th>
                <th>Author</th>
                <th>Category</th>

                <th>Delete</th>
                <th>Update</th>
              </tr>
              {data? data.map(item=>{
                return  <tr>
                  <td>{item.name}</td>
                  <td>{item.isbn}</td>
                  <td>{item.author}</td>
                  <td>{item.category}</td>

                  <td><button className='btn' onClick={()=>deleteBook(item.book_id)}><AiFillDelete/> </button></td>
                  <td><button className='btn' onClick={()=>{
                    setItem(item)
                    openModal(!modal)}} ><GrUpdate/></button></td>

                
              </tr>
              }):""
            }
              
            </table>
            
          </div>
          <button className='button' onClick={logOut}>Log out</button>
        {modal && <Update close={openModal} update={func} alldata={item}/>}  
      </div>
    </div>
  )
}

export default Admin